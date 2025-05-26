import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DraftListComponent } from '@wrkspc/drafts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DraftListComponent],
  templateUrl: './writing-app.component.html',
  styleUrl: './writing-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WritingAppComponent {
  title = 'writing-app';
}
