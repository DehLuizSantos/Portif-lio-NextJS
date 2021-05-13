import styled from 'styled-components'

export const ContainerContact = styled.div`
    width: 75rem;
    height:130vh;
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
    height:37.5rem;
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
    width:22rem;
    height: 15rem;
    border-radius:12.5rem;
    margin:1.25rem;   

    position:absolute;
    bottom:10;
   

    img{
        width: 21rem;
        height:21rem;
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
    top:25rem;
    

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
    width:28rem;
    height:32rem;
    border-radius: 50px;
    border: 2px solid #fff;
    margin-top:2rem;

    background-color: ${props => props.theme.colors.background};
    padding:2rem;

    text-align:center;

    display: flex;
    justify-content:center;
    
    p{
        padding:1.87rem;
        margin:1.87rem;

        color: #fff;
    }

    span{
        color: ${props => props.theme.colors.secundary};
    }


`;