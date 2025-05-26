import { Component } from '@angular/core';
import { Draft } from '@wrkspc/api';

@Component({
  selector: 'draft-list',
  imports: [],
  templateUrl: './draft-list.component.html',
  styleUrl: './draft-list.component.css'
})
export class DraftListComponent {
  draftList: Draft[] = [
    {
      id: 0,
      text: 'My squad and I materialized in a stone chamber of the Cuban Capitol building. Our feet echoed as we landed on the marble floor. The high domed ceiling above us was illuminated by the faint orange firelight that peeked through the tall windows. Fires roamed through the city of Havana, and the night glowed like a blood-red sunset.'
    },
        {
      id: 1,
      text: 'El día que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo'
    },
  ];
}
