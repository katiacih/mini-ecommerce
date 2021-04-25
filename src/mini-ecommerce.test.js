import { render, screen } from '@testing-library/react';
import MiniECommerce from './mini-ecommerce';

describe('Mini Ecommerce', () => {
  it('deve renderizar ecommere corretamente', () => {
    render(<MiniECommerce />);
    const div = screen.getByTestId('App')
    expect(div).toBeInTheDocument();
  });

})

