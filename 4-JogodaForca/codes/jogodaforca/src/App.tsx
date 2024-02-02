import Palavra from "./components/palavra";
import Forca from "./components/forca";
import Teclado from "./components/teclado";
import { palavrasForca } from './listaPalavras';
import './styles/app.css'
import { useState, useEffect, useCallback } from "react";


function App() {
  // placar
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  // escolhe palavra aleatória do banco de palavras para jogar
  function getResposta(){
    return palavrasForca[Math.floor(Math.random() * palavrasForca.length)]
  }

  const [resposta, setResposta] = useState(getResposta);

  console.log("Palavra aleatória para o jogo da forca:", resposta);

  // total de letras adivinhadas
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);

  // --------------------------------------------------
  // letras erradas são as adivinhadas que não estão na string da resposta
  const letrasIncorretas = letrasAdivinhadas.filter(
    letra => !resposta.includes(letra)
  );

  // Contadores para saber se ganhou ou não
  const perdeu = letrasIncorretas.length >= 6;
  const ganhou = resposta
    .split("")
    .every(letra => letrasAdivinhadas.includes(letra));

  // --------------------------------------------------
  // impede que o array de letras adivinhadas seja reescrito toda vez
  const addLetraAdivinhada = useCallback(
    (letra: string) => {
      if (letrasAdivinhadas.includes(letra) || perdeu || ganhou){
        return;
      } 

      setLetrasAdivinhadas(letras => [...letras, letra]);
    },
    [letrasAdivinhadas, perdeu, ganhou]
  );

  // --------------------------------------------------
  // efeito dinâmico p pegar a letra do teclado (pode jogar com o teclado)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)){
        return;
      } 

      e.preventDefault();
      addLetraAdivinhada(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, []);

  // --------------------------------------------------
  // reinicia o jogo inteiro e atualiza o placar
  function reiniciar(){
    setLetrasAdivinhadas([]);
    setResposta(getResposta);
    if (ganhou){
      setVitorias(vitorias+1);
    }
    // if necessário caso o jogador reinicie antes do jogo acabar
    if (perdeu){
      setDerrotas(derrotas+1);
    }
  }

  // --------------------------------------------------
  // Main
  return (
    <div className="app">
      <h1>Jogo da Forca</h1>
      
      <button onClick={reiniciar} className="reiniciar">Novo jogo</button>

      <div className="placar">
          <h3>PLACAR</h3>
          <div>
            <p>Vitórias: {vitorias}</p>
            <p>Derrotas: {derrotas}</p>
          </div>
      </div>
      

      <div className="resultado">
        {ganhou && "Você é barril."}
        {perdeu && "Não foi dessa vez!"}
      </div>
      

      <div className="jogo">
        <Forca numeroTentativas={letrasIncorretas.length} />

        <Palavra 
          letrasAdivinhadas={letrasAdivinhadas} 
          resposta={resposta} 
          revela = {perdeu}
        />
        
        <Teclado 
          letrasAtivas={letrasAdivinhadas.filter(letra => resposta.includes(letra))}
          letrasInativas={letrasIncorretas}
          addLetraAdivinhada={addLetraAdivinhada}
          disabled={ganhou || perdeu}
        />

      </div>
    </div>
  )
    
}

export default App
