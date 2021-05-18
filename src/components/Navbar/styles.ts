import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    position: fixed;
    width: 100rem;
    height: 5rem;

    font-family: 'Fira Code', sans-serif;
    background-color: rgba(0,0,0,.26);
    display:flex;
    justify-content:flex-end;

    @media (max-width: 512px){
        width:100rem;
        height:15rem;
                
    }
    
    
    
    
    
    .dropdown{
        background:transparent;
        width:15rem;  
        height:100%;
        
        
        display:flex;  
        justify-content:center;        
        align-self:flex-end;
        margin-right:3rem;
        border:none;
       
      
        .dropdown-toggle{
            background:transparent;
            border:none;
            display:flex;
            justify-content:center;
            align-items:center;

            @media (max-width: 512px){
                width:25rem;                
                
            }
            @media (max-width: 1080px){
                width:20rem;
    
            }



        }       

        .dropdown-menu{
                background-image: linear-gradient(180deg, ${props => props.theme.colors.primary}, #fff);
                color:#000000;

                @media (max-width: 512px){
                    width:25rem;
                    height:27rem;

                    a.dropdown-item{
                        font-size:4rem;
                    }
                
                }

                @media (max-width: 1080px){
                    width:19rem;
                    height:20rem;
                    a.dropdown-item{
                        font-size:3rem;
                    }
    
                }

           
                
            a.dropdown-item{                
                 
                background-color:transparent;      

               
            }  

            :hover{
                color:#fff;
                background-image: linear-gradient(180deg, #42FF00, #fff);
                
            }
            
        }                             

        button{
            font-size:5rem;
            background:transparent;
            border:none;

            @media (max-width: 512px){
                font-size:10rem;                
                
            }

            :hover{
                border:none;
                background:transparent;
            }
            

           
        }

    }
    
`;
