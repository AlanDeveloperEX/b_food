import styled from 'styled-components';
import { GiHamburger } from 'react-icons/gi';

export const ElementCard = styled.div`
  background-color: var(--white);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  justify-self: center;

  margin: 1rem;
  padding: 1rem;

  border-radius: 5px;

  width: 100%;
  min-height: 350px;
  max-width: 280px;

  color: var(--main_color);

  h3 {
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: .9rem;
    text-align: center;
  }

  p[pricenone] {
    display: none;
  }

  p[price] {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 960px) {
    max-width: inherit;
  }

`;

export const CardIcon = styled(GiHamburger)`
  font-size: 4rem;
`;

