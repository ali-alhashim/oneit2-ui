import { Component } from '@angular/core';

import {  RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-main-layout',
   imports: [ RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzToolTipModule, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

   isCollapsed = false;

}
