import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
      return (
            <div style={{
                  background: `url(${bg})`,
                  backgroundSize: 'cover'
            }}
                  className="hero min-h-screen ">
                  <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div >
                              <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </div>
                        <div className='mr-20'>
                              <h1 className="text-5xl font-bold">Your New smail Starts Here</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              <PrimaryButton></PrimaryButton>
                        </div>
                  </div>
            </div >
      );
};

export default Banner;