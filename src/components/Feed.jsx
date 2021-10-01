import React from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const feedData = [
    {
        name: "John Smith",
        timePosted: 500,
        text: "This is a test Post"
    },
    {
        name: "John Smith",
        timePosted: 500,
        text: "This is a test Post"
    },
    {
        name: "John Smith",
        timePosted: 500,
        text: "This is a test Post"
    },
    {
        name: "John Smith",
        timePosted: 500,
        text: "This is a test Post"
    },
    {
        name: "John Smith",
        timePosted: 500,
        text: "This is a test Post"
    }
]

function Feed() {

    const post = feedData.map((data)=> 
        <React.Fragment>
            <p>{data.name}</p>
            <p>{data.text}</p>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="left"
                spacing={1}
            >
                {post}
            </Stack>
        </React.Fragment>
    )
}

export default Feed;