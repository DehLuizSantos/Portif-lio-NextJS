import styled from 'styled-components'

export const ContainerFooter = styled.div `
    width:100%;
    height:100px;

    background:${props => props.theme.colors.background};

    h2{
        display: flex;
        align-content:center;
        text-align:center;
    }


`;