import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from './main/Header/Header';
import { Navigate } from './Routes';

function App() {
    return (
        < >
            <BrowserRouter>
            <Header />
                <Routes>
                    {Navigate.map((d) => (
                        <Route key={d.id} path={d.path} element={d.element}>
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>,
        </>
    )
}

export default App;