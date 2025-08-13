import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipes'

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
  if (!recipe) {
    return (
      <div className="p-4">
        <p>Recipe not found.</p>
        <Link to="/" className="text-accent-start underline">Back to library</Link>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <Link to="/" className="text-accent-start underline">← Back</Link>
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      {recipe.subtitle && <p className="text-gray-700">{recipe.subtitle}</p>}
      {recipe.author && (
        <p className="text-sm text-gray-500">By {recipe.author}</p>
      )}
      <div className="flex gap-2 flex-wrap">
        {recipe.themes.map((t) => (
          <span key={t} className="bg-accent-start/10 text-accent-start text-xs px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
