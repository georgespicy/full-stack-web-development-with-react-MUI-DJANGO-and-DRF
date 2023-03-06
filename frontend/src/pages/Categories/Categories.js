import React from 'react'
import { Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Categories() {
    const URL = `http://localhost:8000/api/categories/`;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setTasks(res.data)
            }).catch(err => {
                setTasks(err.data)
            })

    }, [])


    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 4,
                mb: 4
            }}>
                <Button
                    component={Link}
                    variant="contained"
                    color='primary'
                    to="/categories/create"
                >
                    Create Category
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>
                                Name
                            </TableCell>
                            <TableCell align='left'>
                                Color
                            </TableCell>
                            <TableCell align='right'>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((r) => {
                            return <TableRow key={r.id}>
                                <TableCell align='left'>
                                    {r.name}
                                </TableCell>
                                <TableCell align='left'>
                                    {r.color}
                                </TableCell>
                                <TableCell align='right'>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}>
                                        <Link to={`/categories/edit/${r.id}`}>
                                            <IconButton size="large">
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                        <IconButton size="large" onClick={null}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Categories