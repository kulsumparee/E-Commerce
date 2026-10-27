import React from 'react'
import img1 from "../../assets/images/hedset/bg.svg"
import HeadsetData from '../../assets/MapData/pages/headsetData/Data'
import line from "../../assets/images/Rectangle.svg"
import comma from "../../assets/images/comma.svg"

const HeadSetPage = () => {
  return (
      <div className=' pt-5 sm:pt-10   '>
          <img src={img1} alt="Headphones on a yellow background" className='h-full w-full' />

      <div className=' relative pt-5 px-10 md:px-56'>
        {
          HeadsetData.map(data => 
          <div key={data.id}>
            <p className='text-gray-400'>{data.tag}</p>
            <h1 className=' text-xl font-semibold py-2'>{data.heading1} </h1>
            <p className=' py-5'>{data.intro} </p>
            <h2 className=' font-semibold text-lg'>
              {data.heading2}
            </h2>
              <p className=' py-5'>{data.lead} </p>
              <nav>
                <ul className=' flex flex-col gap-y-3 list-disc pl-5'>
                  {data.points.map(point => <li key={point}>{point}</li>)}
                </ul>
              </nav>

              <div className=' md:py-8 flex gap-5 md:gap-14 items-center'>
                <div className=' flex items-start md:gap-10 '>
                  <img src={line} alt="" className=' w-full h-[50vh] md:h-full' />
                  <img src={comma} alt="" />
                </div>
                <p className=' font-semibold text-lg'>
                  {data.quote}
                </p>
              </div>
              
              <div className=' py-5'>
                {data.setup}
              </div>
              <div>
                {data.safety}
              </div>
          </div>
          )
       }

      </div>
      
    </div>
  )
}

export default HeadSetPage
