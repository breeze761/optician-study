// Core types for the learning platform

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  is_premium: boolean;
  created_at: string;
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  is_free: boolean;
  image_url?: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  slug: string;
  chapter_id: string;
  title: string;
  description: string;
  order: number;
  estimated_minutes: number;
  content: LessonContent;
  quiz: Quiz;
}

export interface LessonContent {
  sections: ContentSection[];
}

export interface ContentSection {
  type: 'text' | 'heading' | 'image' | 'list' | 'callout' | 'definition';
  content: string;
  items?: string[]; // for lists
  term?: string; // for definitions
  variant?: 'info' | 'warning' | 'tip'; // for callouts
}

export interface Quiz {
  questions: QuizQuestion[];
  passing_score: number; // percentage needed to pass (e.g., 80)
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number; // index of correct option
  explanation: string;
}

export interface UserProgress {
  user_id: string;
  lesson_id: string;
  completed: boolean;
  quiz_score?: number;
  quiz_passed: boolean;
  completed_at?: string;
}

export interface ChapterProgress {
  chapter_id: string;
  lessons_completed: number;
  total_lessons: number;
  chapter_test_passed: boolean;
  chapter_test_score?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked_at?: string;
}

// Calculation Practice Types
export type CalculationType =
  | 'transposition'
  | 'vertex-distance'
  | 'prism-diopter'
  | 'decentration'
  | 'lens-thickness'
  | 'base-curve'
  | 'magnification'
  | 'compensated-power';

export interface CalculationProblem {
  id: string;
  type: CalculationType;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  given: Record<string, number | string>;
  answer: number | string;
  answerUnit?: string;
  tolerance?: number; // for answers that can be slightly off
  explanation: string;
  formula?: string;
  steps?: string[];
}

export interface CalculationCategory {
  id: CalculationType;
  title: string;
  description: string;
  icon: string;
  problems: CalculationProblem[];
}
