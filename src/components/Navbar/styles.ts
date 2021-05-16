import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    position: fixed;
    top: 0;
    width: 80rem;
    height: 6rem;
    font-family: 'Fira Code', sans-serif;
    background-color: rgba(0,0,0,.26);
    margin-bottom: 0px;
    display:flex;
    justify-content:end;
    
    .dropdown{
        display:flex;
        justify-content:end;
        background:transparent;
        

        .dropdown-menu{
                background-color:transparent;
                border:none;
                
            }

        a.dropdown-item{
            color:#fff;

            :hover{
                background:${props => props.theme.colors.primary};
                color:#000000;
            }
            
        }

        button{
            font-size:2rem;
            background:transparent;
            border:none;

           
        }

    }
    
`;
