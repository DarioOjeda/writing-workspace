import { Component, inject, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Draft } from '../models/draft';
import { DraftService } from '../services/draft.service';

@Component({
  selector: 'draft-list',
  imports: [],
  templateUrl: './draft-list.component.html',
  styleUrl: './draft-list.component.css'
})
export class DraftListComponent {
  private draftService = inject(DraftService);
  drafts = toSignal(this.draftService.getDrafts());
}
