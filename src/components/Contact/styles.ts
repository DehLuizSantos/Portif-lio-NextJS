import styled from 'styled-components'

export const ContainerContact = styled.div`
    width: 75rem;
    height:100vh;
    background-color: ${props => props.theme.colors.background};
    padding:3.125rem;
    display:flex;

    flex-direction:column;
    justify-content: center;
    align-items: center;

    margin-top:3.125rem;

    
`;

export const ContainerBio = styled.div`
    width: 62.5rem;
    height:30.5rem;
    background-color: ${props => props.theme.colors.black};
    border-radius:3.125rem;    
    border: 2px solid #fff;
    margin: 1rem;
    position:relative;

    display:flex;
    justify-content: center;
    align-items: center;
    
`;

export const Perfil = styled.div`
    width:15rem;
    height: 15rem;
    border-radius:15rem;
    margin:1.25rem;   
    background-color:red;

    position:absolute;
    bottom:8rem;
    left:5rem;

    img{
        width: 15rem;
        height:15rem;
        border-radius:12.5rem;
        border: 2px solid #fff;
        
    }  

`;

export const RedesSociais = styled.div`
    width: 25rem;
    height: 5rem;
    border-radius:1.25rem;    
    border:2px solid #fff;

    display: flex;
    justify-content:center;
    align-items:center;

    position:absolute;
    top:22rem;
    

    background-color: ${props => props.theme.colors.background};

    a{
        font-size:2.5rem;
        margin: 0.35rem;
        padding: 0.35rem;

        color: ${props => props.theme.colors.secundary};
    }
    a:hover{
        color: ${props => props.theme.colors.primary};
    }  


`

export const Historia = styled.div`
    width:23rem;
    height:22rem;
    border-radius: 50px;
    border: 2px solid #fff;
    

    background-color: ${props => props.theme.colors.background};
    padding:1.5rem;

    text-align:center;

    display: flex;
    justify-content:center;
    
    p{
        color: #fff;
    }

    span{
        color: ${props => props.theme.colors.secundary};
    }


`;