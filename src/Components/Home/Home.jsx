import Lottie from 'lottie-web';
import React,{useEffect, useRef} from 'react';
import Nav from './Nav/Nav'
import './Home.css';

const Home = ()=> {

    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop : true,
          autoplay: true,
          animationData: require('./blood-home.json')
        })
      },[])

  return (
    <div className='home-main container'>
        <Nav/>
        <div className="home ">
        <div className="home-left">
        <div className="loading__icon" ref={container}></div> 
        </div>
        <div className="home-right">
            <p className='home-right-p1'>
            Bangladesh has a shortage of 2 Million Blood Units.
            </p>
            <p className="home-right-p2">
            এই website ডিসেম্বর ২০২৩ এ লঞ্চ হয়েছে যার কারনে অনেকের রক্তদাতা পেতে সমস্যা হচ্ছে। আমারা প্রতিনিয়ত কাজ করে যাচ্ছি। ইনশাআল্লাহ
            </p>
        </div>
        </div>

     
      
      
    </div>
  )
}

export default Home
