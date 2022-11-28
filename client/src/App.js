import React from "react";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from "./routes";
import {NavScrollExample} from "./pages/components/navbar";

function App() {
    const routes = useRoutes(false)
    return (
        <BrowserRouter>
            <NavScrollExample/>
            <div className="container">
                {routes}
            </div>
        </BrowserRouter>
  );
}

export default App;
