import styled from 'styled-components';
import { H2, CardContainer } from '../../globalStyles';

export const FirstSection = styled.section`
  min-height: calc(100vh - 105px);

  background-color: var(--s_back) ;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 960px) {

  }

`;

export const TitlePage = styled(H2)`

  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  color: var(--main_color);

  padding: 0 0 2rem 0;

  span{
    font-weight: 100;
    font-style: italic;
  }

`;

export const RowGrid = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 2fr 4fr;
  grid-gap: 1.4rem;

  @media (max-width: 960px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(1, 1fr);

  }

  @media (max-width: 600px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(1, 1fr);

    margin-bottom: 2rem;

  }
`;

export const CardContainerGrid2 = styled(CardContainer)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  min-height: 80%;

  div {
    max-width: 100%;
    min-height: 390px;

    margin: 0;
  }

  h2 {
    font-size: 2rem;
  }

  @media (max-width: 600px) {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(1, 1fr);

    margin-bottom: 2rem;

  }
`;

export const Pagination = styled.ul`

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  list-style: none;

  margin: 2rem auto;

`;

export const PaginationItem = styled.li`

  background-color: ${({active}) => (active ? 'var(--main_color)' : 'transparent')} ;
  color: ${({active}) => (active ? 'var(--white)' : 'var(--main_color)')};

  font-weight: 800;

  padding: .8rem;
  margin: 0 .5rem;

  border-radius: 50%;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    background-color: var(--main_color);
    color: var(--white);
  }

`;