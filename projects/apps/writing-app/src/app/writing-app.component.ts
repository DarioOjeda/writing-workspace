import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Draft } from '@wrkspc/api';
import { DraftListComponent } from '@wrkspc/drafts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DraftListComponent],
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
