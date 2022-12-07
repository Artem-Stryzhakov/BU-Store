import React from "react";
import {Routes, Route} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {FeaturesPage} from "./pages/FeaturesPage";
import {LoginModal, RegistrationModal} from "./pages/AuthModals";
import {AddProduct} from "./pages/addProduct";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/'} exact element={<MainPage/>}/>
                <Route path={'/addProduct'} exact element={<AddProduct/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>} />
            <Route path={'/features'} exact element={<FeaturesPage/>}/>
            <Route path={'/auth/login'} exact element={<LoginModal/>}/>
            <Route path={'/auth/register'} exact element={<RegistrationModal/>}/>
        </Routes>
    )
}