/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './ask.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'hl-ask',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './ask.component.scss',
    'css/bootstrap.min.css',
    'css/mdb.min.css'
  ],
  templateUrl: './ask.component.html'
})
export class AskComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
