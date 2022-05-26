import { View } from "ol";
import { getPointResolution, METERS_PER_UNIT } from "ol/proj";
import ProjectionUnits from "ol/proj/Units";
import { useRView } from "./useRView";

const DEFAULT_DPI = 25.4 / 0.28;

const DEFAULT_MINWIDTH = 64;

enum Units {
  DEGREES = "degrees",
  IMPERIAL = "imperial",
  NAUTICAL = "nautical",
  METRIC = "metric",
  US = "us",
}

const LEADING_DIGITS = [1, 2, 5];

const MAGIC_NUMBER = 3;

type ScaleLineOptions = {
  units?: Units;
  dpi?: number;
  minWidth?: number;
  maxWidth?: number;
};

const metersPerDegree = METERS_PER_UNIT[ProjectionUnits.DEGREES];

/**
 * Determine display units
 */
const calculateDisplayScale = (units: Units, nominalCount: number, resolution: number) => {
  let distance = nominalCount;
  let width = resolution;
  let suffix = "";

  switch (units) {
    case Units.DEGREES:
      distance *= metersPerDegree;
      if (distance < metersPerDegree / 60) {
        suffix = "\u2033"; // seconds
        width *= 3600;
      } else if (distance < metersPerDegree) {
        suffix = "\u2032"; // minutes
        width *= 60;
      } else {
        suffix = "\u00b0"; // degrees
      }
      break;

    case Units.IMPERIAL:
      if (distance < 0.9144) {
        suffix = "in";
        width /= 0.0254;
      } else if (distance < 1609.344) {
        suffix = "ft";
        width /= 0.3048;
      } else {
        suffix = "mi";
        width /= 1609.344;
      }
      break;

    case Units.NAUTICAL:
      width /= 1852;
      suffix = "NM";
      break;

    case Units.METRIC:
      if (distance < 0.001) {
        suffix = "μm";
        width *= 1000000;
      } else if (distance < 1) {
        suffix = "mm";
        width *= 1000;
      } else if (distance < 1000) {
        suffix = "m";
      } else {
        suffix = "km";
        width /= 1000;
      }
      break;

    case Units.US:
      if (distance < 0.9144) {
        suffix = "in";
        width *= 39.37;
      } else if (distance < 1609.344) {
        suffix = "ft";
        width /= 0.30480061;
      } else {
        suffix = "mi";
        width /= 1609.3472;
      }
      break;
  }

  return {
    distance,
    suffix,
    width,
  };
};

/**
 * Determine the parameters of the scale
 */
const calculateScaleWidth = (view: View, dpi: number, units?: Units, min = 64, max?: number) => {
  const calculatedUnits = units ?? (view.getProjection().getUnits() as Units) ?? Units.METRIC;
  const center = view.getCenter();
  const projection = view.getProjection();
  const pointResUnits = units === Units.DEGREES ? ProjectionUnits.DEGREES : ProjectionUnits.METERS;
  const rawPointResolution = getPointResolution(projection, view.getResolution(), center, pointResUnits);
  const minWidth = min * (dpi / DEFAULT_DPI);
  const maxWidth = max ? max * (dpi / DEFAULT_DPI) : undefined;

  const { suffix, width } = calculateDisplayScale(units, minWidth * rawPointResolution, rawPointResolution);

  return {
    suffix: suffix === "" ? calculatedUnits : suffix,
    units: calculatedUnits,
    width,
    minWidth,
    maxWidth,
  };
};

/**
 * Determine final width
 */
const calculateWidth = (totalWidth: number, min: number, max?: number) => {
  let i = MAGIC_NUMBER * Math.floor(Math.log(min * totalWidth) / Math.log(10));
  let scale: number, width: number, decimalCount: number;
  let previousCount: number, previousWidth: number, previousDecimalCount: number;

  let done = false;

  while (!done) {
    decimalCount = Math.floor(i / MAGIC_NUMBER);
    const decimal = Math.pow(10, decimalCount);
    scale = LEADING_DIGITS[((i % MAGIC_NUMBER) + MAGIC_NUMBER) % MAGIC_NUMBER] * decimal;
    width = Math.round(scale / totalWidth);
    if (isNaN(width)) {
      return { scale: 0, width: min };
    }

    if (max && width >= max) {
      scale = previousCount;
      width = previousWidth;
      decimalCount = previousDecimalCount;
      done = true;
      break;
    } else if (width >= min) {
      done = true;
      break;
    }

    previousCount = scale;
    previousWidth = width;
    previousDecimalCount = decimalCount;
    ++i;
  }

  return { scale, width };
};

export const useScaleLine = ({ units, dpi = DEFAULT_DPI, minWidth = DEFAULT_MINWIDTH, maxWidth }: ScaleLineOptions) => {
  const view = useRView();

  const {
    suffix,
    width: totalWidth,
    minWidth: dpiMinWidth,
    maxWidth: dpiMaxWidth,
  } = calculateScaleWidth(view, dpi, units, minWidth, maxWidth);

  const { scale, width } = calculateWidth(totalWidth, dpiMinWidth, dpiMaxWidth);

  return {
    label: `${scale}${suffix}`,
    width,
  };
};
