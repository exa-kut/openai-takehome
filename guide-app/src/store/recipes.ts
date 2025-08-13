import { create } from 'zustand'

export interface Recipe {
  id: string
  title: string
  subtitle?: string
  author?: string
  themes: string[]
}

interface RecipeState {
  recipes: Recipe[]
  addRecipe: (r: Recipe) => void
}

const initialRecipes: Recipe[] = [
  {
    id: 'nyc-love-letter',
    title: 'New York Is Creative: A Love Letter',
    subtitle: 'A celebration of NYC creativity',
    author: 'Gatherers Guild',
    themes: ['Arts & Creativity']
  },
  {
    id: 'speed-creating',
    title: 'Speed Creating',
    subtitle: 'Rapid-fire collaborative art making',
    author: 'Gatherers Guild',
    themes: ['Games & Play', 'Arts & Creativity']
  }
]

const storageKey = 'gatherers.recipes'

export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: (() => {
    const raw = localStorage.getItem(storageKey)
    if (raw) return JSON.parse(raw)
    localStorage.setItem(storageKey, JSON.stringify(initialRecipes))
    return initialRecipes
  })(),
  addRecipe: (r) =>
    set((state) => {
      const recipes = [...state.recipes, r]
      localStorage.setItem(storageKey, JSON.stringify(recipes))
      return { recipes }
    })
}))
