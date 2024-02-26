import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogOut() {}
}
