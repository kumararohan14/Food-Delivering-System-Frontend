import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import "./NavBar.css"
function NavBar() {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-gray-300 text-2xl'>
                    Zosh food
                </li>
            </div>
            <div className="flex item-center space-x-2 lg:space-x-10">
                <div className="">
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }}>

                        </SearchIcon>
                    </IconButton>
                </div>
                <div className=''> 
                    <Avatar sx={{bgcolor:"white",color:'pink'}}>C</Avatar>
                </div>
                <div className=''> 
                    <IconButton>
                        <Badge  badgeContent={4} color="secondary">
                            <AddShoppingCartIcon sx={{ fontSize: '1.rem', cursor: 'pointer' }} />
                        </Badge>
                        
                    </IconButton>         
                </div>
                
            </div>  
    </div>
  )
}

export default NavBar