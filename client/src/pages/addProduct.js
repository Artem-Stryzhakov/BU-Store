import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {selectIsAuth} from "../redux/slices/auth";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const AddProduct = () => {
    const isAuth = useSelector(selectIsAuth);
    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to={'/'}/>
    }

    const [name, price] = useState('')

    return(
        <div>
            <form>
                <input
                    type="text"
                    placeholder={'type name...'}
                    value={name}
                    onChange={(e) => name(e.target.value)}
                />

                <input
                    type="number"
                    placeholder={'type email...'}
                    value={price}
                    onChange={(e) => price(e.target.value)}
                />

                <Button type={'submit'}>Add product</Button>
            </form>
        </div>
    )
}