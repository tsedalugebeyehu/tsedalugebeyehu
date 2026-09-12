import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TRAINING_CATEGORIES } from '../../data/exercise.data';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exercise.html',
  styleUrl: './exercise.scss',
})
export class Exercise {
  readonly categories = TRAINING_CATEGORIES;
}
