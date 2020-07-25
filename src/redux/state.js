import {reRenderEntireTree} from '../render'

let state = {
	profilePage: {
		postsData: [
		    {id: 1, name: 'Andrei Stezenko', postText: 'Олололо', likesCount: 3},
		    {id: 2, name: 'Andrei Stezenko', postText: 'Трололо', likesCount: 1},
		    {id: 3, name: 'Andrei Stezenko', postText: 'ОЛОЛОЛОЛОЛОЛОЛО', likesCount: 7}
		],
		newPostText: ''
	},

	dialogsPage: {
		dialogsData: [
		    {id: 1, name: 'Вася'},
		    {id: 2, name: 'Петя'},
		    {id: 3, name: 'Саша'},
		    {id: 4, name: 'Серёжа'}
		],

		messagesData: [
		    {id: 1, messageText: 'Привяу'},
		    {id: 2, messageText: 'Чё как'},
		    {id: 3, messageText: 'Алё'}
		]
	}
}

export let addPost = () => {
	let newPostObject = {
		id			: 4,
		name		: 'Andrei Stezenko',
		postText	: state.profilePage.newPostText,
		likesCount	: 0
	}
	state.profilePage.postsData.push( newPostObject )
	onNewPostTextChange( '' )
	reRenderEntireTree( state )
}

export let onNewPostTextChange = ( newPostText ) => {
	state.profilePage.newPostText = newPostText
	reRenderEntireTree( state )
}

export default state