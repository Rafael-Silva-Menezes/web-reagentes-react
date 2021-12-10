import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 0.1rem;
  font-weight: 100;
`;

export const Span = styled.span`
  height: 100%;
  font-size: 1rem;
`;

export const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin-top: 3.5rem;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 0.5em;
  background-color: #f4f7fa;

  ::placeholder {
    color: lightgrey;
  }
`;

export const Button = styled.button`
  display: inline-block;
  height: 3.1rem;
  width: 300px;
  padding: 1rem;
  margin-top: 3rem;
  background-color: #081a51;
  color: white;
  text-decoration: none;
  text-align: center;
`;

export const ButtonFinish = styled.button`
  display: inline-block;
  height: 3.1rem;
  width: 1024px;
  padding: 1rem;
  margin-top: 3rem;
  background-color: #081a51;
  color: white;
  text-decoration: none;
  text-align: center;
`;
