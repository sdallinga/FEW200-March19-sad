import * as fromCounter from './counter';
import { createSelector } from '@ngrx/store';

export interface State {
    counter: fromCounter.State;
}

export const reducers = {
    counter: fromCounter.reducer
};

// selectors

// 1. if in a feature, create a feature selector.

// 2. Create a memoized selector for each branch of the state.

const selectCounterBranch = (state: State) => state.counter;

// createSelector takes as many functions as parameters as you want and returns a function
export const selectCurrent = createSelector(selectCounterBranch, c => c.count);
export const selectCountingBy = createSelector(selectCounterBranch, c => c.by);

export const selectAtStart = createSelector(selectCurrent, c => c === 0);

export const selectDecrementDisabled = createSelector(selectCurrent, selectCountingBy, (c, b) => (c - b) < 0);
export const selectResetDisabled = createSelector(selectCurrent, c => c === 0);


function shouldDisable(): boolean {
    return true;
}



// export const selectShouldDisableDecrement = createSelector(selectCurrent, c => {c.count < c.by});
