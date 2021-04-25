import React from 'react';
import PropTypes from 'prop-types'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
 
export function ItensCarrinhoMenu (props) {
  const { produtos } = props
  return (
    <>
      { produtos.length === 0 
      ? <NavDropdown.Item href="" data-testid='itens'>
          <FontAwesomeIcon icon={faSadTear}/>
          &nbsp;
          Carrinho vazio...
      </NavDropdown.Item>
      : props.produtos.map( produto => 
        <NavDropdown.Item href="" key={produto.nome} data-testid={produto.nome}>
          {produto.nome} - {produto.quantidade} x {produto.preco}
        </NavDropdown.Item>
      )
    }
    
    </>
    
  );
}

ItensCarrinhoMenu.propTypes = {
   produtos: PropTypes.array.isRequired 
}