import styled from 'styled-components';
import { Container } from '../../globalStyles';
import {Link} from 'react-router-dom';

export const FooterElement = styled.footer`
  background-color: var(--dark_gray);
`;

export const FooterContainer = styled(Container)`

  min-height: 70vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({column}) => (column ? 'column' : 'row')};

  color: var(--white);

  @media (max-width: 960px) {
    flex-direction: column;
  }

`;

export const FooterGrid = styled.div`

  width: 100%;

  display: grid;

  grid-template-columns: 3fr repeat(3, 1fr);
  grid-gap: 1.4rem;

  @media (max-width: 960px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

  }

  @media (max-width: 600px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(1, 1fr);
    grid-gap: .5rem;

    margin-bottom: 2rem;

  }
`;

export const FooterColumns = styled.div`

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    font-weight: 100;

    margin: 1rem 0;
  } 

  p {
    max-width: 70%;
    margin-top: .7rem;
  }

  @media screen and (max-width: 991px) {
    h3 {
      margin: 2rem 0 1rem 0;
    }

  }
`;

export const ContainerSocial = styled.div`
  display: flex;
`;

export const BorderIcon = styled.div`
  background-color: var(--white);

  padding: .5rem;
  margin: 1rem 1rem 1rem 0;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 40px;
  height: 40px;

  @media screen and (max-width: 991px) {

      margin: 1rem 2rem 1rem 0;

  }

`;

export const FooterLinks = styled(Link)`
  text-decoration: none;
  color: var(--white);

  margin-top: .7rem;

  svg {
    color: var(--dark_gray);
    font-size: 1.5rem;
  }

  @media screen and (max-width: 991px) {


  }
`;