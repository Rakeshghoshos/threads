import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

function OnBoarding() {
  return (
    <>
      <div>
      <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </>
  )
}

export default OnBoarding