import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromList from './list';
import { Book } from '../models';

export const featureName = 'BooklistFeature';

export interface State {
    list: fromList.State;
}

export const reducers = {
    list: fromList.reducer
};

// feature selector
const selectFeature = createFeatureSelector<State>(featureName);

// branch selector
const selectList = createSelector(selectFeature, f => f.list);

// object destructuring
const { selectAll: selectBookEntities,
    selectTotal: selectNumberOfBooks } = fromList.adapter.getSelectors(selectList);
console.log(fromList.adapter.getSelectors(selectList));;

// Selectors for the components.
export const selectBooks = createSelector(selectBookEntities, e => e as Book[]);
export const selectBookCount = selectNumberOfBooks;
