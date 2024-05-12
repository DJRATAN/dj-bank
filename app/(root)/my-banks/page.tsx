import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const MyBanks = () => {
  return (
    <div>MyBanks

      <Link href={"/sign-in"}><Button variant={"secondary"} size={"lg"}>Sign In</Button></Link>
      <Link href={"/sign-up"}><Button variant={"secondary"} size={"lg"}>Sign Up</Button></Link>
    </div>

  )
}

export default MyBanks