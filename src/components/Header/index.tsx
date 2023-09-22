import { ContainerHeader, ContainerMenu, ContainerNav, MenuContent, MenuMobile } from './styles'

import atencaoImg from '../../assets/image1.svg'
import logo from '../../assets/logo.svg'
import iconInicio from '../../assets/iconInicio.svg'
import iconCupons from '../../assets/iconCupom.svg'
import iconCardapio from '../../assets/iconCardapio.svg'
import iconLojas from '../../assets/iconLojas.svg'
import { useEffect, useState } from 'react'
import { useSpring, SpringValue } from 'react-spring'
import { FiMenu } from 'react-icons/fi'
const navLinks = [
  {link: 'Início', path: 'inicio'},
  {link: 'Cupons', path: 'cupons'},
  {link: 'Cardápio', path: 'cardapio'},
  {link: 'Resturantes', path: 'restaurantes'},
  {link: 'App Bk', path: 'app'},
  {link: 'Clube BK', path: 'clube'},
  {link: 'Delivery', path: 'delivery'},
]

const linksMobile = [
  {link: 'Início', path: 'inicio', img: iconInicio},
  {link: 'Cupons', path: 'cupons', img: iconCupons},
  {link: 'Cardápio', path: 'cardapio', img: iconCardapio},
  {link: 'Restaurantes', path: 'restaurantes', img: iconLojas},
  
]

interface HeaderProps {
  toggleMenu: () => void
  isOpenMenu: boolean
}

const Header = ({toggleMenu, isOpenMenu}:HeaderProps) => {

  const [isScroll, setIsScroll] = useState(true)
  

  const springProps = useSpring({
    top: isScroll ? '0%' : '-100%' as unknown as SpringValue<string>,
    
  });

  useEffect(() => {
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsScroll(currentScrollPos < prevScrollPos)
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
       window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
   <>
    <ContainerHeader sticky={isScroll.toString()} style={springProps}>
     <div>
     <img src={atencaoImg} alt="Descontos e cupons promocionais do BK só podem ser obtidos em nossos canais oficiais" />
     </div>
        <ContainerNav>
        <div>
        <img src={logo} alt="logo marca do burguer king" />
        </div>
          <ul> 
            {navLinks.map((link) => (
              <li key={link.link}><a href={link.path}>{link.link}</a></li>
            ))}
          </ul>
        </ContainerNav>
    </ContainerHeader>
    <MenuMobile>
      {linksMobile.map((link) => (
        <div key={link.link}>
          <ul>
            <li ><a href={link.path}>{link.link}</a></li>
          </ul>
          <img src={link.img} alt="" />
        </div>
      ))}
      <ContainerMenu >
        <span>Menu</span>
        <FiMenu onClick={toggleMenu} style={{color: '#9d8273'}} size={24}/>
      </ContainerMenu>
    </MenuMobile>
    <MenuContent open={isOpenMenu}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.link}><a href={link.path}>{link.link}</a></li>
          ))}
        </ul>
      </div>
    </MenuContent>
   </>
  )
}

export default Header