import logo2 from '../../assets/logo2.svg'
import { FooterContainer, LinksContainer, NavLinks1, NavLinks2 } from './styles'
const links = [
  {path:'appbk', link: 'App BK'},
  {path:'sobre', link: 'Sobre o BK'},
  {path:'trabalheconosco', link: 'Trabalhe conosco'},
  {path:'faleconosco', link: 'Fale conosco'},
  {path:'sejafranqueado', link: 'Seja franqueado'},
  {path:'relacoes', link: 'Relações com investidores'},
]

const links2 = [
  {path:'diretrizes', link: 'Diretrizes de Privacidade de Dados'},
  {path:'regulamento', link: 'Regulamento do Clube BK'},
  {path:'politica', link: 'Política de Publicidade Infantil'},
  {path:'informacoes', link: 'Informações Legais'},
  {path:'privacidade', link: 'Opções de Privacidade'},

]

const Footer = () => {
  return (
    <FooterContainer>
     <div>
     <img src={logo2} alt="" /> 
      <LinksContainer>
        <NavLinks1>
          <ul>
            {links.map((link) => <li key={link.link}><a href={link.path}>{link.link}</a></li>)}
          </ul>
        </NavLinks1>
        <NavLinks2>
          <ul>
            {links2.map((link) => <li key={link.link}><a href={link.path}>{link.link}</a></li>)}
          </ul>
        </NavLinks2>
      </LinksContainer>
     </div>
    </FooterContainer>
  )
}

export default Footer