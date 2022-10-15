import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function Example(){
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({key, item}:any){
    console.log(item);
    
    return (
        <div>
            <Paper style={{backgroundColor:"red", width:"50%"}}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <Button className="CheckButton"> 
                    Check it out!
                </Button>
            </Paper>
            <Paper>
             
            </Paper>
        </div>
    )
}

export { Example}