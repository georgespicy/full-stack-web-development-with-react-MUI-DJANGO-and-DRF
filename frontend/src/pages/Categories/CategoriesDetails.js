import React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Field, Form } from "formik";
import { Grid, TextField, Typography, Paper, Button, Box } from '@mui/material';
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CategoriesDetails() {

    const URL = `http://localhost:8000/api/categories/`;
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tasks = await axios.post(URL, {
                name: name,
                color: color
            });
            navigate("/categories")
            console.log(tasks.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <Paper sx={{
            borderRadius: "2px",
            boxShadow: (theme) => theme.shadows[5],
            padding: (theme) => theme.spacing(2, 4, 3)
        }}>
            <Typography variant='h6' mb={4}>
                Create Category
            </Typography>
            <Formik>
                {(formik) => {
                    return (
                        <form onClick={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='name'
                                        label='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='color'
                                        label='color'
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Box sx={{
                                        display: "flex",
                                        margin: (theme) => theme.spacing(1),
                                        marginTop: (theme) => theme.spacing(3)
                                    }}>
                                        <Button
                                            component={Link}
                                            to="/categories"
                                            size='medium'
                                            variant='outlined'
                                            sx={{
                                                mr: 2,
                                            }}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            type='submit'
                                            size='medium'
                                            variant='contained'
                                            color='primary'
                                            // component={Link}
                                            // to="/categories"
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    )
                }}
            </Formik>
        </Paper>
    )
}

export default CategoriesDetails