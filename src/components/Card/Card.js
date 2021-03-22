import React from 'react';
import {Button, StarsContainer, StarIcon } from '../../globalStyles';
import { ElementCard, CardIcon } from './Card.elements';

const Card = ({title, price, prevDesc, textBtn, adress, stars, priceNone, rankNone }) => {

  let allStars = [];

  if (stars <= 1) {
    stars = 1
  }

  for (let index = 0; index < stars; index++) {

    allStars.push(<StarIcon key={index} />);
  }

  return (

    <ElementCard>
      <h3>{title}</h3>
      <CardIcon/>
      <p pricenone={priceNone} price = {price} >{price}</p>
      <StarsContainer ranknone={rankNone} >

        {allStars}

      </StarsContainer>
      <p>{prevDesc ? prevDesc : adress }</p>
      <Button normal big>
        {textBtn}
      </Button>
    </ElementCard>
  )
}

export default Card;
