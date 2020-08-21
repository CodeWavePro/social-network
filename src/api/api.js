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
			.then( response => {
				return response.data
			} )
	},

	followUser( userId ) {
		return instance.post( `follow/${userId}` )
			.then( response => {
				return response.data
			} )
	},

	unfollowUser( userId ) {
		return instance.delete( `follow/${userId}` )
			.then( response => {
				return response.data
			} )
	}
}

export const authAPI = {
	authMe() {
		return instance.get( 'auth/me' )
			.then( response => {
				return response.data
			} )
	}
}

export const profileAPI = {
	getData( userId ) {
		return instance.get( `profile/${userId}` )
			.then( response => {
				return response.data
			} )
	}
}