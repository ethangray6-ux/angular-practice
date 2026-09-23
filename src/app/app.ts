import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './header/tasks/tasks';

@Component({
  imports: [HeaderComponent, UserComponent, TasksComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = 'u1';
 

  get selectedUser () {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
  protected readonly title = signal('first-angular-app');
}
