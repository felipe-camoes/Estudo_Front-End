import React from 'react' // Importa a biblioteca react
import ReactDOM from 'react-dom/client' // Importa a bibliotaca para manipulação do DOM

// Estrutura de execução do react 
const root = ReactDOM.createRoot(document.getElementById("root")) // Cria a raiz, onde sera excutado o codigo
root.render(<Component />) // Renderiza o componente no elemento  raiz

// Objeto reactDOM
ReactDOM // Objeto para renderizar a aplicaçao no navegador, reacDOM.render(<Component />)

// Objeto react.dom
React.dom // Objeto que contem os elementos html
React.dom.div(null, "texto") // Retorna uma div sem atributo com um filho texto
React.dom.div(
  {
    id: "idDoobejto",
    className: "classeDoObjeto",
    htmlFor: "for",
    style: {
      backgroundColor: "green"// Nao usar hifens como no css
    }
  }, "texto"
)// Retorna uma div com atributo e com um filho texto, podendo ser outro elemento ou conjunto de elementos

// ------------- Componente -------------
// Componente é uma função que retorna um elemento HTML
function Componente() {
  return (
    <>
      <div>Componente</div>
    </>
  )
}

// Componente como classe deve herdar de React.Component as funçoes e utilizar o metodo render para retornar o elemento
var componteClaase = React.creaClass({
  render: function () {
    return (
      React.DOM.div(null, "ola")
    )
  }
})

class Component extends React.Component {
  render() {
    return (
      React.DOM.div(null, "ola")
    )
  }
}

// ------------- if else dentro do JSX -------------
function IfElse() {
  return (
    <>
      <div>{(valor) < 10 ? true : false}</div> {/*Dentro do JSX usa o operador ternario*/}
      <div>{valor < 10 && <div>outro valor</div>}</div> {/*Dentro do JSX usa o operador &&*/}
    </>
  )
}

// ------------- Props -------------
function Props(props) {
  return (
    <>
      <div>valor exibir:{props.atributo}</div>
    </>
  )
}

// Declarar as props em um objeto
function PropsObj({ atributo1, atributo2 }) {
  return (
    <>
      <div>valor exibir:{atributo1}</div>
      <div>valor exibir:{atributo2}</div>
    </>
  )
}

<Props atributo1="azul" />// Props funciona como um atributo do componente4

// ------------- Props Children -------------
function ChildreProps({children}){
  return(
    <div>{children}</div>
  )
}

<ChildenProps>Valor do children</ChildenProps> // Derine um elemento filho para o elemento atraves de uma props

// ------------- Atributos do JSX -------------

var elemento = <div htmlFor="tagFor" className="tagClass">atributos</div>

// ------------- onClick -------------

function OnClick() {
  return (
    <>
      <div onClick={() => { console.log("Evento acionado") }}></div>
    </>
  )
}

// ------------- Declaração de elementos -------------

function Elemento() {
  var elemento1 = <div>DIV</div>
  var elemento2 = (
    <>
      <div>DIV</div>
      <div>DIV</div>
    </>
  )
  return (
    { elemento1 },
    { elemento2 }
  )
}

// ------------- Map -------------

function Lista() {
  const lista = [1, 2, 3, 4]
  return (
    <>
      <div>{lista.map((el) => {
        const elemento = <div>{el * 2}</div>
      })}</div>
    </>
  )
}

// ------------- Formulario -------------

function Form() {
  return (
    <form>
      <input type='text' onChange={() => { }}></input> {/* Excuta uma função a cada mudaça no elemento*/}
      <input type='text' onSubmit={() => { }}></input> {/* Excuta uma função quando for enviado os dados*/}
      <textarea value={valorDoCampo}></textarea> {/* Em textarea o texto deve estar no value do elemento textarea*/}
      <select value="valorSelect"> {/* Para deixar um valor selecionado na tag select deve usar no value do select qual sera selecionado */}
        <option value="valor1"></option>
        <option value="valorSelect"></option>
      </select>
    </form>
  )
}


// ------------- Expreçao regular -------------

function ExpressaoRegular() {
  return (
    { variavel } // Executa uma expressao javascript dentro do JSX
  )
}

// ------------- UseState -------------
import { useState } from 'react' // Importa a biblioteca useState

function UseState() {
  const [variavel, setVariavel] = useState(1); // Declaração da variavel useState
  return (
    <>
      <div>{variavel}</div>
      <button onClick={() => { setVariavel({ this.props.text:"dfdf"}) }}>Clicar aqui</button > {/* setVariavel altera o valor da variavel*/ }
    </>
  )
}

// ------------- UseEffect -------------
import { useEffect } from 'react' // Importa a biblioteca useState

function useEffect() {
  const [variavel, setVariavel] = useState(1); // Declaração da variavel useState

  useEffect(() => {
    console.log("Foi renderizado")
  },[])// Executa uma função cada vez que os componentes são renderizado, se tiver a depencia [] executa apenas uma vez

  return (
    <>
      <button onClick={setVariavel(1)}></button>
    </>
  )
}

// ------------- useContext -------------

import { useContext } from 'react'

const AppContext = createContext(null) // Cria um escopo para as varieveis

function app() {
  const [variavel1, setVariavel1] = useState("")
  const [variavel2, setVariavel2] = useState("")
  return (
    <AppContext.Provider value={{ variavel1, variavel2 }}>
      <Componet1 />
      <Componet2 />
    </AppContext.Provider>
  )
}

function Componente1() {
  const { variavel1, variavel2 } = useContext(AppContext)
  return (
    <>
      <div>{variavel1}</div>
      <div>{variavel2}</div>
    </>
  )
}
function Componente2() {
  const { variavel1, variavel2 } = useContext(AppContext)
  return (
    <>
      <div>{variavel1}</div>
      <div>{variavel2}</div>
    </>
  )
}

