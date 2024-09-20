import { useNavigate } from 'react-router-dom'
import HtmImage  from '../../assets/ht.png'
import CsImage from '../../assets/cs.png'
import JsImage from '../../assets/js.png'
import RectImage from '../../assets/rect.png'
import NdImage from '../../assets/nd.png'
import GtImage from '../../assets/gt.png'
import OImage from '../../assets/Image-one.png'
import ToImage from '../../assets/Image-two.png'
import ThImage from '../../assets/Image-three.png'
import FoImage from '../../assets/Image-four.png'
import FiImage from '../../assets/Image-five.png'
import SiImage from '../../assets/Image-six.png'
import SvImage from '../../assets/Image-seven.png'
import EiImage from '../../assets/Image-eight.png'
import NnImage from '../../assets/Image-nine.png'


import Button from '../../components/Button'

import {
    Container, HeaderLeft, Name,
    HeaderRight, Contain, Main, Phrase,
    AboutMe, H2, MyProjects,
    Contacts, FirstProject, SecondProject,
    ThirdProject, FourthProject, H3,
    SectionImages, SectionNav
} from './styles'



function Home() {

    const navigate = useNavigate()

    return (
        <Container>
            <Contain>
                <HeaderLeft>
                    <Name>Luiz Fellipe | Desenvolvedor Full-Stack</Name>
                </HeaderLeft>
                <HeaderRight>
                    <Button type='button' onClick={() => navigate('/about')} >Sobre mim</Button>
                    <Button type='button' onClick={() => navigate('/projects')}>Projetos</Button>
                    <Button> Lua </Button>
                </HeaderRight>
            </Contain>

            <Main>
                <Phrase>"Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito."</Phrase>
                
                
            </Main>

            <SectionImages>
                    <img src={OImage} alt="" />
                    <img src={ToImage} alt="" />
                    <img src={ThImage} alt="" />
                    <img src={FoImage} alt="" />
                    <img src={FiImage} alt="" />
                    <img src={SiImage} alt="" />
                    <img src={SvImage} alt="" />
                    <img src={EiImage} alt="" />
                    <img src={NnImage} alt="" />
                </SectionImages>
            <SectionNav>
                    <img src={HtmImage} alt="Imagem-HTML" />
                    <img src={CsImage} alt="Imagem-CSS" />
                    <img src={JsImage} alt="Imagem-JavaScript" />
                    <img src={RectImage} alt="Imagem-React" />
                    <img src={NdImage} alt="Imagem-Node" />
                    <img src={GtImage} alt="Imagem-Git" />
                    
                </SectionNav>

            <AboutMe>
                <H2>Sobre mim</H2>
                <p>Me chamo Luiz, tenho 23 anos, sou desenvolvedor Full Stack com 1 ano de experiência em criação de websites responsivos e interativos. Possuo forte conhecimento em JavaScript, TypeScript, React.js e Node.js. Experiência em projetos freelance, entregando soluções personalizadas e de alta qualidade para clientes diversos.</p>
            </AboutMe>
            <MyProjects>
                <H3>Pré-visualização de projetos</H3>
                <FirstProject></FirstProject>
                <SecondProject></SecondProject>
                <ThirdProject></ThirdProject>
                <FourthProject></FourthProject>
            </MyProjects>
            <Contacts>
                <p>Fellipebezerra@hotmail.com</p>
                <p>linkedin.com/in/luiz-fellipe-bezerra/</p>
                <p>github.com/Lu1z1nn</p>
                <p>(81) 98477-0254</p>
            </Contacts>
        </Container>
    )
}

export default Home