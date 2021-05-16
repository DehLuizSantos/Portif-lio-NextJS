import styled from 'styled-components'

export const ContainerProjects = styled.div`
    width:75rem;
    height: 100vh;
    background: ${props => props.theme.colors.background};
   
    

    
    .mainrow {
        .item-portfolio {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`;


export const ContainerCard = styled.div`
    width:22rem;
    height: 16rem;
    padding:2rem;
    border-radius:20px;
    border: 2px solid #fff;
    margin-top:2rem;   
    background: ${props => props.theme.colors.black};

    display:flex;
    align-items:center;
    justify-content:center;

`;



export const AlignButton = styled.div`
    width:12.5rem;
    height: 9.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:2rem;
   
    background-color:${props => props.theme.colors.background};

    a{
        text-decoration:none;

        border: 2px solid #fff;
        border-radius:1rem;
        padding:0.5rem;

        color:${props => props.theme.colors.primary};

        &:hover{
            background-color:#fff;
        }
    }

    

`;




