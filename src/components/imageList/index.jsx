import  React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = ['https://image.shutterstock.com/image-photo/grain-auger-combine-pouring-soy-260nw-1842422164.jpg',
  'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=600']


export default function ImageCollection(itemData) {

  return (
    <ImageList
      sx={{
        width: 500,
        
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item,index) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem  key={index} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
             
              loading="lazy"
            />
            <ImageListItemBar
              
              position="top"
              actionIcon={
                <IconButton
                onClick={()=>{console.log('Sumeela')}}
                  sx={{ color: 'white' }}
                  
                >
                  <DeleteIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
