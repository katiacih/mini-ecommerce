import './mini-ecommerce.css';
import React,{ useState } from 'react'
import { Menu, Produtos } from './components'
import { Checkout } from './components/checkout/checkout'

function MiniECommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function adicionarProduto(produto) {
    const objCarrinho = Object.assign({}, carrinho);
    //atualizar a quantidade
    let novoProduto = true;
    objCarrinho.produtos.forEach((prod, indice) => {
      if(prod.nome === produto.nome) {
        objCarrinho.produtos[indice].quantidade++;
        novoProduto = false;
      }
    })
    //adicionar novo produto ao carrinho
    if( novoProduto ) {
      objCarrinho.produtos.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1
      })
    }
    setCarrinho(objCarrinho)
  }

  function handleExibirProdutos() {
    setExibirCheckout(false);
    setExibirProdutos(true);
  }

  function handleExibirCheckout(total) {
    setExibirCheckout(true);
    setExibirProdutos(false);
    setTotal(total)
  }

  function handleLimparCarrinho() {
    setCarrinho({ produtos: [] });
  }

  return (
    <div data-testid="App">
      <Menu 
        produtos={carrinho.produtos} 
        handleExibirProdutos={handleExibirProdutos} 
        handleExibirCheckout={handleExibirCheckout}/>
      <Produtos visivel={exibirProdutos} adicionarProduto={adicionarProduto}/>
      <Checkout
        visivel={exibirCheckout}
        handleExibirProdutos={handleExibirProdutos}
        total={total}
        produtos={carrinho}
        handleLimparCarrinho={handleLimparCarrinho} />
    </div>
  );
}

export default MiniECommerce;
