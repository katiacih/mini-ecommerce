import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap'
import model1 from '../../imagens/model1.jpg'
import model2 from '../../imagens/model2.jpg'
import model3 from '../../imagens/model3.jpg'

 function CarouselPromocoes () {
  return (
    <div >
      <Carousel>
        <CarouselItem style={{ maxHeight: '470px'}}>
          <img
            style={{ filter: 'brightness(0.7)' }}
            className="d-block w-100"
            src={model1}
            alt="model 1"
          />
          <Carousel.Caption>
            <h3>Esquenta Black Friday</h3>
            <p>Faça compra pelo aplicativo e ganhe ate 30% de desconto.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem style={{ maxHeight: '470px'}}>
          <img
            style={{ filter: 'brightness(0.7)'}}
            className="d-block w-100"
            src={model2}
            alt="model 2"
          />
          <Carousel.Caption>
            <h3>Só hoje: 20% off em Boxes de Livros</h3>
            <p>Baixe o app para aproveitar</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem style={{ maxHeight: '470px'}}>
          <img
            style={{ filter: 'brightness(0.7)'}}
            className="d-block w-100"
            src={model3}
            alt="Aproveite nossas ofertas"
          />
          <Carousel.Caption>
            <h3>Ganhe três meses frete grátis</h3>
            <p>Inscreva-se no plano premium e ganhe as melhores ofertas</p>
          </Carousel.Caption>
        </CarouselItem>
        
      </Carousel>
    </div>
  );
}


export default CarouselPromocoes;