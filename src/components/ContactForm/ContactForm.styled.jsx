import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  /* outline: 1px solid; */
  padding: 30px;
  /* padding: 4px 14px; */
  border: 1px solid rgb(226, 229, 232);
  border-radius: 12px;
  box-shadow: 10px 10px 5px -7px rgb(164, 164, 164);
  background-color: #f6f8fa;
`;

export const Input = styled.input`
  width: 250px;
  margin-bottom: 20px;
  padding: 4px 14px;
  border-radius: 5px;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    border: 2px solid #fabb18;
    outline: none;
  }
`;

export const Button = styled.button`
  width: fit-content;
  cursor: pointer;
`;
