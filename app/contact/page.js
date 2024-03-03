import HeroSection from '@/components/heroSection/HeroSection';
import React from 'react'

import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const page = () => {
    const contactMethods = [
        {
          icon: <MdEmail />,
          title: 'Email',
          description: 'Our friendly team is here to help.',
          value: 'binshabeeran786@gmail.com',
        },
        {
          icon: <MdLocationOn />,
          title: 'Office',
          description: 'Come say hello at our office.',
          value: 'Karachi',
        },
        {
          icon: <MdPhone />,
          title: 'Phone',
          description: 'Mon-Fri from 8am to 5pm.',
          value: '+923012612635',
        },
      ];
  return (
    <>
        <HeroSection backgroundImage={"images/h1.jpg"} title={"Contact Us"} />

    <section className="bg-white dark:bg-gray-900 my-16">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="text-xs mb-4 md:text-sm font-bold text-primary uppercase leading-10">Contact us</p> 

          <h1 className="text-3xl md:text-5xl text-gray-500 font-semibold mb-20">Get in touch</h1>

        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            {/* Mapping over fake data to render contact methods */}
            {contactMethods.map((method, index) => (
              <div key={index}>
                <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-gray-800">
                  {method.icon}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{method.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                <p className="mt-2 text-sm text-primary dark:text-blue-400">{method.value}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7556155632!2d66.49460115660841!3d25.19297760686533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709425390660!5m2!1sen!2s"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default page