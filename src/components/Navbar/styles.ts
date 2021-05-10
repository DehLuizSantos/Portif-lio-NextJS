import styled from "styled-components";

export const ContainerNavbar = styled.div`
    position: fixed;
    left:0;
    top:0;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    padding: 0 1rem;

    width:100%;
    height:75px;
    background: ${props => props.theme.colors.black};

`;

export const MenuDrop = styled.button`
  background: ${props => props.theme.colors.black};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .active{
    display:flex;

  }

  .inactive{
    display:none;


  }

`;

export const ContainerMenu = styled.div`
  width:200px;
  height:400px;

  background-color:transparent;

  position: absolute;
  top:10%;
  right:10%;







`;
