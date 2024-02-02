// ------------- Comentários -------------

// comentario 
/* comentario */

// ------------- Identificadores -------------

// variavel 
// _varivavel
// $varivavel

// ------------- Declarações -------------

const variavelConst = 10; // Não altera o valor da varivel   
let varivavelLet = 10; // Funciona apenas no seu escopo    
var varivavelVar = 10; // Funciona em todo escopo global   
variavel = 10 // Funciona como propiedade do objeto global

// ------------- Estruturas de controle -------------

// if else
if (verdade) { }
else { }

// Switch case
let controle = 1

switch (controle) {
    case 1:
        console.log("Faça");
        break;
    case 2:
        console.log("Faça");
        break;
    default:
        console.log("Condição falsa");
        break;
}

// ------------- Operadores aritméticos -------------

// (+)  - Mais
// (-)  - Menos
// (/)  - Divisão
// (*)  - Multiplicação
// (**) - Exponenciação
// (%)  - Resto
// (++) - Incremento
// (--) - Decremento

// ------------- Operadores de comparação -------------

// (==)  - Igual
// (===) - Igual no valor e tipo
// (>)   - Maior que
// (<)   - Menor que	
// (>=)  - Maior igual que
// (<=)  - Menor igual que
// (?)   - Operador ternário 

// ------------- Operadores lógicos -------------

// (||) - ou
// (&&) - e
// (!)  - Não 

// ------------- Laços de repetição -------------

for (let i = 0; i <= 10; i++) { }
while (verdade) { }
do { console.log("imprime") } while (i <= 10)

// Controle de fluxo
break // Para a execução do loop
continue // Continua a execução do loop

// ------------- Saidas -------------

prompt("") // Saida pelo prompt
console.log("") // Saida pelo console
alert("") // Saida pelo alert
confirm("") // Saida com confirmação

// ------------- Tipos de dados primitivos ------------- 

var tipoDados = "String" // String 
var tipoDados = 123456789123456; // Number
var tipoDados = true // Boolean
var tipoDados = undefined // Valor não atribuido
var tipoDados = null // Tipo de objeto que representa a ausencia de valor
var tipoDados = Symbol("simbolo") // Cria um identificador unico , ou seja será exclusivo da variavel

// ------------- Tipos de dados de objetos  -------------

// Objeto 

// Objeto com metodo construtor
const objetoConstrutor = new Object()

// Objeto literal
const objetoLiteral = {
    // Propriedades
    nome: null,
    idade: null,
    peso: null,
    alutra: null,

    // Metodos
    imc: function () {
        return this.peso / this.altura ** 2
    },
    // Objeto dentro de objeto
    obejtoIn: {
        cabelo: null,
        nariz: null,
    },
    // Get
    get nome() {
        this.nome
    },
    // Set
    set setNome(setNome) {
        this.nome = setNome
    },
}

// Propriedades

// Atribuir valor ao objeto, caso nao exista cria um novo atributo com os valores especificados
objetoLiteral.nome = "Felipe"
objetoLiteral.idade = 24
objetoLiteral.peso = 94
objetoLiteral.alutra = 185

// Cria um metodo no objeto
objetoLiteral.novoMetodo = function () { return this.nome }

// Consultar valor
objetoLiteral.nome
objetoLiteral["nome"]
objetoLiteral[variavel]

// Atribuir valor de objeto dentro de objeto
objetoLiteral.obejtoIn.cabelo = "azul"
objetoLiteral.obejtoIn["cabelo"] = "azul"
objetoLiteral.obejtoIn[variavel] = "azul"

// Consultar valor de objeto dentro de objeto
objetoLiteral.obejtoIn.cabelo
objetoLiteral.obejtoIn["cabelo"]
objetoLiteral.obejtoIn[variavel]

// Metodos

// Executar metodo de objeto
objetoLiteral.imc()

// Adicionar Metodo a um objeto
objetoLiteral.metonoNovo = function () {
    return this
}

