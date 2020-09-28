import React from 'react'
import profileReducer, { addPost, deletePost } from './profile-reducer'

it( 'after deleting posts length must decrement', () => {
	// 1. Test data.
	let state = {
		postsData: [
		    {id: 1, name: 'Andrei Stezenko', postText: 'Олололо', likesCount: 3},
		    {id: 2, name: 'Andrei Stezenko', postText: 'Трололо', likesCount: 1},
		    {id: 3, name: 'Andrei Stezenko', postText: 'ОЛОЛОЛОЛОЛОЛОЛО', likesCount: 7}
		]
	}
	// 2. Action creator.
	let action = deletePost( 1 )
	// 3. Reducer works.
	let newState = profileReducer( state, action )
	// 4. Expected.
	expect( newState.postsData.length ).toBe( 2 )
} )