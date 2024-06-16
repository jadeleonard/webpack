import React from 'react'
import {SignUp} from '@clerk/nextjs'
const SignUpProps = () => {
  return (
    <div className='flex item-center justify-center'>
      <SignUp afterSignOutUrl={'/'}/>
    </div>
  )
}

export default SignUpProps
