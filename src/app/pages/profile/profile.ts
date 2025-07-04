import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@Component({
  selector: 'app-profile',
  imports: [ NzCardModule,
    NzAvatarModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzTabsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfilePage {
  constructor() {}


  // here will send request to serverBase url / profile
  // get result from response 

  user = {
    fullName: 'Ali Alhashim',
    username: 'ali.hashim',
    email: 'ali@example.com',
    phone: '+966 5XXXXXXX',
    department: 'IT',
    role: 'Administrator'
  };


   editProfile() {
    //  Edit Profile page with open modal
  }

  changePassword() {
    //  Change Password  with show modal
  }


}
