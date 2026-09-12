import { Component, computed, inject } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs/operators';

import { TRAINING_CATEGORIES } from '../../data/exercise.data';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './training.html',
  styleUrl: './training.scss',
})
export class Training {
  private readonly route = inject(ActivatedRoute);

  readonly categoryId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('category') ?? '')),
    {
      initialValue: '',
    },
  );

  readonly category = computed(() =>
    TRAINING_CATEGORIES.find((item) => item.id === this.categoryId()),
  );
}
