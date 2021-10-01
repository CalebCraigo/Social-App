import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from "@mui/material";

function Home() {

    render()
        return(
            <React.Fragment>
                <Header />
                <Box sx={12}>
                    <Grid container>
                        <Grid xs={3}>
                            <Paper elevation={2}>
                                <LeftDrawer />
                            </Paper>
                        </Grid>
                        <Grid xs={6}>
                            <Feed />
                        </Grid>
                        <Grid xs={3}>
                            <RightDrawer />
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        )
}

export default Home;