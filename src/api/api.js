import * as axios from 'axios'

const instance = axios.create( {
	baseURL			: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials	: true,
	headers			: {
		'api-key': 'd0236eb5-89dc-482b-8db8-7de57cb06658'
	}
} )

export const usersAPI = {
	getUsers( currentPage = 1, pageSize = 10 ) {
		return instance.get( `users?page=${currentPage}&count=${pageSize}` )
	},

	followUser( userId ) {
		return instance.post( `follow/${userId}` )
	},

	unfollowUser( userId ) {
		return instance.delete( `follow/${userId}` )
	}
}

export const authAPI = {
	authMe() {
		return instance.get( 'auth/me' )
	},

	login( email, password, rememberMe ) {
		return instance.post( 'auth/login', { email, password, rememberMe } )
	},

	logout() {
		return instance.delete( 'auth/login' )
	}
}

export const profileAPI = {
	getData( userId ) {
		return instance.get( `profile/${userId}` )
	},

	getStatus( userId ) {
		return instance.get( `profile/status/${userId}` )
	},

	updateStatus( status ) {
		return instance.put( 'profile/status', { status } )
	}
}