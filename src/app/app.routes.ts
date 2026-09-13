import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import { BlogCategory } from "./pages/blog-category/blog-category";
import { Exercise } from "./pages/exercise/exercise";
import { Training } from "./pages/training/training";
import { DailyTraining } from "./pages/exercise/daily-training/daily-training";

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "blog",
    component: Blog,
  },
  {
    path: "blog/:category",
    component: BlogCategory,
  },
  {
    path: "exercise",
    component: Exercise,
  },
  {
    path: "exercise/:category",
    component: Training,
  },
  {
    path: "exercise/daily/workout",
    component: DailyTraining,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
