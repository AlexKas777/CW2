import {Component, Input, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  info(id: number): void {
    this.userService.postsOfSingleUsers(id).subscribe(value => console.log(value));
  }
}

