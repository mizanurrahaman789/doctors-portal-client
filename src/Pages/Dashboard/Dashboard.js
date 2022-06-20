import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init'

const Dashboard = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmin(user);
      return (
            <div class="drawer drawer-mobile">
                  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                  <div class="drawer-content ">
                        <h1 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h1>
                        <Outlet></Outlet>


                  </div>
                  <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                              {/* <!-- Sidebar content here --> */}
                              <li><Link to="/dashboard">MyAppointment</Link></li>
                              <li><Link to="/dashboard/review">MyReview</Link></li>
                              <li><Link to="/dashboard/history">MyHistory</Link></li>
                              {admin && <li li > <Link to="/dashboard/users">All Users</Link></li>}
                        </ul>

                  </div>
            </div >
      );
};

export default Dashboard;