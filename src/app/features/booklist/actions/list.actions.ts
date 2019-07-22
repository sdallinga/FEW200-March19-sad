import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list';
import { BookFormat } from '../models/index';

let nextId = 2;
export const BOOK_ADDED = '[booklist] Book Added';

export class AddedBook implements Action {
    readonly type = BOOK_ADDED;
    payload: BookEntity;
    constructor(author: string, title: string, format: BookFormat) {
        this.payload = {
            id: this.getNextId().toString(),
            author,
            title,
            format: BookFormat[format]
        };
    }

    getNextId(): number {
        nextId++;
        return nextId;
    }

}

export type All = AddedBook;
