import styled from 'styled-components'

export const ContainerFooter = styled.div `
    width:75rem;
    height:4rem;

    background:${props => props.theme.colors.background};

    font-size: 3rem;

    color:#fff;

    display: flex;
    justify-content:space-between;
    padding:20px 10px 0 5px;   

    a{
        color:${props => props.theme.colors.secundary};
        
    }

    a:hover{
        color: ${props => props.theme.colors.primary};
    }    

`;