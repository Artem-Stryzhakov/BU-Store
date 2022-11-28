import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {FeaturesPage} from "./pages/FeaturesPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/'} exact element={<MainPage/>}/>
                {/*something else is gonna be here*/}
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>} />
            <Route path={'/features'} exact element={<FeaturesPage/>}/>
        </Routes>
    )
}