import React from 'react'
import "/src/App.css";
import bannerImg from "../../assets/banner.png"


function Banner() {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>

      {/* Images */}
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />

      </div>
      {/* Contant */}
      <div className="md:w-1/2 w-full">
        <h1 className=' md:text-5xl text-2xl font-medium mb-7 ' >New Releases This week</h1>
        <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis illum magni! Ipsam maxime dolores in magnam harum rerum nisi repellat ducimus illum. Molestiae corrupti nam quaerat, unde, atque praesentium consectetur consequuntur ea neque possimus natus voluptatum architecto officia iure ab odio deserunt, suscipit voluptatem libero. Tempora praesentium delectus dicta.</p>
        <button className='btn-green px-4 py-2 rounded-md cursor-pointer w-30 md:w-40' >Sub</button>
      
      
      </div>
    </div>
  )
}

export default Banner
