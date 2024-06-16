import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SignInProps = () => {
  return (
    <div>
      <SignIn afterSignOutUrl={'/'} />
    </div>
  )
}

export default SignInProps
