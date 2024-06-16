import { Component, signal } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: Date.now(), title: 'Crear proyecto', isCompleted: false },
    { id: Date.now(), title: 'Crear componentes', isCompleted: false },
  ]);

  addTask(event: Event) {
    const input = event.target as HTMLInputElement;
    const title = input.value;
    const newTask: Task = {
      id: Date.now(),
      title,
      isCompleted: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    // It's not good practice to mutate state, but create a new state (like React).
    // X wrong => this.tasks.splice

    // :) good => Creating a new state with update.
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }

  updateTaskCompletion(index: number) {
    this.tasks.update((tasks) => {
      tasks[index].isCompleted =  !tasks[index].isCompleted
      return tasks
    })
  }
}
