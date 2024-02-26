import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class ClientComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
