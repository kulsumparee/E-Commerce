import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Rate } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import img1 from "../../../assets/profile/user-img.svg"
import img2 from "../../../assets/profile/Rectangle.svg"

import { Input } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: ' black',
        }}
    />
);
function valuetext(value) {
    return `${value}°C`;
}


function AccordionUsage() {
    return (
        <div className=' sm:w-full lg:w-[62%]'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}

                >
                    <h1 className=' text-xl font-bold'>More Information</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <h1 className=' font-bold text-lg my-2'>Powerful performance</h1>
                        <ul className='  gap-2 '>
                            <li className='mt-1'>English-language MacBook Pro</li>
                            <li className='mt-1'>10-core Apple M1 Pro chip for a giant leap in CPU, GPU, and machine learning performance</li>
                            <li className='mt-1'>16GB of RAM so everything you do is fast and fluid</li>
                            <li className='mt-1'>16-core Neural Engine for advanced machine learning</li>
                            <li className='mt-1'>16-core GPU</li>
                            <li className='mt-1'>Ultrafast 1TB solid state drive (SSD) is blazing fast, so you can take all your photos and videos with you no matter.</li>
                        </ul>
                    </div>

                    <div className=' mt-5 mb-7'>
                        <h1 className=' font-bold text-lg my-3'>Display and audio</h1>
                        <ul className='  gap-2 '>
                            <li className=' mt-1'>16.2-inch liquid retina XDR display delivers a responsive and natural viewing experience</li>
                            <li className=' mt-1'>3456 x 2234 native resolution with support for millions of colours</li>
                            <li className=' mt-1'>ProMotion technology for adaptive refresh rates up to 120Hz</li>
                            <li className=' mt-1'>Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming</li>
                            <li className=' mt-1'>High fidelity six speaker sound system with forece-cancelling woofers</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} >
                    <h1 className='text-xl font-bold'> Details & Specs</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div className=' '>
                        <div className='  grid grid-cols-2  py-3 bg-slate-200 '>
                            <h1 className=' font-bold ml-2'>Brand</h1>
                            <h1>Apple</h1>
                        </div>
                        <div className=' grid grid-cols-2 py-3 '>
                            <h1 className=' font-bold ml-2'>Model Name</h1>
                            <h1>MacBook Pro</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 bg-slate-200 '>
                            <h1 className=' font-bold ml-2'>Screen Size</h1>
                            <h1>16.2 Inches</h1>
                        </div>

                        <div className=' grid grid-cols-2  py-3 '>
                            <h1 className=' font-bold ml-2'>Color Space</h1>
                            <h1>Space Gray</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 bg-slate-200 '>
                            <h1 className=' font-bold ml-2'>Hard Disk Size</h1>
                            <h1>1 TB</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 '>
                            <h1 className=' font-bold ml-2'>CPU Model</h1>
                            <h1>Apple M1</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 bg-slate-200 '>
                            <h1 className=' font-bold ml-2'>Ram Memory Installed Size</h1>
                            <h1>16 GB</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 '>
                            <h1 className=' font-bold ml-2'>Graphics Card Description</h1>
                            <h1>Integrated</h1>
                        </div>
                        <div className=' grid grid-cols-2  py-3 bg-slate-200 '>
                            <h1 className=' font-bold ml-2'>Graphics Coprocessor</h1>
                            <h1>M1 Pro</h1>
                        </div>

                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion cla>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}

                >
                    <h1 className='text-xl font-bold '> What's Included</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div className=''>
                        <ul>
                            <li className=' mt-2'>16-inch MacBook Pro</li>
                            <li className=' mt-2'>140W USB‑C Power Adapter</li>
                            <li className=' mt-2'>USB‑C to MagSafe 3 Cable (2 m)</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} >

                    <h1 className='text-xl font-bold'> Vendor</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 '>
                        <div className=' border-2 border-zinc-100 rounded-md p-3'>
                            <div className="flex">
                                <h1 className="text-gray-500">APPLE</h1>
                                <Divider type="vertical" />
                                <span><Rate /></span> <p className="ml-2">965 reviews</p>
                            </div>
                            <div className=''>
                                <h1 className=' my-2 mt-4'>Fast Delivery: Ships in 1 day</h1>
                                <h1>Free Cargo</h1>
                            </div>
                            <div className=' flex gap-12 mt-5'>
                                <div className=' flex gap-2'><h1 className=' text-lg font-bold'>$32.50</h1> <h1 className=' line-through'>$45</h1></div>
                                <button className=' py-2 px-7 bg-[orange] rounded-md'> Go Product</button>
                            </div>
                        </div>

                        <div className=' border-2 border-zinc-100 rounded-md p-3'>
                            <div className="flex">
                                <h1 className="text-gray-500">APPLE</h1>
                                <Divider type="vertical" />
                                <span><Rate /></span> <p className="ml-2">965 reviews</p>
                            </div>
                            <div className=''>
                                <h1 className=' my-2 mt-4'>Fast Delivery: Ships in 1 day</h1>
                                <h1>Free Cargo</h1>
                            </div>
                            <div className=' flex gap-12 mt-5'>
                                <div className=' flex gap-2'><h1 className=' text-lg font-bold'>$32.50</h1> <h1 className=' line-through'>$45</h1></div>
                                <button className=' py-2 px-7 border-2 border-[orange] rounded-md'> Go Product</button>
                            </div>
                        </div>

                        <div className=' border-2 border-zinc-100 rounded-md p-3'>
                            <div className="flex">
                                <h1 className="text-gray-500">APPLE</h1>
                                <Divider type="vertical" />
                                <span><Rate /></span> <p className="ml-2">965 reviews</p>
                            </div>
                            <div className=''>
                                <h1 className=' my-2 mt-4'>Fast Delivery: Ships in 1 day</h1>
                                <h1>Free Cargo</h1>
                            </div>
                            <div className=' flex gap-12 mt-5'>
                                <div className=' flex gap-2'><h1 className=' text-lg font-bold'>$32.50</h1> <h1 className=' line-through'>$45</h1></div>
                                <button className=' py-2 px-7 border-2 border-[orange] rounded-md'> Go Product</button>
                            </div>
                        </div>

                        <div className=' border-2 border-zinc-100 rounded-md p-3'>
                            <div className="flex">
                                <h1 className="text-gray-500">APPLE</h1>
                                <Divider type="vertical" />
                                <span><Rate /></span> <p className="ml-2">965 reviews</p>
                            </div>
                            <div className=''>
                                <h1 className=' my-2 mt-4'>Fast Delivery: Ships in 1 day</h1>
                                <h1>Free Cargo</h1>
                            </div>
                            <div className=' flex gap-12 mt-5'>
                                <div className=' flex gap-2'><h1 className=' text-lg font-bold'>$32.50</h1> <h1 className=' line-through'>$45</h1></div>
                                <button className=' py-2 px-7 border-2 border-[orange] rounded-md'> Go Product</button>
                            </div>
                        </div>

                    </div>
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} >

                    <h1 className='text-xl font-bold'> Shipping and Returns</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor aliquam tortor at suscipit. Etiam accumsan, est id vehicula cursus, eros ligula suscipit massa, sed auctor felis mi eu massa. Sed vulputate nisi nibh, vel maximus velit auctor nec. Integer consectetur elementum turpis, nec fermentum ipsum tempor quis. Praesent a quam congue, egestas erat sit amet, finibus justo. Quisque viverra neque vehicula eros gravida ultricies. Ut lacinia enim nec consequat tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ultricies ornare feugiat. Donec vitae rhoncus sapien, ac aliquet nunc.</p>
                    </div>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} >

                    <h1 className='text-xl font-bold'> Questions and Answers</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div>
                            <Search placeholder="Have a question? Search for answer" onSearch={onSearch} enterButton />

                        </div>

                        <div className=' mt-7'>
                            <h1 className=' font-bold mb-1'> Q: Can dvds be played on apple computers?</h1>
                            <h1>Asked by Ali Tufan - May 14, 2022 on zenmart.com</h1>

                            <div className='  mt-5 m-8 py-4 px-3 rounded-md bg-gray-100'>
                                <h1 className=' font-bold mb-1'>A: If you buy a separate CD/DVD drive.</h1>
                                <h1> Answered by TFN-Store - May 24, 2022 </h1>
                            </div>
                        </div>

                        <div className=' mt-7'>
                            <h1 className=' font-bold mb-1'> Q: Can dvds be played on apple computers?</h1>
                            <h1>Asked by Ali Tufan - May 14, 2022 on zenmart.com</h1>

                            <div className=' mt-5 m-8 py-4 px-3 rounded-md bg-gray-100'>
                                <h1 className=' font-bold mb-1'>A: If you buy a separate CD/DVD drive.</h1>
                                <h1> Answered by TFN-Store - May 24, 2022 </h1>
                            </div>
                        </div>
                        <button className=' border-2 border-[#ffa600c9] hover:bg-[#ffa600c9] py-2 px-5 rounded-md ml-36'>
                            Explore All Questions</button>
                    </div>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} >

                    <h1 className='text-xl font-bold'> Customer Reviews</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className=' flex gap-5'>
                            <h1 className=' text-5xl font-semibold'>4.9</h1>
                            <div>
                                <Rate />
                                <h1>2 reviews</h1>
                            </div>


                        </div>
                        <div>


                            <div className=' flex gap-4 text-center items-center mt-5'>
                                <h1 className=' font-semibold'>5 stars</h1>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="warning"
                                    />
                                </Box>
                                <h1 className=' font-semibold'>89%</h1>
                            </div>

                            <div className=' flex gap-4 text-center  mt-2'>
                                <h1 className=' font-semibold'>4 stars</h1>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="warning"
                                    />
                                </Box>
                                <h1 className=' font-semibold'>4%</h1>
                            </div>

                            <div className=' flex gap-4 text-center items-center mt-2'>
                                <h1 className=' font-semibold'>3 stars</h1>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="warning"
                                    />
                                </Box>
                                <h1 className=' font-semibold'>3%</h1>
                            </div>

                            <div className=' flex gap-4 text-center items-center mt-2'>
                                <h1 className=' font-semibold'>2 stars</h1>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="warning"
                                    />
                                </Box>
                                <h1 className=' font-semibold'>2%</h1>
                            </div>

                            <div className=' flex gap-4 text-center items-center mt-2'>
                                <h1 className=' font-semibold'>7 stars</h1>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="warning"
                                    />
                                </Box>
                                <h1 className=' font-semibold'>90%</h1>
                            </div>
                            <div>
                                <button className=' border-2 border-[#ffa600c9] hover:bg-[#ffa600c9] py-2 px-5 rounded-md mt-3'>
                                    Write your review</button>
                            </div>

                            <div className=' mt-7'>
                                <h1 className=' text-xl mb-5'>10 Reviews For This Product</h1>

                                <div className=' flex gap-5'>
                                    <img src={img1} className=' cursor-pointer' alt="user-img" />
                                    <div>
                                        <div className=' flex gap-2'>
                                            <Rate />
                                            <h1 className=' font-semibold text-lg '>A high performance Mac with a long lasting battery</h1>
                                        </div>
                                        <h1 className=' mt-2 text-lg'>Reviewed by Ali Tufan - April 27, 2022</h1>
                                    </div>
                                </div>

                                <div>
                                    <p className=' my-10'>This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support.</p>
                                    <p>This Amazon listing has two different processors, the M1 Pro (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one the Pro, the other the Max. I got the base Pro, but much of what I'll say applies to both, and I'll have some comments specifically about the Max too. (MBP below = MacBook Pro.)</p>
                                </div>
                                <div className=' flex flex-wrap gap-5 mt-7 cursor-pointer'>
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                </div>

                                <div className=' flex gap-7 mt-10'>
                                    <button className=' border-2 py-2 px-4 rounded-md'>Helpful</button>
                                    <p className=' text-slate-400 font-bold'>Report abuse</p>
                                </div>
                            </div>

                            <div className=' mt-7'>
                                <h1 className=' text-xl mb-5'>10 Reviews For This Product</h1>

                                <div className=' flex gap-5'>
                                    <img src={img1} className=' cursor-pointer' alt="user-img" />
                                    <div>
                                        <div className=' flex gap-2'>
                                            <Rate />
                                            <h1 className=' font-semibold text-lg '>A high performance Mac with a long lasting battery</h1>
                                        </div>
                                        <h1 className=' mt-2 text-lg'>Reviewed by Ali Tufan - April 27, 2022</h1>
                                    </div>
                                </div>

                                <div>
                                    <p className=' my-10'>This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support.</p>
                                    <p>This Amazon listing has two different processors, the M1 Pro (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one the Pro, the other the Max. I got the base Pro, but much of what I'll say applies to both, and I'll have some comments specifically about the Max too. (MBP below = MacBook Pro.)</p>
                                </div>
                                <div className=' flex flex-wrap gap-5 mt-7 cursor-pointer'>
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                    <img src={img2} alt="img1" />
                                </div>

                                <div className=' flex gap-7 mt-10'>
                                    <button className=' border-2 py-2 px-4 rounded-md'>Helpful</button>
                                    <p className=' text-slate-400 font-bold'>Report abuse</p>
                                </div>

                                <div className=' flex justify-center '>
                                    <button className='  font-semibold border-2 border-[#ffa600c9] hover:bg-[#ffa600c9] py-2 px-5 rounded-md mt-3'>
                                        See All review</button>
                                </div>
                            </div>
                            <Divider />

                            <div>
                                <div>
                                    <h1 className=' font-semibold text-lg'>Add a review</h1>
                                    <p className=' my-3'>Your email address will not be published. Required fields are marked *</p>
                                    <p className=' mb-2'>Your rating of this product</p>
                                    <Rate />

                                    <p className=' text-lg my-3'>Your review</p>
                                    <form action="">
                                        <textarea className=' p-3 w-full h-80 border-2 rounded-md' name="text" id="" placeholder=' write yout thex here...' />

                                        <div className=' grid grid-cols-2 gap-10'>
                                            <div className=' my-4'>
                                                <label className=' text-lg font-semibold ' htmlFor="name">Name</label> <br />
                                                <input className=' border-2 py-1 w-full mt-2 p-2 rounded-md' type="text" name="" id="" placeholder='Your Name' />
                                            </div>

                                            <div className=' my-4'>
                                                <label className=' text-lg font-semibold ' htmlFor="name">Email</label> <br />
                                                <input className=' border-2 py-1 w-full mt-2 p-2 rounded-md' type="text" name="" id="" placeholder='Your Email' />
                                            </div>
                                        </div>

                                        <div className=' flex gap-2 my-4'>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>

                                        <div className='   '>
                                            <button className='  font-semibold border-2 border-[#ffa600c9] bg-[#ffa600c9] py-2 px-5 rounded-md mt-3'>
                                                Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionUsage;