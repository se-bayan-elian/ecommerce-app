import { createSlice } from '@reduxjs/toolkit'

const theme = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
  // note ====> dark not supported yet !

}

const themeSlice = createSlice({
  name: 'theme',
  initialState: theme.LIGHT,
  reducers: {
    toggleTheme: (state, action) => {
      return state === theme.LIGHT ? theme.DARK : theme.LIGHT
    }
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer