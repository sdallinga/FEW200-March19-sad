import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrent, selectAtStart, selectCountingBy } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';


@Component({
    selector: 'app-redux-demo',
    templateUrl: './redux-demo.component.html',
    styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {

    atStart$: Observable<boolean>;
    count$: Observable<number>;
    countingBy$: Observable<number>;
    // shouldDisableDecrement$: Observable<boolean>;
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.count$ = this.store.select(selectCurrent);
        this.atStart$ = this.store.select(selectAtStart);
        this.countingBy$ = this.store.select(selectCountingBy);
        //    this.shouldDisableDecrement$ = this.store.select(selectShouldDisableDecrement);
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

    setCountBy(val: number) {
        this.store.dispatch(new actions.SetCountBy(val));
    }
}
