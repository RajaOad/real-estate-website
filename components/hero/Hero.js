"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Hero = () => {

    const { ref, inView } = useInView({triggerOnce: true });

    const variants = {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }
    };
  
    const titleVariants = {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
    };

    const slides = [
        {
            backgroundImage: "url(images/h1.jpg)",
            title: "Discover Your Dream Home",
            description: "Explore our exquisite collection of properties and find the perfect place to call home. Whether you seek a cozy cottage or a luxurious estate, we have something for every discerning buyer."
        },
        {
            backgroundImage: "url(images/h2.jpg)",
            title: "Elevate Your Lifestyle",
            description: "Discover how a modern home can enhance your quality of life. Let us guide you to the perfect residence where luxury, comfort, and convenience converge."
        },
        {
            backgroundImage: "url(images/h3.jpg)",
            title: "Experience Luxury Living",
            description: "Indulge in the epitome of luxury living with our exclusive properties. Immerse yourself in unparalleled comfort and elegance, where every detail is meticulously crafted for your pleasure."
        },
        {
            backgroundImage: "url(images/h4.jpg)",
            title: "Modern Living Redefined",
            description: "Reimagine modern living with our selection of cutting-edge properties. Experience the perfect fusion of design, technology, and comfort in homes that set new standards for contemporary living."
        }
        // Add more slides as needed
    ];


    return (
        <>

            <Splide
                options={{
                    perPage: 1,
                    autoplay: true,
                    interval: 5000, // Auto-advance interval in milliseconds (5 seconds)
                    pauseOnHover: true, // Disable pausing on hover
                    type: 'fade', // Fade effect
                    arrows: false, // Hide arrows
                    pagination: false, // Hide bullets
                    rewind: true,
                }}
            >
                {/* Map through slides and render each slide */}
                {slides.map((slide, index) => (
                    <SplideSlide key={index}>
                        <div className="absolute inset-0 bg-black opacity-40 h-[50rem]"></div>
                        <div className="img flex items-center bg-cover justify-center w-full h-[50rem] " style={{ backgroundImage: slide.backgroundImage }}>
                            <div className="container-xl relative z-10" ref={ref}>
                                <div className="flex justify-center">
                                    <div className="w-10/12 md:w-8/12 xl:w-6/12">
                                        <motion.div className="text-center text-white"
                                         variants={titleVariants}
                                         initial="hidden"
                                         animate={inView ? "visible" : "hidden"}
                                        >
                                            <h2 className="text-3xl md:text-7xl mb-16">{slide.title}</h2>
                                            <p className="mb-16 leading-8">{slide.description}</p>
                                        </motion.div>
                                        <motion.div className='flex justify-center gap-2 font-bold'
                                         variants={variants}
                                         initial="hidden"
                                         animate={inView ? "visible" : "hidden"}
                                        >
                                            <button className='py-3 px-6 text-sm md:text-base md:py-4 md:px-8 bg-[#f0f0f0] text-secondary'>Buy Properties</button>
                                            <button className='py-3 px-6 text-sm md:text-base md:py-4 md:px-8 bg-primary text-white'>Rent Properties</button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>




        </>

    )
}

export default Hero