// Exibir objeto
const arrayObjeto = Object.values(objetoLiteral) // Exibi os atributos e os metodos do objeto em formato de lista
const stringObjeto = JSON.stringify(objetoLiteral) // Exibi os atributos do objeto em formato de string

// Objeto global object 

// Propriedades

// Todo objeto javascript herda atributos e metodoss de objetos prototipos 
objetoLiteral.__proto__ // Retorna o objeto prototipo do objetoLiteral

// Metodos
Object.create(objetoLiteral) // Cria um objeto atraves de um objeto prototype passado

// Cria ou muda uma porpiedade de um objeto
Object.defineProperty(objetoLiteral, "nomeAtributo", {
    value: "valor Propriedade", // Define o valor do atributo
    writable: true, // Define se o atributo é gravavel
    enumerable: true, // Define se o atributo é enumeravel
    configurable: true // Define se o atributo é configuravel
});

// Cria ou muda porpiedades de um objeto
Object.defineProperties(objetoLiteral, {
    atributo1: {
        value: "valorAtributo"
    },
    atributo2: {
        value: "valorAtributo"
    }
})

Object.getOwnPropertyDescriptor(objetoLiteral, atributo1) // Acessa o valor da propriedade
Object.getOwnPropertyNames(objetoLiteral) // Acessa as propriedades de um objeto retornando um array
Object.keys(objetoLiteral) // Retorna as propriedades enumeraveis como um array
Object.getPrototypeOf(objetoLiteral)// Acessa o prototype do objeto
Object.preventExtensions(objetoLiteral) // Proibi de adicionar propriedades ao objeto
Object.isExtensible(objetoLiteral) // Retorna se se propriedades podem ser extendidads/adicionas
Object.seal(objetoLiteral) // Proibi a mudança de propiedades do objeto nao seus valores
Object.isSealed(objetoLiteral) // Retorna true se o objeto é imutavel
Object.freeze(objetoLiteral) // Proibi qualquer mudança no objeto
Object.isFrozen(objetoLiteral) // Retorna true se o objeto nao pode fazer uma mudança

// Objeto com Construtor

function Construtor(atributo1, atributo2) {
    this.atributo1 = atributo1,
        this.atributo2 = atributo2
    this.metodo = function () { return this.atributo1 }
}

// Instanciando objetos a partir do objeto construtor
const obetoCriado1 = new Construtor("valor1", "valor2")
const obetoCriado2 = new Construtor("valor3", "valor4")


// ------------- Função -------------

// Hoisting - Função executa antes da declaração da função (Não funciona em função com expressão)
funcionar()

// Função sem varivel esta no objeto global
window.funcionar()

// Função global padrão
function funcionar(paramentro) {
    this // Refere-se ao objeto executado
    arguments // Retorna um array com os argumentos da função
    return paremetroMoficado
}

// Função com expressao
const funcionar1 = function (paramentro) {
    return parametroModificado
}

// Função com construtor
const funcionar2 = new function (paramentro) {
    return parametroModificado
}

// Arrow function
const funcionar3 = (a, b) => { return a + b };

// Função com argumento definido
function funcionar(a, paramentro = 10) {
    return paremetroMoficado
}

// Função com argumento de array
function funcionar(...array) {
    array.forEach()
    return paremetroMoficado
}

// Função self-invoking - Ira executar apos sua declaração
(function () { nconsole.log("Execução") })();

// Resultado de uma função armazenado em variavel
var variavel = funcionar()

// Metodos de função
funcionar.length // Retorna a quantidade de argumentos da função
funcionar.toString() // Retorna a função como String

// Call , bind e aplly - Cria um novo metodo para um objeto, seprado da classe do objeto

const objetoCBA = {
    atributo1: "palavra",
    atributo2: 12,
}

