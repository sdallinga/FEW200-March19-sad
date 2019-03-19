import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-getter',
    templateUrl: './getter.component.html',
    styleUrls: ['./getter.component.css']
})
export class GetterComponent implements OnInit {

    message$: Observable<string>;
    subscription: Subscription;
    message = 'Default';
    today: Date = new Date();

    constructor(private service: MessageService) {
    }

    ngOnInit() {
        this.message$ = this.service.getObservable();
        // replaced with {{ message$ | async }} in getter.html
        //        this.subscription = this.message$.subscribe(m => {
        //        console.log('OK - got the next issue!');
        //        this.message = m;
        //        });
    }

    ngOnDestroy() {
        //  {{ message$ | async }} in getter.html takes care of unsubscribing
        //    this.subscription.unsubscribe();
    }

    getIt() {
        this.message = this.service.getMessage();
    }

}
