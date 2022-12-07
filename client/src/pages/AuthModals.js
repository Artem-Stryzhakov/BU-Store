import React from 'react';
import Button from "react-bootstrap/Button";
import {useForm} from 'react-hook-form'
import {Navigate} from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, fetchRegister, selectIsAuth} from "../redux/slices/auth";

export const LoginModal = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors, isValid}
    } = useForm({

        defaultValues: {
            email: 'testUser@gmail.com',
            password: '123456'
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))

        if (!data.payload) {
           return alert("Couldn't make authorization!")
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert("Couldn't make authorization!")
        }
    }

    if (isAuth) {
        console.log(isAuth)
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder={'type email...'}
                {...register('email', {required: 'Enter the email'})}
            />

            <input
                type="password"
                placeholder={'type password...'}
                {...register('password', {required: 'Enter the password'})}
            />

            <Button type={'submit'}>Log in</Button>
        </form>
    );
}

export const RegistrationModal = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors, isValid}
    } = useForm({

        defaultValues: {
            fullName: 'Vasja Pupkin',
            email: 'vasja@gmail.com',
            password: '123456'
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        if (!data.payload) {
            return alert("Couldn't make registration!")
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert("Couldn't make authorization!")
        }
    }

    if (isAuth) {
        console.log(isAuth)
        return <Navigate to={'/'}/>
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder={'type name...'}
                {...register('fullName', {required: 'Enter the full name'})}
            />

            <input
                type="email"
                placeholder={'type email...'}
                {...register('email', {required: 'Enter the email'})}
            />

            <input
                type="password"
                placeholder={'type password...'}
                {...register('password', {required: 'Enter the password'})}
            />

            <Button type={'submit'}>Sign in</Button>
        </form>
    )
}
