import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  BLOG_CATEGORIES
} from '../../data/blog.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

  readonly categories =
    BLOG_CATEGORIES;
}