
import img2 from "../../assets/webp.png";
import img3 from "../../assets/webp_2.png";
import img4 from "../../assets/webp_3.png";
import img5 from "../../assets/webp_4.png";
import img6 from "../../assets/webp_5.png";
import img7 from "../../assets/webp_6.png";
import img8 from "../../assets/webp_7.png";
import img9 from "../../assets/webp_8.png";

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const Integrations = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
             <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img2} alt='CSS' />
                            <p className='my-4'>Productivity</p>
                        </div>
                    </div>
                    
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img4} alt='Tailwind' />
                            <p className='my-4'>File Sharing</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img5} alt='Js' />
                            <p className='my-4'>Time Tracking</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img6} alt='React' />
                            <p className='my-4'>Voice Assistant</p>
                        </div>
                    </div>


                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img7} alt='Node' />
                            <p className='my-4'>Calender</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto rounded-full' src={img8} alt='MongoDB' />
                            <p className='my-4'>Communication</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img9} alt='Firebase' />
                            <p className='my-4'>Automation</p>
                        </div>
                    </div>    
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 h-32 mx-auto' src={img3} alt='Bootstrap' />
                            <p className='my-4'>File Managing</p>
                        </div>
                    </div>
                   
                    
                </div>
        </div>
    );
};

export default Integrations;