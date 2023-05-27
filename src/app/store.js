import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.js'
import idReducer from '../features/counter/IdSetter.js'


export const store = configureStore({
  reducer: {
    APIfetcher:counterReducer,
    IdSetter:idReducer
  },
})