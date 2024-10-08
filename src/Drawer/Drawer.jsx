'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MailIcon from '@mui/icons-material/Mail';


import Image from 'next/image';
import {  DashboardCustomize, Home, Shop } from '@mui/icons-material';
import Link from 'next/link';
import { Contact , InboxIcon } from 'lucide-react';
 


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
 

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const DrawerList = (
    <Box className='mt-6 ml-[10px] gap-3 flex flex-col' sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className='flex gap-2 ml-[20px] '>
        <Home className='' />
        <Link  href='/' className=' hover:text-yellow-500  ' > HOME</Link>
      </List>

       <List className='flex gap-2 ml-[20px]  '>
        <Shop />
        <Link  href='/Shop' className=' hover:text-yellow-500  '> SHOP</Link>

      </List>
      <List className='flex gap-2 ml-[20px]  '>
        <MailIcon /> 
        <Link href='/Getnutritions' className=' hover:text-yellow-500  '>GET NUTRITIONIST</Link>

      </List>

      <List className='flex gap-2 ml-[20px]  '>
        <DashboardCustomize />
        <Link href='/About' className=' hover:text-yellow-500  '> ABOUT US</Link>

      </List>

     


      <List className='flex gap-2 ml-[20px]  '>
        <InboxIcon /> 
        <Link href='/' className=' hover:text-yellow-500  '>BLOG</Link>

      </List>


      <List className='flex gap-2 ml-[20px]  '>
        <Contact /> 
        <Link href='/Contact' className=' hover:text-yellow-500  ' >CONTACT US</Link>


    
      </List>

     
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><Image alt='photo' height={30} width={30} src='/menu.png' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
