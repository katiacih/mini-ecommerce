import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Checkout } from './checkout';
import axiosMock from 'axios'

describe('componente Checkout', () => {

  const dadosFinalizarCompra = {
    email: 'email@test.com',
    nomeCompleto: 'Fulano de tal',
    cpf: '390.577.839-40',
    endereco: 'Rua Edmundo Amorim',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '69304-270', 
    termosCondicoes: true,
    emailPromocional: 'S',
    dataNascimento: new Date ('1998-07-20T03:00:00.000Z'),
    produtos: '{}',
    total: 'R$ R$ 25,99'
  }

  it('Deve finalizar a compra com sucesso', async () => {
   render(<Checkout 
    visivel={true} 
    total={'R$ 25,99'}
    produtos={{}} 
    handleLimparCarrinho={jest.fn()}  
    handleExibirProdutos={jest.fn()} />);
   axiosMock.get.mockResolvedValueOnce({ data: ['São Paulo', 'São Pedro']});
   fireEvent.change(screen.getByTestId('txt-email'), { target: { value:'email@test.com'}}); 
  fireEvent.change(screen.getByTestId('txt-nome-completo'), { target: { value:'Fulano de tal'}});
  fireEvent.change(screen.getByPlaceholderText('Selecione a data'), { target: { value:'20/07/1998'}});
  fireEvent.change(screen.getByTestId('txt-cpf'), { target: { value:'390.577.839-40'}}); 
  fireEvent.change(screen.getByTestId('txt-endereco'), { target: { value:'Rua Edmundo Amorim'}});
  fireEvent.change(screen.getByTestId('estado'), { target: { value: 'SP'}});
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  const cidade = await waitFor(() => screen.findByTestId('cidade'))
  fireEvent.change(cidade, { target: { value:'São Paulo'}});
  expect(await waitFor(() => screen.findByTestId('cidade'))).toHaveTextContent('São Paulo')
  fireEvent.change(screen.getByTestId('txt-cep'), { target: { value:'69304-270'}});
  fireEvent.click(screen.getByTestId('check-termos-condicoes'));
  fireEvent.click(screen.getByTestId('btn-finalizar-compra'));
  const modal = await waitFor(() => screen.getByTestId('modal-compra-sucesso'))
  expect(modal).toBeInTheDocument()
  expect(modal).toHaveTextContent('Compra realizada com sucesso!')
  expect(axiosMock.post).toHaveBeenCalledTimes(1)
  expect(axiosMock.post.mock.calls[0][1]).toStrictEqual(dadosFinalizarCompra)
  });
})
