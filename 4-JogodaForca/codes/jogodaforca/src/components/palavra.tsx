import './styles/palavra.css'

type PalavraProps = {
  letrasAdivinhadas: string[]
  resposta: string
  revela?: boolean
}

// quadro interativo com palavra
export default function Palavra({letrasAdivinhadas, resposta, revela = false}: PalavraProps) {
    return(
        <div>
          <h2 className="container">
            {/* separa a resposta em letras diferentes indexadas */}
            {resposta.split("").map((letra, index) => (
              
              <span className="resposta" key={index}>
                <span style={{
                  visibility: letrasAdivinhadas.includes(letra) || revela
                  ? "visible"
                  : "hidden",
                  
                  // colocando as letras que não acertamos em vermelho
                  color: 
                    !letrasAdivinhadas.includes(letra) && revela ? "red" : "black"
                }}
                >
                  {letra}
                </span>
              </span>
            ))}

          </h2>  
        </div>
    )
}