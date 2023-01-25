import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {PortfolioPage} from './pages/PortfolioPage'
import {MainPage} from "./pages/MainPage/MainPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <MainPage/> } />
                <Route path="/portfolioPage" element={<PortfolioPage/>}/>
            </Routes>
        </>
    );
}

export default App;
