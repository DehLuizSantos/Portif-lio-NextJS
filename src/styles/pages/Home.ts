import styled from 'styled-components';

export const Container = styled.div` //primeiro components de styled-components no projeto
  width: 100%;
  height: 100vh;

  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;

  h1{
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top:40px;
  }

  p{
    margin-top: 24px;
    font-size: 24px;
  }

`;
