import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 250px;
  /* margin-bottom: 20px; */
  padding: 4px 14px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
;
  &:hover,
  &:focus {
    border: 2px solid #fabb18;
    outline: none;
  }
`;
