import { Component, computed, inject } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs/operators';

import { BLOG_CATEGORIES } from '../../data/blog.data';

@Component({
  selector: 'app-blog-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-category.html',
  styleUrl: './blog-category.scss',
})
export class BlogCategory {
  private readonly route = inject(ActivatedRoute);

  readonly categoryId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('category') ?? '')),
    {
      initialValue: '',
    },
  );

  readonly category = computed(() => BLOG_CATEGORIES.find((item) => item.id === this.categoryId()));
}
