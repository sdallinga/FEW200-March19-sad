import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, selectCurrent } from 'src/app/reducers';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    count$: Observable<number>;
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.count$ = this.store.select(selectCurrent);
    }

}
