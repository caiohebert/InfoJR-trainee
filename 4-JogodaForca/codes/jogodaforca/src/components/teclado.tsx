import './styles/teclado.css'

const TECLAS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

type TecladoProps = {
    disabled?: boolean
    // letras ativas são os acertos e as inativas, os erros
    letrasAtivas: string[]
    letrasInativas: string[]
    addLetraAdivinhada: (letra: string) => void
}

// teclado interativo
export default function Teclado({disabled = false, letrasAtivas, letrasInativas, addLetraAdivinhada}: TecladoProps ) {
    return(
        <div className="teclado">
            {TECLAS.map(key => {
                // booleanos pra saber se a letra do teclado clicada ta certa ou errada e mudar seu estilo
                const Ativa = letrasAtivas.includes(key);
                const Inativa = letrasInativas.includes(key);

                return(
                    <button onClick={() => {addLetraAdivinhada(key)}} 
                            className="letra" 
                            disabled = {Inativa || Ativa || disabled}
                            key={key}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}