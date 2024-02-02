import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage } from "@prismicio/react";
/**
 * Props for `SobreNos`.
 */
export type SobreNosProps = SliceComponentProps<Content.SobreNosSlice>;

/**
 * Component for "SobreNos" Slices.
 */
const SobreNos = ({ slice }: SobreNosProps): JSX.Element => {
  return (
    <div className="sobreNos">
      <div className="titulo-sobreNos"><PrismicRichText field={slice.primary.titulo} /></div> 
      <div className="blocoDescricao">
        <div className="imagem"><PrismicNextImage field={slice.primary.imagem} imgixParams={{w: 1.0}} /></div>
        <div className="descricao"><PrismicRichText field={slice.primary.texto} /></div>
      </div>
    </div>
  );
};

export default SobreNos;
