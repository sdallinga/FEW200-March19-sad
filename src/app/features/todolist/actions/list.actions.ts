import { Action } from '@ngrx/store';
import { TodoEntity } from '../reducers/list';

let tempId = 999;
export const ITEM_ADDED = '[todolist] Item Added';
export class AddedTodoItem implements Action {
    readonly type = ITEM_ADDED;
    payload: TodoEntity;
    constructor(description: string) {
        this.payload = {
            id: 'T' + tempId++,
            description
        };
    }
}

export type All = AddedTodoItem;
