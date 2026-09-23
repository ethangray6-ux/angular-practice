import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.html',
    styleUrl : './tasks.css',
})

export class TasksComponent {
    @Input() name?: string;
    @Output () tasks = new EventEmitter<string>();

}