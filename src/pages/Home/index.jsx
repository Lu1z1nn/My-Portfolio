import { useNavigate } from 'react-router-dom'
import HtmImage  from '../../assets/ht.png'
import CsImage from '../../assets/cs.png'
import JsImage from '../../assets/js.png'
import RectImage from '../../assets/rect.png'
import NdImage from '../../assets/nd.png'
import GtImage from '../../assets/gt.png'
import backVideo from '../../assets/vid.mp4'



import Button from '../../components/Button'

import {
    Container, SecondContainer, SectionAboutMe, HeaderLeft, Name, All,   
    HeaderRight, Contain, Main, Phrase,
    AboutMe, H2, MyProjects, Projects, Contacts, FirstProject, SecondProject,
    ThirdProject, FourthProject, H3,
    SectionImages, SectionNav
} from './styles'



function Home() {

    const navigate = useNavigate()

    return (
        <Container>
            <SecondContainer>
                <video className='background' autoPlay muted loop>
                    <source src={backVideo} type='video/mp4'/>
                </video>
                <Contain>
                    <HeaderLeft>
                        <Name>Luiz Fellipe | Desenvolvedor Full-Stack</Name>
                    </HeaderLeft>
                    <HeaderRight>
                        <Button type='button' onClick={() => navigate('/about')} >Sobre mim</Button>
                        <Button type='button' onClick={() => navigate('/projects')}>Projetos</Button>
                        <Button>Lua </Button>
                    </HeaderRight>
                </Contain>

                <Main>
                    <Phrase>"Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito."</Phrase>
                    <SectionImages>
                    
                    </SectionImages>
                    
                </Main>

                <All> 
                    <SectionAboutMe>
                        <SectionNav>
                            <h3>Tecnologias utilizadas:</h3>
                            <div>
                            <img src={HtmImage} alt="Imagem-HTML" /> 
                            <img src={CsImage} alt="Imagem-CSS" /> 
                            <img src={JsImage} alt="Imagem-JavaScript" /> 
                            <img src={RectImage} alt="Imagem-React" /> 
                            <img src={NdImage} alt="Imagem-Node" /> 
                            <img src={GtImage} alt="Imagem-Git" />
                            </div>  
                        </SectionNav>
                    
                        <AboutMe>
                            <H2>Sobre mim</H2>
                            <p>Me chamo Luiz, tenho 23 anos, sou desenvolvedor Full Stack com 1 ano de experiência em criação de websites responsivos e interativos. Possuo conhecimento em HTML, CSS, JavaScript, React.js e Node.js. Experiência em projetos freelance, entregando soluções personalizadas e de alta qualidade para clientes diversos.</p>
                        </AboutMe>
                    </SectionAboutMe>
                    <MyProjects>
                        <H3>Pré-visualização de projetos</H3>
                        <Projects>
                            <FirstProject></FirstProject>
                            <SecondProject></SecondProject>
                            <ThirdProject></ThirdProject>
                            <FourthProject></FourthProject>
                        </Projects>
                    </MyProjects>
                    <Contacts>
                        <a href='Fellipebezerra@hotmail.com'>E-mail</a>
                        <a href='linkedin.com/in/luiz-fellipe-bezerra/'>LInkedin</a>
                        <a href='github.com/Lu1z1nn'>Github</a>
                        <a href='(81) 98477-0254'>Telefone</a>
                    </Contacts>
                </All>
            </SecondContainer>
        </Container>
    )
}

export default Home