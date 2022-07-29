import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
  'Add Product',
  props<{ image: string; title: string; id: number }>()
);
export const removeProductIndex = createAction(
  'Remove Product',
  props<{ index: number }>()
);
export const removeProductId = createAction(
  'Remove Product',
  props<{ id: number }>()
);
