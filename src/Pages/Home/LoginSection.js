import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const LoginSection = () => {
      return (
            <section style={{
                  background: `url(${appointment})`,
                  backgroundSize: 'cover'
            }}
                  className='flex justify-center items-center mt-10'>

                  <div className='mx-auto mb-10'>
                        <h3 className='text-xl text-primary my-2 text-center'>Contact</h3>
                        <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
                        <div className="form-control text-center">

                              <label class="input-group ">

                                    <input type="text" placeholder="info@site.com" className="input input-bordered my-2" />
                              </label>
                              <label className="input-group ">
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                              </label>
                              <label className="input-group ">
                                    <input type="text" placeholder="text area" className="input input-bordered my-2" />

                              </label>
                        </div>

                        <PrimaryButton></PrimaryButton>
                  </div>

            </section>
      );
};

export default LoginSection;