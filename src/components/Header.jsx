import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Header() {
    return(
        <Box sx={12}>
            <Paper elevation={2}>
                <Grid container>
                    <Grid xs={4}>
                        <p>Title of App</p>
                    </Grid>
                    <Grid xs={4}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid xs={4} container alignItems="flex-end" >
                        <IconButton aria-label="login">
                            <LoginIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}

export default Header;