function funcaoCBA() {
    console.log(this) // { atributo1: "palavra", atributo2: 12 }
    console.log(this.atributo1) // "palavra"
}
// Bind - Cria um novo metodo ao objeto ou atribui um metodo de um objeto a outro objeto, atribuindo o valor do this ao proprio objeto chamado
funcaoCBA = funcaoCBA.bind(objetoCBA)

// Call - Cria um novo metodo ao objeto ou atribui um metodo de um objeto a outro objeto, atribuindo o valor do this ao proprio objeto, diferente do bind pode passar argumentos para a funcao
funcaoCBA = funcaoCBA.call(objetoCBA, "string1", "string2")

// Apply - Cria um novo metodo ao objeto ou atribui um metodo de um objeto a outro objeto, atribuindo o valor do this ao proprio objeto, diferente do bind pode passar uma liasta de argumentos para a funcao
funcaoCBA = funcaoCBA.apply(objetoCBA, ["string1", "string2"])

// ------------- String -------------

var string = "   Texto 20 digitado para 10  exemplificar   " // Metodo construtor

// Propriedades
var tamanho = string.length // Retorna o tamanho da string

// Metodos
string[2] // Metodo de acesso
var slice = string.slice(0, 3) // Retorna uma string dividida a partir de uma posição inicial e final
var slice = string.slice(1) // Retorna uma string dividida a partir de uma posição inicial
var slice = string.slice(-6) // Retorna uma string dividida a partir de uma posição inicial que começa de tras para frente
var substring = string.substring(0, 2) // Retorna uma string dividida a partir de uma posição inicial e final
var toUpperCase = string.toUpperCase() // Retorna uma string com os caracteres maiusculos
var toLowerCase = string.toLowerCase() // Retorna uma string com os caracteres minusculos
var trim = string.trim() // Retorna uma string com os espaços iniciais e finais removidos
var trim = string.trimStart() // Retorna uma string com os espaços iniciais removidos
var trim = string.trimEnd() // Retorna uma string com os espaços finais removidos
var charAt = string.charAt(2) // Retorna uma string da posição argumentada
var charCodeAt = string.charCodeAt(2) // Retorna a string unicode da posição argumentada
var concat = string.concat("texto", variavel, "lorem ipsun") // Retorna uma string com os argumentos concatenados
var split = string.split(" ") // Retorna uma lista com a string divida a partir do argumento
var indexOf = string.indexOf("r") // Retorna a posição da primeira ocorrencia da string
var indexOf = string.indexOf("r", 10) // Retorna a posição da primeira ocorrencia da string a partir da posição argumentada
var lastIndexOf = string.lastIndexOf("r") // Retorna a posição da ultima ocorrencia da string argumentada
var lastIndexOf = string.lastIndexOf("r", 10) // Retorna a posição da ultima ocorrencia da string a partir da posição argumentada
var padStart = string.padStart(100, "x") // Retorna uma string com o começo preenchido com a string passada até completar o tamanho argumentado 
var padEnd = string.padEnd(100, "x") // Retorna uma string com o final preenchido com a string passada até completar o tamanho argumentado
var search = string.search("de") // Retorna a posição da primeira string argumentada
var match = string.match(/te/g) // Retorna uma lista com as ocorrencias da string
var includes = string.includes("t") // Retorna true se ha ocorrencia da string
var includes = string.includes("t", 1) // Retorna true se ha ocorrencia da string na posição argumentada
var startsWith = string.startsWith("t") // Retorna true se a string começa com o argumento
var startsWith = string.startsWith("t", 2) // Retorna true se a string começa com o argumento a partir da posição argumentada
var string = string.endsWith("g") // Retorna true se a string termina com o argumento
var string = string.endsWith("i", 3) // Retorna true se a string termina com o argumento a partir da posição argumentada
var replace = string.replace("t", "r") // Retorna uma string com a primeira ocorrencia do argumento trocado pelo segundo argumento
var replace = string.replace(/T/gi, "r") // Retorna uma string com todas as ocorrencia do argumento trocado pelo segundo argumento sem distinção de maiuscula ou minuscula
var replaceAll = string.replaceAll("g", "r") // Retorna uma string com todas as ocorrencia do argumento trocado pelo segundo argumento

