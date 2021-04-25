import { render, screen, waitFor } from '@testing-library/react';
import { Menu } from './menu';
import faker from 'faker'

function getProduto () {
  return { nome: faker.commerce.productName(),
     preco: `R$ ${faker.random.float({max: 30})}` }
}

function generateProdutos () {
  const numProdutos = faker.random.number({min: 1, max: 10})
  const prod = [];
  for (let index = 0; index < numProdutos; index++) {
    prod[index] = getProduto()
  }
  return prod;

}

describe('componente Menu', () => {
  describe('Com carrinho cheio', () => {
    beforeEach(() => {
      render(<Menu produtos={generateProdutos()} 
      handleExibirCheckout={jest.fn()} 
      handleExibirProdutos={jest.fn()}/>);
    })
    it('verifica se componentes foram renderizados com sucesso', async () => {
     expect(screen.getByText(/mini ecommerce/i)).toBeInTheDocument();
     expect(screen.getByText(/carrinho/i)).toBeInTheDocument();
     screen.getByText(/carrinho/i).click();
     await waitFor(() => expect(screen.getByTestId('total-carrinho')).toBeInTheDocument())
     expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument();
    });
  })

  describe('Com carrinho vazio', () => {
    beforeEach(() => {
      // render(<Menu produtos={[]} 
      //   handleExibirCheckout={jest.fn()} 
      //   handleExibirProdutos={jest.fn()}/>);
    })
    it('verifica se componentes foram renderizados com sucesso', () => {
      render(<Menu produtos={[]} 
        handleExibirCheckout={jest.fn()} 
        handleExibirProdutos={jest.fn()}/>);
      screen.getByText(/carrinho/i).click()
      expect(screen.getByText('Total: R$ 0,00')).toBeInTheDocument();
      expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument();
    });
  })
 

})
