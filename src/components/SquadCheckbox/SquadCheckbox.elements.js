import styled from 'styled-components';

export const CheckContainer = styled.div`
  display: block;
  position: relative;

  padding-left: 30px;
  margin: .4rem 0;
  cursor: pointer;

  font-size: 16px;
  color: var(--dark_gray);
  line-height: 24px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* &:hover input ~ span {
    background-color: var(--gray);
  } */

  svg {
    font-size: 1.5rem;
  }

`;

export const CheckInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  cursor: pointer;

  &:checked ~ span {
    background-color: var(--white);

  }

`;

export const CheckMark = styled.span`
  position: absolute;
  top: 3px;
  left: 0;

  height: 20px;
  width: 20px;

  background-color: var(--white);
  border: 1px solid var(--gray);

  border-radius: 4px;
  
  background-color: ${({active}) => (active ? 'var(--gray)' : 'var(--white)')};

`;
