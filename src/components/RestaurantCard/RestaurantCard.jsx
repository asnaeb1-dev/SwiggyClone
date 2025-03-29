import "./restaurantcard.css";

const RestaurantCard = ({restaurant, openRestaurantDetails}) => {
	const {name, costForTwo, avgRating, sla, cloudinaryImageId, cuisines } = restaurant;
	return (
		<div onClick={openRestaurantDetails} className='restaurant-card'>
			<div className='restaurant-card-inner'>
				<div className='first-half'>
					<img
						width={"100%"}
						height={180}
						alt='image-pic'
						src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
				</div>
				<div className='second-half'>
					<h4 className='res-name'>{name}</h4>
					<p className='res-cuisines'>{cuisines.reduce((acc, current) => acc + `${current}, `, "")}</p>
					<div className='res-info-container'>
						<span>{avgRating}</span>
						<span>
							<p>{sla?.slaString}</p>
						</span>
						<span>
							{costForTwo}
						</span>
					</div>
					<div className='third-half'>
						<span>40% off</span>
					</div>
				</div>
			</div>
		</div>
	)
}


export default RestaurantCard;