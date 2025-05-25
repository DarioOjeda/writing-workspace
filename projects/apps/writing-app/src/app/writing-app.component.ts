import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Draft } from '@wrkspc/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './writing-app.component.html',
  styleUrl: './writing-app.component.scss'
})
export class WritingAppComponent {
  title = 'writing-app';
  drafts :Draft[] = [
    {
      id: 0,
      text: 'texto prueba'
    }
  ];
}
