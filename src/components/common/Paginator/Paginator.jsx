import React, { useState } from 'react'
import s from './Paginator.module.scss'

const Paginator = ( props ) => {
	let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
	let pagesNumbers = []

	for ( let i = 1; i <= pagesCount; i++ ) {
		pagesNumbers.push( i )
	}

	let portionCount = Math.ceil( pagesCount, props.portionSize )
	let [portionNumber, setPortionNumber] = useState( 1 )
	let leftPortionPageNumber = ( portionNumber - 1 ) * props.portionSize + 1
	let rightPortionPageNumber = portionNumber * props.portionSize

	return (
		<div className = { s.pagination }>
			{
				portionNumber > 1 &&
				<button onClick = { () => { setPortionNumber( portionNumber - 1 ) } }>Назад</button>
			}
			{
				pagesNumbers
					.filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
					.map(
						p => <span	key = {p}
									className = { ( p === props.currentPage ) ? ( s.page + ' ' + s.current ) : s.page }
									onClick = { () => { props.onPageChanged( p ) } }>{p}</span>
					)
			}
			{
				portionCount > portionNumber &&
				<button onClick = { () => { setPortionNumber( portionNumber + 1 ) } }>Вперёд</button>
			}
		</div>
	)
}

export default Paginator