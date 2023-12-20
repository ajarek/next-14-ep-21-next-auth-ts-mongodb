'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { ModeToggle } from './mode-toglgle'
import { signOut, useSession } from "next-auth/react";
import { Button } from './ui/button'
const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <NavigationMenu className='px-4 py-2 border-b-2'>
     
        <Link
          href='/'
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      
      
        <Link
          href='/dashboard'
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Dashboard
            </NavigationMenuLink>
        </Link>
        {!session ? (
          <>
        <Link
          href='/login'
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Login
            </NavigationMenuLink>
        </Link>
        <Link
          href='/register'
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Register
            </NavigationMenuLink>
        </Link>
        </>
        ):( <>
          {session.user?.email}
         
            <Button
              onClick={() => {
                signOut();
              }}
              className="p-2 px-5   rounded-full"
            >
              Logout
            </Button>
          
        </>)}
        <ModeToggle/>
     
    </NavigationMenu>
  )
}

export default Navbar
