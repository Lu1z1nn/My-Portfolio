
import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 100%;
`
export const SecondContainer = styled.div`
    .background {
        position: relative;
        object-fit: cover;
        width: 100%;
        height: 100%;   
        border: 5px solid;
    }
`
export const Contain = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 250px;
    position: absolute;
    top: 20px;
    left: 20px;
`
export const HeaderLeft = styled.div`
    background-color: black;
    color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
`
export const HeaderRight = styled.div`
    display: flex;
    gap: 20px;
`
export const Name = styled.h2`
   
 `
export const Main = styled.div`

`
export const Phrase = styled.h2`
    width: 40%;
    position: absolute;
    top: 65%;
    left: 2%;
    `
export const All = styled.div`  
        width: 100%;
        height: 100vh;
`
export const SectionAboutMe = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
`
export const SectionNav = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: ;
    div {
        display: grid;
        grid-template-columns: 80px 80px 80px;
        gap: 20px;
        
    }
    img {
        width: 50px;
    }    
    `
export const AboutMe = styled.div`  
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        border: 2px solid;
        border-radius: 20px;
        padding: 10px 10px;
        p {
            text-align: center;
        }
        `
export const MyProjects = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const Projects = styled.div`
    display: grid;
    grid-template-columns:80px 80px;
    gap: 50px;
`

export const FirstProject = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #483D8B;
`


export const SecondProject = styled.div`
  width: 100px;
  height: 100px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #483D8B;
`

export const ThirdProject = styled.div`
   width: 100px;
   height: 100px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #483D8B;
`

export const FourthProject = styled.div`
 width: 100px;
 height: 100px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #483D8B;
`






export const H2 = styled.h3``


export const H3 = styled.h3``

export const Contacts = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center         ;
    gap: 20px;
`
export const SectionImages = styled.div`
   
   `