import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>;
  faTimes = faTimes;
  @Output() onReminderTask = new EventEmitter<Task>;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggleReminder(task: Task) {
    this.onReminderTask.emit(task);
  }

}
