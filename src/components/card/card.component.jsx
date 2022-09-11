import React from 'react'
import { useState, useEffect } from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import './card.styles.css'
import { useNavigate } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Card = ({category,pageNo}) => { 
  const [img, setImg] = useState("");
  const Navigate=useNavigate()
  const [isloading,setIsLoading]=useState(true)

  const fetchRequest = async () => {
  let data=category.concat(" ","food recipe")
    return fetch('https://api.unsplash.com/search/photos?query='+
    data+'&client_id=GkCzMuDe56TtccxaqaiyI2QHjErpCkuUPrpZ6q9nbiI')
      .then((response) => response.json())
      .then((databack) => {
        let allImages = databack.results[Math.floor(Math.random()*10)];
        setImg(allImages.urls.regular);
        setIsLoading(false)
      })
      .catch( e => {
         setImg("https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg")
         setIsLoading(false)
      })
  };
  
  useEffect(() => {
   return ()=>{
    setTimeout(()=>{
      fetchRequest();
    },2000)
   }
  }, [pageNo]);

  const onNavigateHandler=()=>{
    Navigate('/receipes',{
      state:{
        category
      }
    })
  }

  return (
    <>
   { isloading?
    <Stack className='categorycard' spacing={3}>
      <Skeleton variant="rectangular" width={210} height={140} />
      <Skeleton variant="rounded" width={210} height={50} />
    </Stack>
    :
    <div className='categorycard' onClick={onNavigateHandler}>
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
   }
</>
  )
}

export default Card