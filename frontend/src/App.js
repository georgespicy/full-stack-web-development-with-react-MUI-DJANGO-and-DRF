import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Categories from './pages/Categories/Categories'
import Testing from './Testing'
import CategoriesDetails from './pages/Categories/CategoriesDetails'

function App() {
  return (
    <div>
      <CssBaseline />
      <Box sx={{
        bgcolor: (theme) => theme.palette.background.default,
        minHight: "100vh"
      }}>
        <Routes>
          <Route path='/categories' element={<Categories />} />
          <Route path='categories/create' element={<CategoriesDetails />} />
        </Routes>
      </Box>
      {/* <Testing /> */}
    </div>
  )
}

export default App