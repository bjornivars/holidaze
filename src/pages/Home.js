import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeHeader from '../components/home/homeHeader';
import PromotionBoxes from '../components/home/promotionBoxes';
import WinterHoliday from './../components/home/winterHoliday';
import {GET_ESTABLISHMENTS} from './../constants/constants';


export default function Home() {
    const [allEstablishments, setAllEstablishments] = useState("no data");

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
          .then((result) => {
            setAllEstablishments(result.data[9]);
          })
      }, [])
      console.log(allEstablishments.imageUrl);
    // http://localhost/holidaze/get-establishments.php

    return (
        <div className=' [  ] '>
            <HomeHeader />
            <PromotionBoxes />
            <WinterHoliday 
                image={allEstablishments.imageUrl}
                />
        </div>
    )
}