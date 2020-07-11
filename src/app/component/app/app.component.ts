import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CW2';

  @Input()
  users: User[];

  constructor(private userService: UserService) {
  this.userService.users().subscribe(value => this.users = value);
  }
}

