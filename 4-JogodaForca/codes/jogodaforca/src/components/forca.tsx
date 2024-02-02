import './styles/forca.css'

// array de classnames das partes do corpo no css
const CORPO = ['cabeca', 'tronco', 'bracoDir', 'bracoEsq', 'pernaDir', 'pernaEsq'];

type ForcaProps = {
    numeroTentativas: number
  }

// produz a figura do jogo
export default function Forca({ numeroTentativas }: ForcaProps) {
    // número de tentativas são os ERROS
    return(
        <div className='figura'>
            {/* corpo do enforcado */}
            {
            CORPO.map(key => {
                return(
                    <div className={key} key={key}></div>
                )
            }).slice(0, numeroTentativas)
            }

            {/* forca */}
            <div className="topo"></div>
            <div className="haste"></div>
            <div className="base"></div>
            <div className="corda"></div>

        </div>
        
    )
}