import styled from 'styled-components';

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 0 1rem 0;

  &:last-child {
    margin: 0;
  }
  
  h3 {
    color: var(--main_color);

    font-weight: 600;
    font-size: 1.1rem;

    margin-bottom: .5rem;
  }

  span {
    margin: -1px 0 0 0;
    color: var(--light_gray);
  }
`;