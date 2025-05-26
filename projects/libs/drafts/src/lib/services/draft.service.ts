import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as draftsData from './drafts.json'
import { Draft } from '../models/draft';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  data = draftsData;

  getDrafts(): Observable<Draft[]> {
    return of(this.data.drafts);
  }
}
