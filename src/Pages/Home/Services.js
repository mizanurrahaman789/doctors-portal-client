import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
      const services = [
            {
                  _id: 1,
                  name: 'Fluoride Treatment',
                  description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person’s teeth to improve health and reduce the risk of cavities.",
                  img: fluoride
            },
            {
                  _id: 2,
                  name: 'Cavity Filling',
                  description: "Symptoms typically happen when a cavity is more developed, so you may not notice a cavity until it’s too late. However, if you catch a cavity early, you may be able to reverse the tooth decay and it may not be necessary to fill the cavity.",
                  img: cavity
            },
            {
                  _id: 3,
                  name: 'Teeth Whitening',
                  description: "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
                  img: whitening
            }
      ]

      return (
            <div className='my-28 '>
                  <div className='text-center'>
                        <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                        <h2 className='text-4xl'>Services We Provide</h2>
                  </div>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                              services.map(service => <Service
                                    key={service._id}
                                    service={service}
                              ></Service>)
                        }
                  </div>
            </div>
      );
};

export default Services;