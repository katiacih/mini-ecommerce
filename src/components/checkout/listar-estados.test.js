import { render, screen } from '@testing-library/react';
import { ListarEstados } from './listar-estados';

test('Deve renderizar a lista corretamente', () => {
  render(<ListarEstados />);
  expect(screen.getByTestId('AM')).toHaveTextContent('Amazonas');
  expect(screen.getByTestId('SP')).toHaveTextContent('São Paulo');
});