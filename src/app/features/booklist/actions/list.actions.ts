import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list';
import { BookFormat } from '../models/index';

let tempId = 0;
export const BOOK_ADDED = '[booklist] Book Added';

export class AddedBook implements Action {
    readonly type = BOOK_ADDED;
    payload: BookEntity;
    constructor(author: string, title: string, format: BookFormat) {
        this.payload = {
            id: 'Temp' + tempId++,
            author,
            title,
            format
        };
    }
}

export type All = AddedBook;
