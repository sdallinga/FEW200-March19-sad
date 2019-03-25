import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { featureName, reducers } from './reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
    declarations: [
        BooklistComponent,
        ListComponent,
        EntryComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(featureName, reducers)
    ],
    exports: [
        BooklistComponent
    ]
})
export class BooklistModule { }
