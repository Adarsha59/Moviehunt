import React from 'react'
import  "./style.scss";
import Herobanner from './heroBanner/Herobanner';
import Trending from './Trending/Trending';
import Hindi from './Hindi/Hindi';
import Series from './Series/Series';
import Watch from './Watchit/Watch';

const home = () => {
  return (
    <div>
      <Herobanner/>
    <Trending/>
    <Hindi/>
    <Series/>
    <Watch/>
    </div>
  )
}

export default home
