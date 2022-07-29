import { WishItem } from 'src/app/Interfaces/wish-item';
import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  removeProductIndex,
  removeProductId,
} from './wishes.actions';

export const initialState: Array<WishItem> = [];

export const wishesReducer = createReducer(
  initialState,
  on(addProduct, (state, { image, title, id }) => {
    state = [...state, { image, title, id }];
    console.log(state);
    return state;
  }),
  on(removeProductIndex, (state, { index }) => {
    state = [...state];
    state.splice(index, 1);
    return state;
  }),
  on(removeProductId, (state, { id }) => {
    state = [...state];
    state.filter((e) => {
      return e.id !== id;
    });
    return state;
  })
);
