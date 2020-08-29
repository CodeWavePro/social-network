import React from 'react'
import { reduxForm, Field } from 'redux-form'
import s from './Login.module.scss'
import { Input } from '../common/FormControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const maxLength30 = maxLengthCreator( 30 )

const LoginForm = ( props ) => {
	const { handleSubmit } = props

    return (
    	<form id = "login-form" className = { s.form } onSubmit = { handleSubmit( props.onSubmit ) }>
    		<div className = { s['form-field'] }>
    			<Field  name = "email"
                        className = "input"
                        component = { Input }
                        placeholder = "E-mail"
                        validate = { [required, maxLength30] } />
    		</div>
    		<div className = { s['form-field'] }>
    			<Field  name = "password"
                        className = "input"
                        component = { Input }
                        placeholder = "Пароль"
                        type = "password"
                        validate = { [required, maxLength30] } />
    		</div>
    		<div className = { s['form-field'] }>
    			<Field  name = "rememberMe"
                        className = { s.checkbox }
                        component = "input"
                        type = "checkbox" /> Запомнить меня
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
		props.login( formData.email, formData.password, formData.rememberMe )
	}

    if ( props.isAuth ) {
        return <Redirect to = "/profile" />
    }   else {
        return (
            <div className = { s.login }>
                <h1 className = { s.login__title }>Вход</h1>
                <LoginReduxForm onSubmit = { onFormSubmit } />
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    isAuth: state.auth.isAuth
} )

export default connect( mapStateToProps, { login, logout } )( Login )