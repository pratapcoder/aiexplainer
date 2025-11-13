import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

export default function Header() {
  return (
    <div className='flex justify-between bg-green-500 p-4'>

        
            <h1 className='text-3xl'>AI Explainer</h1>

        
        <div className='flex gap-4 items-center'>
            <ModeToggle />
            <Button variant={"secondary"}>Login</Button>
           
        </div>
      

    </div>
  )
}
