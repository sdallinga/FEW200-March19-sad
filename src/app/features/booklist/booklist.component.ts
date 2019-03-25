import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './models';
import { State, selectBooks, selectBookCount } from './reducers';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

    bookList$: Observable<Book[]>;
    bookCount$: Observable<number>;

    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.bookList$ = this.store.select(selectBooks);
        this.bookCount$ = this.store.select(selectBookCount);
    }

}
