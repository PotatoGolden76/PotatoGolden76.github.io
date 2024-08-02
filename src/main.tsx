import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutedApp from './RoutedApp.tsx'
import './index.css'
import {ThemeProvider} from "./contexts/ThemeContext/ThemeContext.tsx";
import {ProjectProvider} from "./contexts/ProjectContext/ProjectContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProjectProvider>
            <ThemeProvider>
                <RoutedApp/>
            </ThemeProvider>
        </ProjectProvider>
    </React.StrictMode>,
)
