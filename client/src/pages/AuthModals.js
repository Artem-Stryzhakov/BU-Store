import React from 'react';
import Button from "react-bootstrap/Button";
import {useForm} from 'react-hook-form'

import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../redux/slices/auth";

export const LoginModal = () => {
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

    const onSubmit = (values) => {
        dispatch(fetchAuth(values))
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
    return(
        <form>
            <input
                type="text"
                placeholder={'type name...'}
                {/*{...register('', {required: 'Enter the email'})}*/}
            />

            <input
                type="email"
                placeholder={'type email...'}
                {/*{...register('email', {required: 'Enter the email'})}*/}
            />

            <input
                type="password"
                placeholder={'type password...'}
                {/*{...register('password', {required: 'Enter the password'})}*/}
            />

            <Button type={'submit'}>Log in</Button>
        </form>
    )
}
