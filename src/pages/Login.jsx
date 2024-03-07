import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <Container component={"main"}>
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2
                }}
            >
                {
                    isLogin ? (
                        <>
                            <Typography variant='h5'>Login</Typography>
                            <form>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    margin='normal'
                                    variant='outlined'
                                />
                                <TextField
                                    id="password"
                                    label="password"
                                    type='password'
                                    required
                                    fullWidth
                                    margin='normal'
                                    variant='outlined'
                                />
                                <Button variant="contained" color="primary" type='submit'>
                                    Login
                                </Button>
                                <Typography variant="span" color="initial">Or</Typography>
                                <Button variant='contained' color='secondary'>
                                    Signup
                                </Button>
                            </form>
                        </>
                    ) : (
                        <Typography>register</Typography>
                    )
                }
            </Paper>
        </Container>
    )
}

export default Login
