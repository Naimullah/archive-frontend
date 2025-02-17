import React from 'react'

const UserImage = () => {
  return (
    <span className='userImage flex w-[40px] h-[40px] overflow-hidden cursor-pointer'>
        {/* <div className="rounded-circle"> */}
        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" className='w-[100%] h-[100%] object-cover' alt="" />

        {/* </div> */}
    </span>
  )
}

export default UserImage
