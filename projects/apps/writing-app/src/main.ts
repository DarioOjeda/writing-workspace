import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/writing-app.config';
import { WritingAppComponent } from './app/writing-app.component';

bootstrapApplication(WritingAppComponent, appConfig)
  .catch((err) => console.error(err));
