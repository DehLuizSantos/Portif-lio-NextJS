import styled from 'styled-components'

export const ContainerContact = styled.div`
    width: 100%;
    height:130vh;
    background-color: ${props => props.theme.colors.black};
    padding:50px;

    
`;

export const ContainerBioAlign = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    margin-top:50px;

`;

export const ContainerBio = styled.div`
    width: 1000px;
    height:600px;
    background-color: ${props => props.theme.colors.background};
    border-radius:50px;    
    border: 2px solid #fff;

    display:flex;
    justify-content: center;
    align-items: center;
    
    margin: 17px;
`;

export const Perfil = styled.div`
    width:350px;
    height: 350px;
    border-radius:200px;
    margin:20px;   
   

    img{
        width: 350px;
        height:350px;
        border-radius:200px;
        border: 2px solid #fff;
    }  

`;

export const RedesSociais = styled.div`
    width: 400px;
    height: 80px;
    border-radius:20px;    
    border:2px solid #fff;

    display: flex;
    justify-content:center;

    background-color: ${props => props.theme.colors.black};

    a{
        font-size:40px;
        margin: 5px;
        padding: 5px;

        color: ${props => props.theme.colors.secundary};
    }
    a:hover{
        color: ${props => props.theme.colors.primary};
    }


    


`

export const Historia = styled.div`
    width:450px;
    height:505px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin-top:50px;

    background-color: ${props => props.theme.colors.black};
    padding:30px;

    text-align:center;

    display: flex;
    justify-content:center;
    
    p{
        padding:30px;
        margin:30px;

        color: #fff;
    }

    span{
        color: ${props => props.theme.colors.secundary};
    }


`;