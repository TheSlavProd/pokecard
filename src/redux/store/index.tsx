import { applyMiddleware, combineReducers, createStore } from "redux";
import { pokemonReducer } from "../reducers/pokemonList";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({ pokemon: pokemonReducer });

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;
