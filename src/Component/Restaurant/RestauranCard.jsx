import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function RestauranCard() {
  return (
    <Card className=' w-[18rem]'>
    <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
      <CardMedia
        component="img"
        className='w-full h-[10rem] rounded-t-md object-cover'
        image="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?cs=srgb&dl=chairs-chandelier-design-1579739.jpg&fm=jpg"
        alt="restaurant"
      />
        <Chip
            size="small"
            className="absolute top-2 left-2"
            color={true ? "success" : "error"}
            label={true ? "open" : "closed"}
        />
        <div className="p-4 textPart lg:flex w-full justify-between">
            <div className="space-y-1">
                <p className="font-semibold text-lg">Srilankan Fast Food</p>
                <p className="text-gray-500 text-sm">
                    Craving it all? Dive into our global fla...
                </p>
            </div>
        </div>
        <div>
        <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        </div>    
      </div>
    </Card>
    
    

  )
}

export default RestauranCard