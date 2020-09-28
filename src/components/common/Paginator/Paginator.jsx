import React from 'react'
import s from './Paginator.module.scss'

const Paginator = ( props ) => {
	let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
	let pagesNumbers = []

	for ( let i = 1; i <= pagesCount; i++ ) {
		pagesNumbers.push( i )
	}

	return (
		<div className = { s.pagination }>
			{
				pagesNumbers.map(
					p => <span	key = {p}
								className = { ( p === props.currentPage ) ? ( s.page + ' ' + s.current ) : s.page }
								onClick = { () => { props.onPageChanged( p ) } }>{p}</span>
				)
			}
		</div>
	)
}

export default Paginator