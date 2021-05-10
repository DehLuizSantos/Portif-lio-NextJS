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
   
    background-color: ${props => props.theme.colors.black};    

`;

export const RedesSociais = styled.div`
    width: 400px;
    height: 80px;
    border-radius:20px;    

    background-color: ${props => props.theme.colors.black};


`

export const Historia = styled.div`
    width:450px;
    height:505px;
    border-radius: 50px;
    margin-top:50px;

    background-color: ${props => props.theme.colors.black};


`;