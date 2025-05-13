import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  //Local state variable
  const [listofRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            console.log('clicked');
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className='res-container'>
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
