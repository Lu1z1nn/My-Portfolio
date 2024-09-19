import { useNavigate } from 'react-router-dom'
import DevImage from '../../assets/linguagem-de-programacao-removebg.png'

import {
Container, HeaderLeft, Name,
HeaderRight, Contain, BtnAboutMe, BtnProjects,
BtnMode, Main,  Phrase,
AboutMe, H2, MyProjects,
Contacts, FirstProject, SecondProject, 
ThirdProject, FourthProject, H3,
SectionImage
} from './styles'

import Btn from '../../components/button'


function Home() {

    const navigate = useNavigate()
    
    return (
        <Container>
            <Contain>
                <HeaderLeft>
                    <Name>Luiz Fellipe | Desenvolvedor Full-Stack</Name>
                </HeaderLeft>
                <HeaderRight>
                    <Btn type='button' onClick={() => navigate('/about')} >Sobre mim</Btn>
                    <Btn type='button' onClick={() => navigate('/projects')}>Projetos</Btn>
                    <Btn> Lua </Btn>
                </HeaderRight>
            </Contain>

            <Main>
                <Phrase>"Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito."</Phrase>
                <SectionImage>
                    <img src={DevImage} alt="Imagem-de-um-programador" />
                </SectionImage>
            </Main>
            
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