import { createSlice } from '@reduxjs/toolkit'

export const viewWayCONSTANTS = {
  VERTICAL: 'VERTICAL',
  GRID: 'GRID'

}

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    viewWay: viewWayCONSTANTS.VERTICAL
  },
  reducers: {
    toggleViewWay: (state, action) => {
      state.viewWay = state.viewWay === viewWayCONSTANTS.VERTICAL ? viewWayCONSTANTS.GRID : viewWayCONSTANTS.VERTICAL
    }
  },
})

export const { toggleViewWay } = ProductsSlice.actions

export default ProductsSlice.reducer
