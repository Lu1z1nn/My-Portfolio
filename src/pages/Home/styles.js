import styled from "styled-components";

export const Container = styled.div`
    height: 100vw;
    width: 100%;
    background-image: linear-gradient(to left, #121e42, #14114a, #1f1261);
    background-size: 500% 100%;
    animation: degrade 5s infinite alternate;
    /* #121e42 */
    @keyframes degrade {
        0% {
            background-position-x: 0%;
        }
        100% {
            background-position: 100%;
        }
    }
`
export const Contain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 0;
`
export const HeaderLeft = styled.div`
`
export const HeaderRight = styled.div`
    display: flex;
    gap: 20px;
`
export const Name = styled.h2`
   
 `


export const BtnProjects = styled.button``

export const BtnMode = styled.button``

export const Main = styled.div`
    display: flex;
    align-items: center;
    padding: 150px 20px;
    img {
        margin-left: 180px;
        width: 85%;
        height: 85%;
    }
    `
export const SectionImage = styled.div`
width: 100%;
height: 100%;
`

export const FirstProject = styled.div``

export const SecondProject = styled.div``

export const ThirdProject = styled.div``

export const FourthProject = styled.div``




export const Phrase = styled.h2``

export const AboutMe = styled.div``

export const H2 = styled.h3``

export const MyProjects = styled.div``

export const H3 = styled.h3``

export const Contacts = styled.div``
