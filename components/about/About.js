import React from 'react'

const About = () => {
  return (
    <section className="mx-24 py-24">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          <div className="md:col-span-2 relative">
            <div className="img w-full h-full bg-cover bg-center" style={{backgroundImage: "url(images/h2.jpg)"}}></div>
          </div>
          <div className="md:col-span-4 ml-8 heading-section flex flex-col justify-center">
            <span className="subheading uppercase font-bold mb-4 text-sm text-primary">About Us</span>
            <h2 className="mb-4 text-5xl font-semibold text-secondary leading-[4rem]"><span className='bg-primary text-white rounded-full py-2 px-6'>BAITUL SHABEERAN</span> A Real Estate Company</h2>
            <p className="mb-6 text-secondary leading-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 py-8 ">
                <div className='flex flex-wrap justify-between'>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-4xl font-semibold"><span id="count1" className="counter" data-count="50">50</span></span>
                  <p className='uppercase text-sm text-primary font-semibold pt-3'>Years of Experienced</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-4xl font-semibold"><span id="count2" className="counter" data-count="210">210</span>K+</span>
                  <p className='uppercase text-sm text-primary font-semibold pt-3'>Total Properties</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-4xl font-semibold"><span id="count2" className="counter" data-count="450">450</span></span>
                  <p className='uppercase text-sm text-primary font-semibold pt-3'>Qualified Realtors</p>
                </div>
              </div>
              <div className="counter-wrap">
                <div className="text">
                  <span className="d-block number gradient-text text-4xl font-semibold"><span id="count2" className="counter" data-count="100">100</span></span>
                  <p className='uppercase text-sm text-primary font-semibold pt-3'>Total Branches</p>
                </div>
                </div>
              </div>
            </div>
            <div className="img img-2 mt-8 w-full h-96 bg-cover" style={{backgroundImage: "url(images/h2.jpg)"}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About