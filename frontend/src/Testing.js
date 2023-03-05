import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, TextField, Typography, Paper, Button, Box } from '@mui/material'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom';

function Testing() {
    const [initalValue, setInitialValue] = useState([
        {
            name: "",
            color: ""
        }
    ]);
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
                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Field name="name" label="name" type="text" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="color" label="color" type="text" />
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
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Paper>
    )
}

export default Testing