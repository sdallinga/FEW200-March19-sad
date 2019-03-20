import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush // <-- use  for arrays with lots of items
})
export class ListComponent implements OnInit {

    @Input() items: TodoItem[];

    constructor() { }

    ngOnInit() {
    }

}
