import { render, screen } from '@testing-library/react';
import { Produtos } from './produtos';

describe('componente Produtos', () => {

  it('Deve renderizar produtos corretamente', () => {
   render(<Produtos 
      visivel={true} 
      adicionarProduto={jest.fn()} />);
   const div = screen.getByTestId('produtos')
   expect(div).toBeInTheDocument();
  });
})
