import styled from 'styled-components';
import { Container, Button } from '../../globalStyles';

export const HeroContainer = styled.div`
  height: 100vh;

  background-image: url('../../assets/hero.jpg');
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 960px) {
    background-position: center;
  }

`;

export const HeroContent = styled(Container)`
  color: var(--white);

  @media (max-width: 960px) {
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(to right, #000 26%, transparent);
  }
`;

export const HeroH1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  
  width: 50%;
  max-width: 500px;

  padding: .5rem;

  @media (max-width: 960px) {
    font-size: 3.5rem;
    font-weight: 400;

    width: 100%;

    padding: .5rem;
    text-align: center;
  }
`;

export const HeroP = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  
  width: 50%;
  max-width: 500px;

  padding: .5rem;

  @media (max-width: 960px) {
    width: 75%;

    text-align: center;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

`;

export const HeroButton = styled(Button)`

  margin-top: 2rem;

  @media (max-width: 960px) {

    text-align: center;
  }

`;