// ------------- Array -------------

const array = [] // Metodo construtor
const array1 = new Array() // Metodo construtor em forma de objeto
const array2 = new Array(1, 2, 3, 4) // Metodo construtor com argumentos
const array3 = new Array(1) // Metodo construtor com argumento de tamanho do array

// Propriedade
const tamanhoArray = array.length // Retorna a quantidade de elementos do array

// Metodos
array[0] // Metodo de acesso
array[0] = 1 // Metodo de atribuição
array.sort() // Ordena o array
array.push() // Adiciona elementos ao final do array
array.pop() // Remove o ultimo elemento do array e retorna seu valor
array.shift() // Remove o primeiro elemento do array e retorna seu valor
array.unshift() // Adiciona um elemento ao inicio do array
array.toString() // Retorna uma string com os valores do array separado por virgula
array.join(" ") // Retorna uma string com os elementos separados pelo argumento
array.concat(array) // Retorna um array a partir do array concatenado com o argumento podendo ser string , lista e etc
array.flat() // Retorna um array com os sub-array concatenados com o array principal
array.splice(2, 0, "texto") // Adiciona um elemento a um array a partir da posição argumentada
array.splice(0, 1) // Remove uma quantidade de elementos a partir da posição
array.splice(2) // Retorna um array dividindo o array a partir da posição estabelecida
array.splice(1, 2) // Retorna um array dividindo o array a partir das posições estabelecidas
array.reverse() // Inverte os valores de um array
array.forEach((elem, index, arr) => { }) // Aplica uma função sobre os elementos do array atraves do value , index ou array
array.map((elem, index, arr) => { }) // Aplica uma função sobre os elementos do array e retorna como lista
array.mapFlat(value) // Aplica uma função sobre os elementos do array e retorna uma lista com os subarrays concatenados
array.filter(funcaoPredicada) // Aplica uma função predicada sobre os elementos do array e retorna uma lista caso true
array.every(funcaoPredicada) // Aplica uma função predicada sobre os elementos do array e retorna true se todos os elementos correspondem a regra
array.some(funcaoPredicaday) // Aplica uma função predicada sobre os elementos do array e retorna true se algum elemento corresponde a regra
array.reduce(total, funcao) // Aplica uma função sobre os elementos do array reduzindo a apenas um numero
array.reduceRight(total, funcao) // Aplica uma função sobre os elementos do array inversamente e reduzindo a apenas um numero
array.indexOf(item, start) // Retorna a primeira posição onde o elemento procurado se encontra , podendo estabelecer a partir de qual posição ira se iniciar a procura
array.lastIndexOf(item, start) // Retorna a ultima primeira onde o elemento procurado se encontra , podendo estabelecer a partir de qual posição ira se iniciar a procura
array.keys() // Retorna um array iterator com os indices do array
array.find(value, index, array) // Aplica uma função sobre os elementos do array e retorna o primeiro elemento que corresponde a regra
array.findIndex(value, index, array) // Aplica uma função sobre os elementos do array e retorna a posição do primeiro elemento que corresponde a regra
array.entries() // Retorna um array com os indices e os valores do indice iterado
array.includes(item) // Retorna true se a ocorrencia do argumento no array

// Metodos do objeto array
Array.from("abcde") // Retorna um array sobre todo objeto iteravel 
Array.isArray(array) // Retorna true se o argumento é um array

// ------------- Objeto Number -------------

// Metodos
number.toString() // Retorna uma string a partir do number
number.toString(2) // Retorna um numero a partir da base argumentada
number.toExponential(1) // Retorna um numero exponencial podendo delimitar as casas decimais
number.toFixed(2) // Define o numero de casas apos a virgula
number.valueOf() // Retorna o valor primitivo do objeto
number.toPrecision(4) // Retorna o numero com o tamanho especificado

