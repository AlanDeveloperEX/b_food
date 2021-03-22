import styled from 'styled-components';

export const SideContainer = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

`;

export const SideColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  padding: 2rem;

  border-radius: 5px;

  background-color: var(--white);

  @media (min-width: 600px) and (max-width: 980px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
