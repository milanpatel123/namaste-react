import { CDN_URL } from '../utils/constant';
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className='res-logo'
        alt='res-logo'
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
