import { MovieService } from './movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent {
  title = 'ng-cinema';
}
