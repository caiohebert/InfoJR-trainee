import { useState } from 'react';
import './Calculator.css'

export default function Calculator(){
    const [num, setNum] = useState(0);
    const [acumulador, setAcumulador] = useState(0);
    const [operador, setOperador] = useState();
    // diz se um botão de operador foi clicado
    const [operado, setOperado] = useState(false);

    // FUNÇÕES
    function entradaNum(e){
        var entrada = e.target.value;
        if (num === 0 || operado){
            setNum(entrada);
            // ao digitar o segundo número da operação, ela vai ser terminada, então tem que voltar ao estado inical de false
            setOperado(false);
        }
        else{
            setNum(num + entrada);
        }
    }

    function limpar(){
        setNum(0);
    }

    function porcentagem(){
        setNum(num/100);
    }

    function mudarSinal(){
        if (num>0){
            setNum(-num);
        }
        else{
            setNum(Math.abs(num))
        }
    }
    //d
    function defineOperacao(e){
        var entradaOperador = e.target.value;
        setOperador(entradaOperador);
        // uma operação será realizada, então mudamos o estado de operado
        setOperado(true);
        setAcumulador(num);
    }

    function calcular(){
        switch(operador){
            case "/":
                setNum(parseFloat(acumulador)/parseFloat(num));
                break;

            case "X":
                setNum(parseFloat(acumulador) * parseFloat(num));
                break;

            case "-":
                setNum(parseFloat(acumulador) - parseFloat(num));
                break;

            case "+":
                setNum(parseFloat(acumulador) + parseFloat(num));
                break;
        }
    }

    // Estrutura da calculadora
    return(
        <div className='calculadora'>
            <div className='tela'>
               <h1 className='resultado'>{num}</h1> 
            </div>
            <div className='botoes'>
                {/* fileira 1 */}
                <button className='operacao-secundaria' onClick={limpar}>C</button>
                <button className='operacao-secundaria' onClick={mudarSinal}>+/-</button>
                <button className='operacao-secundaria' onClick={porcentagem}>%</button>
                <button className='operacao' onClick={defineOperacao} value={"/"}>/</button>

                {/* fileira 2 */}
                <button className='numero' onClick={entradaNum} value={7}>7</button>
                <button className='numero' onClick={entradaNum} value={8}>8</button>
                <button className='numero' onClick={entradaNum} value={9}>9</button>
                <button className='operacao' onClick={defineOperacao} value={"X"}>x</button>

                {/* fileira 3 */}
                <button className='numero' onClick={entradaNum} value={4}>4</button>
                <button className='numero' onClick={entradaNum} value={5}>5</button>
                <button className='numero' onClick={entradaNum} value={6}>6</button>
                <button className='operacao' onClick={defineOperacao} value={"-"}>-</button>

                {/* fileira 4 */}
                <button className='numero' onClick={entradaNum} value={1}>1</button>
                <button className='numero' onClick={entradaNum} value={2}>2</button>
                <button className='numero' onClick={entradaNum} value={3}>3</button>
                <button className='operacao' onClick={defineOperacao} value={"+"}>+</button>

                {/* fileira 5 */}
                <button className='botao0' onClick={entradaNum} value={0}>0</button>
                <button className='numero' onClick={entradaNum} value={"."}>.</button>
                <button className='operacao' onClick={calcular}>=</button>
            </div>
        </div>
    ); 
}