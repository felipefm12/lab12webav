import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userId: number | null = null;
  userDetails: any = null;

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    if (this.userId) {
      this.userDetails = this.userService.getUserDetails(this.userId);
    }
  }
}
