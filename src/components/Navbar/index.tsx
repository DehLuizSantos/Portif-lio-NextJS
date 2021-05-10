import { useEffect, useRef, useState } from 'react'

import { ContainerNavbar, MenuDrop, ContainerMenu } from './styles'

import Hamburguer from '../../assets/hamburguer.svg'

function Navbar(){

const [dropOn, setDropOn] = useState<boolean>(false)
const menuDropRef = useRef<HTMLButtonElement>(null)

  return(
    <ContainerNavbar>
        <MenuDrop
          ref={menuDropRef}
          type="button"
          onClick={()=>setDropOn(!dropOn)}
        >
          <div className={!dropOn ? 'active': 'inactive'}>
           <Hamburguer/>
          </div>
           <ContainerMenu
            className={dropOn ? 'active': 'inactive' }
           >
           </ContainerMenu>
        </MenuDrop>




    </ContainerNavbar>
  )
}

export default Navbar
