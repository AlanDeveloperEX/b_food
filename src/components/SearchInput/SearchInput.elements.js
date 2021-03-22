import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Inputs } from '../../globalStyles';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: var(--white);

  padding: 1rem;
  margin: 6rem 0 3rem 0;

  font-size: 1.5rem;

  border-radius: 50px;

  width: 100%;
  max-width: 550px;
`;

export const SearchIcon = styled(FaMapMarkerAlt)`
  color: var(--main_color);
`;

export const SearchInp = styled(Inputs)`
  border: none;
  text-transform: uppercase;

  ::placeholder {
    font-style: italic;
    font-weight: 100;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  bottom: -130px;

  min-height: 125px;
  max-height: 125px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  background-color: var(--white);

  padding: .5rem 1rem;

  width: 85%;
  z-index: 1;

  color: var(--light_gray);

  p {
    padding: .6rem;
    cursor: pointer;

    text-transform: uppercase;
  }

  input {
    padding: .6rem;
    cursor: pointer;

    text-transform: uppercase;
  }
`;
