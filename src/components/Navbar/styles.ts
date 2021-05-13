import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    position: fixed;
    top: 0;
    width: 80rem;
    height: 6rem;
    font-family: 'Fira Code', sans-serif;
    background-color: rgba(0,0,0,.26);
    margin-bottom: 0px;
    
    .nav-tabs {
        border-bottom: 0px !important;
    }
    
`;

export const ExpandNav = styled.div`
    height: 6rem;
    width: 75rem;
    display: flex;
    align-items: center;
    
    background-color: rgba(0,0,0,.26);
`

export const MenuFormater = styled.div`
    color: ${props => props.theme.colors.black};
    display: flex;
    flex-direction: row;
    .nav-link {
        color: #fff;
    }
    .nav-link:active {
        border-bottom:${props => props.theme.colors.secundary};
    }
`

export const NavItem = styled.span`
    
    transition: all.3s;
    display:flex;
    flex-direction:end;
    
    &:hover{
        .nav-link{
            color: ${props => props.theme.colors.primary};
            border-bottom: .1px solid ${props => props.theme.colors.black} !important;
            border: 0px;
        }
            transform: translateY(-1px);
    }
`;