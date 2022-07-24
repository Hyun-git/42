import CardItem from './CardItem';

function CardList({ items, cardListRef }) {
	return (
		<>
			{items.length>0 &&
				<div className="card-list-container" ref={cardListRef} >
					{items.map((item,idx) => (<CardItem key={idx}  item={item.data[0]} imgSrc={item.links[0].href} />))}
				</div>
			}
			{items.length===0 && 
				<div className='no-search'> 검색되는 내역이 없습니다. </div>}
		</>
	)	
}

export default CardList;