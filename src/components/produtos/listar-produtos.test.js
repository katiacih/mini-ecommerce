import { render, screen } from '@testing-library/react';
import { ListarProdutos } from './listar-produtos';

describe('componente Listar Produtos', () => {

  it('Deve renderizar a lista de produtos', () => {
    render(<ListarProdutos adicionarProduto={jest.fn()} exibirMensagem={jest.fn()}/>);
    const div = screen.getByTestId('card1')
    expect(div).toBeInTheDocument();
    expect(screen.getAllByText(/comprar/i)).toBeTruthy();
  });
})
