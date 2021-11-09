import React from 'react';
import placeholder from '../../imagens/286x180.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function ListarProdutos(props) {

  const produtos = [
    { nome: 'Blusa multicolorida', preco: 'R$ 59,99' },
		{ nome: 'T-shirt com bolso', preco: 'R$ 19,99' },
		{ nome: 'Maleta profissional para maquiagem', preco: 'R$ 129,99' },
		{ nome: 'Biblia da mulher', preco: 'R$ 159,99' },
		{ nome: 'Balnça Digital', preco: 'R$ 185,00' },
		{ nome: 'Modelador 1 Curves', preco: 'R$ 169,00' },
		{ nome: 'Pilha Alcalina AA Duracell', preco: 'R$ 15,99' },
		{ nome: 'Redmi Note 10S Starlight Purple 6GB RAM 128GB ROM', preco: 'R$ 1648,90' }
  ];

  function handleComprar(event, produto) {
    event.preventDefault();
    props.adicionarProduto(produto);
    props.exibirMensagem(produto);
  }

  function render() {
    let key = 1;
    const cards = produtos.map(produto =>
      <Card
        key={key}
        data-testid={'card' + key++}
        style={{ width: '18rem', margin: '10px', float: 'left' }}>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body className="text-center">
          <Card.Title style={{ height: '40px' }}>
            {produto.nome}
          </Card.Title>
          <Button
            variant="info"
            style={{ width: '100%' }}
            onClick={(event) => handleComprar(event, produto)}>
            Comprar ({produto.preco})
          </Button>
        </Card.Body>
      </Card>
    );
    return cards;
  }

  return render();
}

ListarProdutos.propTypes = {
  adicionarProduto: PropTypes.func.isRequired,
  exibirMensagem: PropTypes.func.isRequired
}

export default ListarProdutos;
