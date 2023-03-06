import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Categories from './pages/Categories/Categories'
import Testing from './Testing'
import CategoriesCreate from './pages/Categories/CategoriesCreate'
import EditCategories from './pages/Categories/EditCategories'

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
          <Route path='categories/create' element={<CategoriesCreate />} />
          <Route path='categories/edit/:id/' element={<EditCategories />} />
        </Routes>
      </Box>
      {/* <Testing /> */}
    </div>
  )
}

export default App