

import { render, screen } from '@testing-library/react';
import { ItensCarrinhoMenu } from './itens-carrinho';
import faker from 'faker'

describe(('teste itens-carrinho'),() => {
  describe(('com produtos no carrinho'),() => {
    beforeEach(() => {
      const produtos = [
        { nome: 'Produto 1',preco: `R$ ${faker.random.float({max: 30})}`, quantidade: 1 },
        { nome: 'Produto 2',preco: `R$ ${faker.random.float({max: 30})}`, quantidade: 1 }
      ]
      render(<ItensCarrinhoMenu produtos={produtos} />);
    })
    it('render componente', () => {
      expect(screen.getByTestId(/produto 1/i)).toBeInTheDocument();
      expect(screen.getByTestId(/produto 2/i)).toBeInTheDocument();
      expect(screen.getByTestId('Produto 1')).toHaveTextContent('Produto 1 - 1 x R$')
    });
  });

  describe(('sem produtos no carrinho'),() => {
    beforeEach(() => {
      render(<ItensCarrinhoMenu produtos={[]} />);
    })
    it('render componente', () => {
      expect(screen.getByTestId('itens')).toBeInTheDocument();
      expect(screen.getByTestId('itens')).toHaveTextContent('Carrinho vazio...');
    });
  });
});

