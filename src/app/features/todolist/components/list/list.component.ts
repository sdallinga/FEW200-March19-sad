import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

itema: TodoItem[] = [
    {id: '99', description: 'Wash car'},
    {id: '202', description: 'call gaia'}
];

  constructor() { }

  ngOnInit() {
  }

}
