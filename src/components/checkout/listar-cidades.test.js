import { render, screen } from '@testing-library/react';
import axiosMocks from 'axios';
import { ListarCidades } from './listar-cidades';
import React from 'react';

test('renders learn react link', async () => {
  axiosMocks.get.mockResolvedValueOnce({data: ['São Paulo', 'São Pedro']})
  render(<ListarCidades estado={'SP'} />);
  expect(axiosMocks.get).toHaveBeenCalledTimes(1);
  expect(await screen.findByTestId('São Paulo')).toHaveTextContent('São Paulo')
  expect(await screen.findByTestId('São Pedro')).toHaveTextContent('São Pedro')

});