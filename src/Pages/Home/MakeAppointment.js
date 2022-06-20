import React from 'react';
import doctors from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
      return (
            <section style={{
                  background: `url(${appointment})`
            }}
                  className='flex justify-center items-center mt-10'>
                  <div className='flex-1 hidden lg:block'>
                        <img className='mt-[-100px]' src={doctors} alt='' />
                  </div>
                  <div className='flex-1 px-5'>
                        <h3 className='text-xl text-primary my-2'>Appointment</h3>
                        <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2>
                        <p className='text-white pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <PrimaryButton></PrimaryButton>
                  </div>

            </section>
      );
};

export default MakeAppointment;