// Propriedades do objeto number
Number.EPSILON	// A propriedade Number.EPSILON representa a diferença entre 1 e o menor ponto flutuante maior que 1.
Number.MAX_VALUE // Retorna o maior valor possivel
Number.MIN_VALUE // Retorna o menor valor possivel
Number.MAX_SAFE_INTEGER	// Retorna o maior valor seguro e inteiro
Number.MIN_SAFE_INTEGER	// Retorna o menor valor seguro e inteiro
Number.POSITIVE_INFINITY // Retorna um infinito positivo	 
Number.NEGATIVE_INFINITY // Retorna um infinito negativo	

// Metodos do objeto number
Number("10") // Retorna um number a partir da string
Number.parseInt("a 10.1   3  ") // Retorna um numero inteiro a partir de uma string
Number.parseFloat("a 10.1   3  ") // Retorna um numero de ponto flutuante a partir de uma string
Number.isInteger(10.5) // // Retorna true se o numero for inteiro
Number.isSafeInteger(99999999999999999999999999999999999) //  Retorna true se o numero for um inteiro "seguro"
Number.isFinite("2") // Retorna true se o argumento for um numero que nao seja nan , infinity ou -infinity

// ------------- Objeto Math -------------

// Propriedades
Math.PI // Retorna o valor de pi
Math.E // Base do logaritmo natural

// Metodos
Math.pow(2, 53) // Retorna o primeiro argumento elevado ao segundo
Math.round(0.6) // Retorna o argumento arredondado pelo inteiro mais proximo
Math.ceil(0.6) // Retorna o argumento arredondado pelo inteiro acima
Math.floor(0.6) // Retorna o argumento arredondado pelo inteiro abaixo
Math.abs(-5) // Retorna um valor absoluto
Math.trunc(4.6) // Retorna o valor inteiro do argumento
Math.sign(-4) // Retorna o sinal do numero
Math.max(1, 3, 4) // Retorna o maior valor entre os argumentos
Math.min(1, 2, 3) // Retorna o menor valor entre os argumentos
Math.random() // Retorna um numero aleatorio entre 0 e 1
Math.sqrt(9) // Retorna a raiz quadrada do argumento

// ------------- Objeto Date -------------

let date = new Date() // Metodo construtor 
let date1 = new Date(ano, mes, dia, horas, minutos, segundos, ms) // Metodo construtor com argumentos

// Metodos
date.getFullYear() // Retorna o ano 
date.getMonth() // Retorna o mês
date.getDate() // Retorna o dia do mes
date.getDay() // Retorna o dia da semana
date.getHours() // Retorna as horas
date.getUTCHours() // Retorna as horas do UTC local
date.toString() // Retorna a data em forma de string
date.toUTCString() // Retorna a data UTC local em forma de string
date.setFullYear() // Define o ano
date.setMonth() // Define o mês
date.setDate() // Define o dia do mes

// ------------- Sets -------------

const set = new Set([1, 2, 3, 4]) // Cria um array com valores unicos

// Propriedades
set.size // Retorna a quantidade de elementos do setArray

// Metodos
set.add(5) // Adiciona um elemento ao array , caso seje repetido não acrescenta
set.delete(5) // Remove o elemento argumentado
set.has(5) // Retorna true se o argumento contem no setArray
set.values() // Retona os valores do set 
set.forEach((value, index, set) => { }) // Aplica uma função sobre os elementos do set atraves do value , index ou setArray

// ------------- Maps -------------

const maps = new Map() // Cria um map , um objeto onde os atributos podem ser variaveis 

maps = [
    ["valor", 30],
    ["nome", "joao"]
]

// Propriedades
maps.size // Retorna o numero de elementos 

// Metodos
maps.set(["idade", 10]) // Define um novo atributo
maps.get("idade") // Retorna o valor do atributo
maps.delete("idade") // Deleta o elemento do atributo argumentado
maps.has("idade") // Retorna true se hà o atributo nos elementos
maps.forEach((value, key) => { }) // Aplica uma função sobre os elementos do maps atraves do value e key
maps.entries() // Retorna um objeto iteravel

