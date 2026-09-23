import { Component, Input, Output, EventEmitter, output } from '@angular/core';


//type user = {
 // id : string; 
   // name: string;
   // avatar: string;
//}

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class UserComponent {
  @Input({required: true}) user!: {
    
  };
  @Output () select = new EventEmitter<string>();
  

  get imagePath() {
    return 'assets/users/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
