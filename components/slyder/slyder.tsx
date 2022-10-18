import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image';

function getItems(data){
    if(data){
        return data
    }else{
        return []
    }
}

function Slyder({data}){
    
    const items = getItems(data)
 
    return (
        <Carousel height="500px" indicatorIconButtonProps={{style:{color:"white"}}} activeIndicatorIconButtonProps={{style:{color:"red"}}}>
            {
                items.map( (item) => <Item key={item.objectID} item={item} /> )
            }
        </Carousel>
    )
}

function Item({item}:any){
    
    return (
        <div style={{display:"flex"}}>
            <Paper style={{backgroundColor:"red", width:"50%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", padding:"90px", height:"532px"}}>
                <h2>{item.Name}</h2>
                <p>{item.Description}</p>

                <Button className="CheckButton"> 
                    Check it out!
                </Button>
            </Paper>
            <Paper style={{ width:"50%"}}>
                <Image layout="responsive" height="100px" width="100px" src={item.Images[0].url} alt="prueba"/>
            </Paper>
        </div>
    )
}

export { Slyder}