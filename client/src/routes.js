import React from "react";
import {Routes, Route} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {FeaturesPage} from "./pages/FeaturesPage";
import {LoginModal} from "./pages/AuthModals";

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
            <Route path={'/auth/login'} exact element={<LoginModal/>}/>
        </Routes>
    )
}