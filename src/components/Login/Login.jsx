import React from 'react'
import { reduxForm, Field } from 'redux-form'
import s from './Login.module.scss'

const LoginForm = ( props ) => {
	const { handleSubmit } = props

    return (
    	<form id = "login-form" className = { s.form } onSubmit = { handleSubmit( props.onSubmit ) }>
    		<div className = { s['form-field'] }>
    			<Field name = "login" className = "input" component = "input" placeholder = "Логин" />
    		</div>
    		<div className = { s['form-field'] }>
    			<Field name = "password" className = "input" component = "input" placeholder = "Пароль" />
    		</div>
    		<div className = { s['form-field'] }>
    			<Field name = "remember-me" className = { s.checkbox } component = "input" type = "checkbox" /> Запомнить меня
    		</div>
    		<div className = { s['form-field'] }>
    			<button type = "submit" form = "login-form" className = "button">
    				Войти
    			</button>
    		</div>
    	</form>
    )
}

const LoginReduxForm = reduxForm( { form: 'login' } )( LoginForm )

const Login = ( props ) => {
	const onFormSubmit = ( formData ) => {
		console.log( formData )
	}

    return (
        <div className = { s.login }>
        	<h1 className = { s.login__title }>Вход</h1>
        	<LoginReduxForm onSubmit = { onFormSubmit } />
        </div>
    )
}

export default Login