// ------------- BitWise -------------

let bit1 = 10 // 1010
let bit2 = 11 // 1011

let bitWiseAnd = bit1 & bit2 // Retorna 1 se os bits comparados forem 1
let bitWiseOr = bit1 | bit2 // Retorna 1 se pelo menos 1 bit comparado for 1
let bitWiseNot = ~bit1 // Retorna o bit oposto 
let bitWiseXor = bit1 & bit2 // Retorna 1 se os bits comparados forem diferentes

// ------------- Audio -------------

var audio = new Audio('arquivo-de-audio.mp3');

// Propiedades
audio.currentTime // Retorna o tempo que o audio esta sendo executado
audio.volume = "1" // Define au acessa o vulume do audio
audio.duration // Acessa o tempo total audio 
audio.loop = true // Define se o audio ira reproduzir em looping

// Metodos
audio.play()
audio.pause()

// ------------- BOM -------------

// Propriedades
window.innerHeight // Retorna a altura do browser
window.innerWidth // Retorna a largura do browser

// Metodos
window.open() // Abre uma nova janela
window.close() // Fecha a janela
window.resizeTo(largura,altura) // Define o tamanho da janela

// Objeto location

// Propriedades
window.location.href // Retorna a URL da pagina
window.location.hostname // Retorna o dominio da pagina
window.location.pathname // Retorna o caminho da pasta 
window.location.protocol // Retorna o tipo do protocolo da pagina
window.location.port // Retorna a porta da pagina

// Metodos
window.location.assign(pathname) // Carrega um novo documento com o caminho passado

// Objeto history

// Metodos
history.back() // Volta para o caminho anterior ao executar
history.forward() // Volta para o caminho posterior ao executar

// ------------- Objeto DOM -------------

// Propriedades
document.documentElement // Retorna o elemento raiz
document.head // Retorna o elemento head 
document.body // Retorna o elemento body
document.cookie = "key=value" // Adiciona um cookie
elemento.nodeName // Retorna o nome do nodo 
elemento.nodeValue // Retorna o valor do nodo
elemento.nodeType // Retorna o tipo do nodo
elemento.attributes // Retorna uma lista com os atributos do elemento
element.childNodes // Retorna um lista com os nodos filho do elemento
element.parentNode // Retorna o nodo pai do elemento
element.firstChild // Retorna o nodo do primeiro filho do elemento
element.lastChild // Retorna o nodo do ultimo filho do elemento
element.nextSibling // Retorna o nodo irmao do elemento
element.previousSibling // Retorna o elemento nodo previo do elemento
elemento.innerHTML = "Conteudo do elemento" // Define au acessa um conteudo HTML para o elemento 
elemento.textContent = "Conteudo do elemento" // Define au acessa um conteudo para o elemento , usado mais para texto 
elemento.style.color = "red" // Define ou acessa a cor do elemento
elemento.style.fontSize = "12" // Define au acessa o tamanho da fonte do elemento
elemento.src = "novaPRovcura" // Define au acessa o valor do atriburo src

