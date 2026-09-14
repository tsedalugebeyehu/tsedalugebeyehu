import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import { BlogCategory } from "./pages/blog-category/blog-category";
import { Exercise } from "./pages/exercise/exercise";
import { Training } from "./pages/training/training";
import { DailyTraining } from "./pages/exercise/daily-training/daily-training";
import { RunTraining } from "./pages/exercise/run-training/run-training";
import { AbsTraining } from "./pages/exercise/abs-training/abs-training";
import { CardioTraining } from "./pages/exercise/cardio-training/cardio-training";
import { CurrentTraining } from "./pages/exercise/current-training/current-training";
import { StrengthTraining } from "./pages/exercise/strength-training/strength-training";

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
    path: "exercise/daily/core",
    component: AbsTraining,
  },
  {
    path: "exercise/daily/cardio",
    component: CardioTraining,
  },
  {
    path: "exercise/new-training/current",
    component: CurrentTraining,
  },
  {
    path: "exercise/running/:planId",
    component: RunTraining,
  },
  {
    path: "exercise/strength/:programId",
    component: StrengthTraining,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
