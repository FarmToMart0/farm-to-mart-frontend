import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList(props) {
  const itemData = props.itemData;
//   const itemData = [
//     'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
// 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
// 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//   ]

  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={5} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



