import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutedApp from './RoutedApp.tsx'
import './index.css'
import {ThemeProvider} from "./components/ThemeContext/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RoutedApp/>
        </ThemeProvider>
    </React.StrictMode>,
)
