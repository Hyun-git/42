import { sliceFormatText, sliceTitleText } from '../utils';

function CardItem({ item, imgSrc}) {
	return (
		<div className="card bg-light">
			<img className="card-img-top" src={imgSrc} alt="card-item-preview" />
			<div className="card-body">
				<h5 className="card-title border-bottom pb-3">{sliceTitleText(item.title)} <i className="fas fa-share-alt"></i></h5>
				<p><strong>Center</strong>{item.center}</p>
				<strong>Keywords</strong>
					<code className='keyword'>
						{item.keywords?.map((keyword,idx) => {<span key={idx} >{keyword}</span>})}
					</code>
				<p className="card-text">{sliceFormatText(item.description)}</p>
			</div>
		</div>
	)
}

export default CardItem;