// Metodos
var elemento = document.querySelector("Seletor_CSS") // Retorna um elemento a partir do seletor css
var elemento = document.querySelectorAll("Seletor_CSS") // Retorna uma lista com os elementos a partir do seletor css
var elemento = document.getElementById("id_do_elemento") // Retorna uma lista com os elementos a partir de seu id
var elemento = document.getElementsByTagName("Tag") // Retorna uma lista com os elementos a partir da sua tag
var elemento = document.getElementsByClasName("classe_do_elemento") // Retorna uma lista com os elementos a partir da sua classe
var elemento = document.createElement(elemento) // Cria um elemento HTML
var elemento = document.removeChild(elemento) // Remove um elemento HTML filho
var elemento = document.appendChild(elemento) // Adciona um elemento ao pai
var textoNode = document.createTextNode("texto criado")
parentNode.replaceChild(elementoNovo, elementoVelho) // Substitui um elemento filho por outro argumentado 
elemento.setAttribute("src", "/Imagens/foto.png") // Define um atributo html para o elemento 
elemento.removeAttribute("src") // Remove um atributo do elemento
elemento.hasAttribute("src") // Retorna true se ha ocorrencia do atributo no elemento
elemento.getAttribute("src") // Retorna o valor do atributo argumentado 
elemento.classList.add("classeAA") // Adiciona uma classe do elemento
elemento.classList.remove("classeAA") // Remove a classe do elemento
elemento.remove() // Remove o elemento do nó
elemento.removeChild(child) // Remove o elemento filho especificando o filho

// Eventos 
elemento.addEventListener('click', função()) // Chama a função ao clicar sobre o elemento
elemento.addEventListener('mouseover', função()) // Chama a função ao passar o mouse sobre o elemento
elemento.addEventListener('mouseout', função()) // Chama a função ao tirar o mouse sobre o elemento
elemento.addEventListener('keydown', função()) // Chama a função ao clicar em uma tecla
elemento.addEventListener('load', função()) // Chama a função quando a pagina estiver totalmente carregada
elemento.addEventListener('change', função()) // Chama a função quando um elemento for alterado



// ------------- Objeto Screen -------------

screen.width // Retorna a largura da tela 
screen.height // Retorna a altura da tela
screen.availWidth // Retorna a largura da tela sem barras de ferramentas
screen.availHeight // Retorna a altura da tela sem barras de ferramentas




















// toString
objeto.toString() // Retorna o valor do objeto em string
funçao.toString() // Retorna o valor da funçao em string
array.toString() // Retorna o valor do array em string

// valueOf
objeto.valueOf() // Retorna o valor do objeto como objeto
funçao.valueOf() // Retorna o valor da funçao como objeto
array.valueOf() // Retorna o valor do array como objeto

// stringify
JSON.stringify(array) // Retorna um array em formato de string

// Sequencia de escape
var string = "texto \" aspas \" texto";

// Concatenação de variavel
var conc = "abc" + `${variavel}` + "def"

// isNaN
var variavel = isNaN("10") // => true , Retorna true ou false se o paremetro é um numero

// Debugger
debugger // Interrompe a execução do programa e mostra o estado das variaveis

// Delete
delete array[posicao] // Remove a propriedade de um objeto array
delete objeto[posicao] // Remove a propriedade de um objeto
array = undefined // alternativa ao delete para array

// Tipos de dados
var tipoDados = BigInt(9999999999999998) //  => "123456789123456n" , Representa numeros maiores do que 2^53
var tipoDados = 10e3 // Representa 10 elevado a 3

// In Of
for (let variavel in objeto) { } // Itera sobre o indici do objeto
for (let variavel of array) { } // Itera sobre a propriedade do objeto

// Operador ternario
let comparador = 10 < 30 ? true : false // Retorna um valor estabelecido caso a condição seje satisfeita







let a1 = ["1, ", 1, ",", "2", 3, 3]
let a2 = ["1, ", 1, ",", "2", 3, 4]
let a3 = ["1, ", 1, ",", "2", 3, 5]
let a4 = ["1, ", 1, ",", "2", 3, 6]

let t = [...a1, ...a2, ...a3, ...a4]

let name = null;
let text = "missing";
let result = name ?? text; //  retorna se e null ou undefined

//typeof numeber ~// retorna o tipo de dado da varivale

//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

//.constructor retorna o construtor da variavel
if (typeof myObj !== "undefined" && myObj !== null)
    varivael instanceof objeto // retorna true se uma variavel corresponde ao objeto aprensentadpo




// "string" + "" = String(x)
//+ "numero" = Number('numero')
// !! bolean = Boolean(boolean)


use strich







