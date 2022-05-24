import { default as OLMousePosition, Options } from "ol/control/MousePosition";
import { Coordinate } from "ol/coordinate";
import { Projection } from "ol/proj";
import { RContextType } from "rlayers";
import { default as RControlBase, RControlProps } from "rlayers/control/RControlBase";

// TODO: PR into rlayers directly
export interface MousePositionProps extends RControlProps {
  coordinateFormat?: (coordinate: Coordinate) => string;
  projection?: Projection;
  placeholder?: string | boolean;
  undefinedHtml?: string;
}

export class MousePosition extends RControlBase<MousePositionProps, Record<string, never>> {
  ol: OLMousePosition;

  constructor(props: Readonly<MousePositionProps>, context: React.Context<RContextType>) {
    super(props, context);
    this.ol = new OLMousePosition(this.toOLProps(props));
  }

  toOLProps(props: MousePositionProps): Options {
    return {
      ...super.toOLProps(props),
      className: props.className,
      coordinateFormat: props.coordinateFormat,
      projection: props.projection,
      placeholder: props.placeholder,
      undefinedHTML: props.undefinedHtml,
    };
  }
}
