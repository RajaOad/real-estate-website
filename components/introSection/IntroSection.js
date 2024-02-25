import React from 'react'

const IntroSection = () => {
  return (
    <section className="py-12 md:py-24 relative bg-cover bg-center" style={{backgroundImage: "url(images/h4.jpg)"}}>
    <div className="overlay inset-0 bg-intro bg-opacity-90 absolute top-0 left-0 w-full h-full"></div>
    <div className="container-xl mx-8 md:mx-24">
      <div className="grid grid-cols-1">
        <div className="col-lg-10 col-xl-8">
          <div className="flex flex-col md:flex-row md:justify-evenly">
            <div className="flex items-center z-10 mb-8 md:mb-0">
              <div className='text-center md:text-start'>
                <h1 className="mb-0 text-white text-3xl md:text-5xl">Find Best Place For Living</h1>
                <p className="text-white mt-2">Find Best Place For Living</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-10">
              <p className="mb-0"><a href="#" className="py-3 px-4 md:py-4 md:px-6 text-white uppercase text-xs font-semibold bg-black">Get in touch</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IntroSection