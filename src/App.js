import React from 'react';
import Food from './Food';

const FoodILike = [
  {
    name: 'Kimchi',
    image: 'https://file.mk.co.kr/meet/yonhap/2021/07/27/image_readtop_2021_723178_0_112411.jpeg',
  },
  {
    name: 'Samgyeopsal',
    image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
  },
  {
    name: 'Kimbab',
    image: 'https://1.bp.blogspot.com/-pLpgX1x1vdU/XtpIYEYXMKI/AAAAAAAA4yM/39oLjc33mAE-0z66DheWb_eCagBtZacRwCK4BGAsYHg/s2400/20200530_154930.jpg',
  },
  {
    name: 'Bulgogi',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {FoodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  )
}

export default App;
