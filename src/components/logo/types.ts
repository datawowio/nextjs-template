import type { ImageProps } from "next/image";
import type { BaseComponent } from "@/types/components";

export interface LogoProps
  extends BaseComponent,
    Pick<ImageProps, "alt" | "height" | "src" | "width"> {}
