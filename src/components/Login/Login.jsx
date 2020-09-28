import React from 'react'
import { reduxForm, Field } from 'redux-form'
import s from './Login.module.scss'
import { Input, createField } from '../common/FormControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const maxLength30 = maxLengthCreator( 30 )

const LoginForm = ( { handleSubmit, onSubmit, error } ) => {
    return (
    	<form id = "login-form" className = { s.form } onSubmit = { handleSubmit( onSubmit ) }>
    		{ createField( 'E-mail', 'email', 'input', [required, maxLength30], Input, null, null ) }
            { createField( 'Пароль', 'password', 'input', [required, maxLength30], Input, { type: 'password' }, null ) }
            { createField( null, 'rememberMe', 'checkbox', [], Input, { type: 'checkbox' }, 'Запомнить меня' ) }
    		<div className = { s['form-field'] }>
                { error && <div className = { s['form-error'] }>{ error }</div> }

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