import { configureStore } from '@reduxjs/toolkit'
import themeSlice  from './slices/themeSLice'
import ProductsSlice  from './slices/products'

export default configureStore({
  reducer: {
    theme : themeSlice,
    products : ProductsSlice
  },
})