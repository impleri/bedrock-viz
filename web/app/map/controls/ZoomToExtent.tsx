import { default as OLZoomToExtent, Options } from "ol/control/ZoomToExtent";
import { Extent } from "ol/extent";
import { RContextType } from "rlayers";
import { default as RControlBase, RControlProps } from "rlayers/control/RControlBase";

// TODO: PR into rlayers directly
export interface ZoomToExtentProps extends RControlProps {
  extent?: Extent;
  label?: string | HTMLElement;
  tipLabel?: string;
}

export class ZoomToExtent extends RControlBase<ZoomToExtentProps, Record<string, never>> {
  ol: OLZoomToExtent;

  constructor(props: Readonly<ZoomToExtentProps>, context: React.Context<RContextType>) {
    super(props, context);
    this.ol = new OLZoomToExtent(this.toOLProps(props));
  }

  toOLProps(props: ZoomToExtentProps): Options {
    return {
      ...super.toOLProps(props),
      className: props.className,
      extent: props.extent,
      label: props.label,
      tipLabel: props.tipLabel,
    };
  }
}
