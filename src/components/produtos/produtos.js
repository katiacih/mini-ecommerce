import React, { useState } from 'react';
import { ListarProdutos } from './listar-produtos';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
 
export function Produtos (props) {
  const [isExibirMsg, setIsExibirMsg] = useState(false);
  const [produto, setProduto] = useState('');

  function visivel() {
    return props.visivel ? null : 'hidden';
  }

  function exibirMensagem(produto) {
    setIsExibirMsg(true)
    setProduto(produto.nome)
    setTimeout(() => {setIsExibirMsg(false)}, 3000)
  }
 return (
   <div data-testid='produtos' className={visivel()}>
     <Alert 
      variant='success'
      style={{ margin: '10px'  }}
      show={isExibirMsg}>
        <b>{produto}</b> adicionado com sucesso ao carrinho!
      </Alert>
     <ListarProdutos
      exibirMensagem={exibirMensagem}
      adicionarProduto={props.adicionarProduto}
     />

   </div>
 );
}

Produtos.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarProduto: PropTypes.func.isRequired
}