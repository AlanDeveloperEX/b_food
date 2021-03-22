import styled, {createGlobalStyle} from 'styled-components';
import { RiStarSFill } from 'react-icons/ri';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: sans-serif;
  }

  :root {
    --background: #222222;
    --s_back: #f5f1e5;

    --main_color: #f74b3d;

    --white: #fff;
    --black: #000;
    --yellow: #f9c13d;
    --gray: #b6b6b6;
    --dark_gray: #222222;
    --light_gray: #222222ad;

  }

  html, body {
    background-color: var(--background);
  }

  body::-webkit-scrollbar {
    width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const BackMenu = styled.div`
  background-color: var(--black);

  height: 125px;

  @media (max-width: 980px) {
    height: 90px;
  }
`;

export const Container = styled.div`
  z-index: 1;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;
  padding: 50px 50px;

  @media screen and (max-width: 991px) {
    padding: 30px 20px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;

  @media (max-width: 960px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(1, 1fr);
    grid-gap: .5rem;

  }
`;

export const Button = styled.button`
  border-radius: 50px;
  outline: none;
  border: none;

  font-size: 1rem;
  letter-spacing: 1px;

  cursor: pointer;

  background-color: ${({normal}) => (normal ? 'var(--main_color)' : 'var(--white)')} ;
  white-space: nowrap;

  padding: ${({big}) => (big ? '.8rem 3.5rem' : '.5rem 1rem')};

  color: ${({normal}) => (normal ? 'var(--white)' : 'var(--main_color)')};
  font-weight: 600;

  transform: scale(1);
  transition: all .2s ease;

  &:hover {
    transform: scale(.95);
    transition: all .2s ease;
  }
`;

export const H2 = styled.h2`
  color: ${({main}) => (main ? 'var(--main_color)' : 'var(--white)')};

  font-size: 3rem;
  font-weight: 500;

  padding: .5rem;
`;

export const PText = styled.p`
  color: ${({main}) => (main ? 'var(--main_color)' : 'var(--white)')};
  
  font-size: 1.3rem;

  padding: .5rem;

`;

export const Inputs = styled.input`
  outline: none;
  border: none;
  padding: 0 .5rem;

  text-transform: capitalize;
  color: var(--black);

  font-size: .9rem;
  font-weight: 600;

  background-color: transparent;

  width: 100%;
`;

export const StarsContainer = styled.span`
  display:   ${({ranknone}) => (ranknone ? 'none' : 'flex')};
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  &[ranknone] {
    display: none;
  }
`;

export const StarIcon = styled(RiStarSFill)`
  font-size: 2rem;
  color: var(--yellow);
`;

export default GlobalStyle