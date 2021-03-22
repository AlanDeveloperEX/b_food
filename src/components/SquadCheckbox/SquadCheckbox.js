import React from 'react';
import { CheckContainer, CheckInput, CheckMark } from './SquadCheckbox.elements';
import { StarIcon } from '../../globalStyles';

function Checkbox({ children, stars, trigger, status}) {

  var allStars = [];

  for (var index = 0; index < stars; index++) {

    allStars.push(<StarIcon key={index} />);
  }

  return(
    <CheckContainer onClick={trigger}>
      {allStars}
      {children}
      <CheckInput type="checkbox"  />
      <CheckMark active={status} />
    </CheckContainer>
  )
}

export default Checkbox;
