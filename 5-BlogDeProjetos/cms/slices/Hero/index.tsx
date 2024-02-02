import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div className="hero">
      <div className="titulo"><PrismicRichText field={slice.primary.titulo} /></div>
      <div className="subtitulo"><PrismicRichText field={slice.primary.subtitulo} /></div>
    </div>
  );
};

export default Hero;
