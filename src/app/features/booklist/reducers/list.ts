import { BookFormat } from '../models/index';
import * as actions from '../actions/list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
    id: string;
    author: string;
    title: string;
    format: BookFormat;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
    ids: [1, 2],
    entities: {
        1: { id: '1', author: 'Tom Clancy', title: 'The Hunt for Red October', format: BookFormat.paper },
        2: { id: '2', author: 'Robert Pirsig', title: 'Zen and the Art of Motorcycle Maintenance', format: BookFormat.paper }
    }
};

export function reducer(state: State = initialState, action: actions.All): State {
    switch (action.type) {
        case actions.BOOK_ADDED: {
            return adapter.addOne(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
