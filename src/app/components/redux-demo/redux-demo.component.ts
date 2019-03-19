import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';


@Component({
    selector: 'app-redux-demo',
    templateUrl: './redux-demo.component.html',
    styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {

    count$: Observable<number>;
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.count$ = this.store.select(s => s.counter.count);
    }

    increment() {
        //      this.count = this.count + 1;
        this.store.dispatch(new actions.CountIncremented());
    }

    decrement() {
        //        this.count = this.count - 1;
        this.store.dispatch(new actions.CountDecremented());
    }

    reset() {
        this.store.dispatch(new actions.ResetCounter());
    }
}
