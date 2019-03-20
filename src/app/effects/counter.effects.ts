import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';

import * as countActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
import { ERROR_COLLECTOR_TOKEN } from '@angular/platform-browser-dynamic/src/compiler_factory';

@Injectable()
export class CounterEffects {

    @Effect()
    loadCountBy$ = this.actions$
    .pipe(
        ofType(appActions.APP_START),
        map(()=> localStorage.getItem('count')),
        filter(by => by != null),
        map(by => parseInt(by, 10)),
        map(by => new countActions.SetCountBy(by))
    );

    @Effect({
        dispatch: false
    }) saveCountBy$ = this.actions$
        .pipe(
            ofType(countActions.COUNT_BY_SET),      // <-- ignore action if not this type output=Action {type:string}
            map(a => a as countActions.SetCountBy), // <- output is SetCountby { type: string, by: number }cast action into COUNT_SET_BY action
            map(a => a.by.toString()),                // <- output is string
            tap(a => localStorage.setItem('count', a))
        );


    constructor(private actions$: Actions) {

    }

}
