import "./style.css"

function UseEffect() {

  const produtosJson = {
    lanche: [
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "x-tudo",
        preço: "R$ 25.99",
      },
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "x-salada",
        preço: "R$ 29.99",
      },
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "x-bacon",
        preço: "R$ 28.99",
      },
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "x-bacon-egg",
        preço: "R$ 29.99",
      },
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "x-egg",
        preço: "R$ 27.99",
      },
      {
        imagem: "Imagens/icon_lanche.png",
        nome: "hot-dog",
        preço: "R$ 22.99",
      },
    ],
    bebida: [
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "fanta-laranja",
        preço: "R$ 7.99",
      },
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "fanta-uva",
        preço: "R$ 7.99",
      },
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "cola-cola",
        preço: "R$ 7.99",
      },
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "guarana",
        preço: "R$ 6.49",
      },
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "sprite",
        preço: "R$ 6.49",
      },
      {
        imagem: "Imagens/icon_bebida.png",
        nome: "h2oh",
        preço: "R$ 6.49",
      },
    ],
    acompnhamento: [
      {
        imagem: "Imagens/icon_acompanhamento.png",
        nome: "bata-frita pequena",
        preço: "R$ 9.99",
      },
      {
        imagem: "Imagens/icon_acompanhamento.png",
        nome: "bata-frita média",
        preço: "R$ 11.99",
      },
      {
        imagem: "Imagens/icon_acompanhamento.png",
        nome: "bata-frita grande",
        preço: "R$ 12.99",
      },
      {
        imagem: "Imagens/icon_acompanhamento.png",
        nome: "10 nuggets",
        preço: "R$ 11.99",
      },
    ],
    sobremesa: [
      {
        imagem: "Imagens/icon_sobremesa.png",
        nome: "sundae",
        preço: "R$ 5.99",
      },
      {
        imagem: "Imagens/icon_sobremesa.png",
        nome: "casquinha",
        preço: "R$ 2.99",
      },
      {
        imagem: "Imagens/icon_sobremesa.png",
        nome: "torta",
        preço: "R$ 9.99",
      },
      {
        imagem: "Imagens/icon_sobremesa.png",
        nome: "top sundae",
        preço: "R$ 8.99",
      },
      {
        imagem: "Imagens/icon_sobremesa.png",
        nome: "milk-shake",
        preço: "R$ 11.99",
      },
    ],
  };
  return (
    <div className='container__produtos'>
      {Object.keys(produtosJson).map((categoria) => {
        const produtosDaCategoria = produtosJson[categoria];

        return (
          <div key={categoria} className='container__categoria--produtos'>
            {produtosDaCategoria.map((produto) => (
              <div key={produto.nome} className='produto' onClick={() => {console.log(produto.nome)}}>
                <img className='imagem__produto' src={produto.imagem} alt={produto.nome} />
                <div className='descricao__produto'>{produto.nome}</div>
                <div className='preco__produto'>{produto.preço}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}




export default UseEffect;