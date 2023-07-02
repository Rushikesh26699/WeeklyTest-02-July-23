import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './ThemeSlices';

const store = configureStore({
    reducer: ThemeReducer

})


export default store;