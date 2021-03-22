import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const FirstSection = styled.section`
  min-height: 100vh;

  background-image: url('../../assets/back_section_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 960px) {
    background-image: url('../../assets/back_section_2.jpg');

    background-position: center;
  }

`;

export const SectionContainer = styled(Container)`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({column}) => (column ? 'column' : 'row')};

  @media (max-width: 960px) {
    flex-direction: column;
  }

`;

export const DivBlock = styled.div`
  display: flex;
  justify-content: ${({left}) => (left ? 'flex-start' : 'flex-end')};
  align-items: ${({left}) => (left ? 'flex-start' : 'flex-end')};
  flex-direction: column;

  width: 50%;
  max-width: 500px;

  padding: .5rem;

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    width: 80%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 2rem .5rem;

    h2, p {
      text-align: center;
    }

  }
`;

export const SecondSection = styled.section`
  min-height: 100vh;

  background-color: var(--main_color);

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1rem;

    max-width: 600px; 
  }


  @media (max-width: 960px) {

  }

`;

export const ThirdSection = styled.section`
  min-height: 100vh;

  background-image: url('../../assets/back_section_2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  p {
    text-align: center;
    font-size: 1rem;

    max-width: 600px; 
  }


  @media (max-width: 960px) {

  }

`;
