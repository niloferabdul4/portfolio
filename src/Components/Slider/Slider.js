import React from 'react';
import settings from './Settings';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_data from './slider_data';
import ProjCard from './ProjCard';

const ProjSlider = () => {
/*
   useEffect(()=>{
        if(products===[]){
            <p>Loading...</p>
        }
        else{
           
            setTrendsProducts(products)  
          
        }
                   
       },[products])
*/
    return (
        <>
        
         
            
            <Slider {...settings} >   
                                              
                    {slider_data.map(item=>{return <ProjCard   key={item.id} card={item}
                                                                   
                                                                         
                    />})}    
             </Slider>
                  
        
        </>
    );
}

export default ProjSlider;
