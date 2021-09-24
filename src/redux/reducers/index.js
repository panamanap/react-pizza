import { combineReducers } from "redux";

import { filters } from './filters';
import { cart } from './cart';
import { setPizzas } from "./pizzas";

export const rootReducer = combineReducers({
  pizzas : setPizzas,
  filters, 
  cart
})

