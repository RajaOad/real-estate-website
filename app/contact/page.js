import HeroSection from '@/components/heroSection/HeroSection';
import React from 'react'

import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const page = () => {
    const contactMethods = [
        {
          icon: <MdEmail />,
          title: 'Email',
          description: 'Our friendly team is here to help.',
          value: 'hello@merakiui.com',
        },
        {
          icon: <MdLocationOn />,
          title: 'Office',
          description: 'Come say hello at our office HQ.',
          value: '100 Smith Street Collingwood VIC 3066 AU',
        },
        {
          icon: <MdPhone />,
          title: 'Phone',
          description: 'Mon-Fri from 8am to 5pm.',
          value: '+1 (555) 000-0000',
        },
      ];
  return (
    <>
        <HeroSection backgroundImage={"images/h1.jpg"} title={"Contact Us"} />

    <section className="bg-white dark:bg-gray-900 my-16">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-bold text-primary dark:text-blue-400">Contact us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
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
              
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default page