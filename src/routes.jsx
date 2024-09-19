import { createBrowserRouter } from "react-router-dom"

import Home from './pages/Home'
import Projects from "./pages/projects"
import About from "./pages/About"

const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />    
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/about',
            element: <About />
        }
        

])

export default router