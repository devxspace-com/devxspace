import React from 'react'
import ProfileFeatures from '../../features/profile/ProfileFeatures'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Profile = () => {
  return (
    <div>
    <Navbar />
        <ProfileFeatures/>
      <Footer/>
    </div>
  )
}

export default Profile