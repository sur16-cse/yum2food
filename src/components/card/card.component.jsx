import React from 'react'
import { useState, useEffect } from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea,ImageList} from '@mui/material';
import './card.styles.css'

const Card = ({category}) => { 
  const [img, setImg] = useState("https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg");
  
  const fetchRequest = async () => {
  let data=category.concat(" ","food recipe")
    return fetch('https://api.unsplash.com/search/photos?query='+
    data+'&client_id=GkCzMuDe56TtccxaqaiyI2QHjErpCkuUPrpZ6q9nbiI')
      .then((response) => response.json())
      .then((databack) => {
        let allImages = databack.results[Math.floor(Math.random()*10)];
        setImg(allImages.urls.regular);
      })
      .catch( e => {
         setImg("https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg")
      })
  };

  useEffect(() => {
   return ()=>fetchRequest();
  }, [category]);

  return (
    <div className='categorycard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </div>
  )
}

export default Card