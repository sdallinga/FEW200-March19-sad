import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBook } from '../../actions/list.actions';
import { BookFormat } from '../../models';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

    constructor(private store: Store<State>) { }

    ngOnInit() {
    }

    add(title: HTMLInputElement,
        author: HTMLInputElement,
        format: HTMLInputElement) {
        // dispatch and action

        const formatValue = format.value as BookFormat;

        this.store.dispatch(new AddedBook(title.value,
            author.value,
            formatValue));

        title.value = '';
        author.value = '';
        format.value = '';
        title.focus();
    }

}
