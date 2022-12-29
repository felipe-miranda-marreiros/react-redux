import { configureStore } from '@reduxjs/toolkit'
import { formReducer, changeCost, changeName } from './slices/formSlice'
import {
  carsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from './slices/carsSlice'

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export { store, changeCost, changeName, addCar, changeSearchTerm, removeCar }
