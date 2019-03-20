import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromList from './list';
import { TodoItem } from '../models';
const featureName = 'todosFeature';

export interface State {
    list: fromList.State;
}

export const reducers = {
    list: fromList.reducer
};

// Selectors
// 1. Create a feature selector

const selectFeature = createFeatureSelector<State>(featureName);

// 2. Create a selector for each branch

const selectList = createSelector(selectFeature, f => f.list);

// 3. "local Helpers

// Object destructuring
const { selectAll: selectTodoEntities } = fromList.adapter.getSelectors(selectList);

// 4. The selectors for the components.
// TodoItem[]
export const selectTodoItems = createSelector(selectTodoEntities, e => e as TodoItem[]);
