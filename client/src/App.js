import React from "react";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from "./routes";
import {NavScrollExample} from "./pages/components/navbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";

function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth);

    React.useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])

    const routes = useRoutes(isAuth)
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