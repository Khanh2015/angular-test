import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/admin/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/admin/header/header.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
