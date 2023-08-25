import { configureStore } from '@reduxjs/toolkit'
import themeSlice  from './slices/themeSLice'

export default configureStore({
  reducer: {
    theme : themeSlice
  },
})