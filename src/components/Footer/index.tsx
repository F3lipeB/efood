import { Container, FooterSection, Link, Links } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="Logo efood" />
        <Links>
          <li>
            <Link>
              <img src={instagram} alt="Icone instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="Icone facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="Icone twitter" />
            </Link>
          </li>
        </Links>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
