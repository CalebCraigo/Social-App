import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Login, AccountBox }from '@mui/icons-material';
import { IconButton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <Box sx={12}>
            <Paper elevation={2}>
                <Grid container>
                    <Grid xs={4}>
                        <p>Title of App</p>
                    </Grid>
                    <Grid xs={4}>
                        <TextField id="standard-basic" label="Search" variant="standard" fullWidth/>
                    </Grid>
                    {isLoggedIn ?
                    <Grid xs={4} container alignItems="flex-end" justifyContent="flex-end">
                        <IconButton aria-label="login">
                            <AccountBox />
                        </IconButton>
                    </Grid>
                    :
                    <Grid xs={4} container alignItems="flex-end" justifyContent="flex-end">
                        <IconButton aria-label="logout">
                            <Login />
                        </IconButton>
                    </Grid>
                    }
                </Grid>
            </Paper>
        </Box>
    )
}

export default Header;