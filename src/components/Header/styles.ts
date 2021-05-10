import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.colors.background};

  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;




  h2{
    font-size: 55px;
    color: ${props => props.theme.colors.primary};
    margin-top:40px;
    font-family: 'Fira Code', monospace;

    span{
    color: #fff;
    }

  }
  p{
    margin-top: 30px;
    font-size: 50px;
    color:${props => props.theme.colors.secundary};
    }



`;
