import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipes'

export default function Library() {
  const recipes = useRecipeStore((s) => s.recipes)
  const navigate = useNavigate()

  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((r) => (
        <div
          key={r.id}
          className="p-4 rounded-2xl shadow cursor-pointer border hover:shadow-lg transition"
          onClick={() => navigate(`/recipe/${r.id}`)}
        >
          <h2 className="text-lg font-semibold mb-1">{r.title}</h2>
          {r.subtitle && <p className="text-sm text-gray-600">{r.subtitle}</p>}
          <div className="mt-2 flex flex-wrap gap-2">
            {r.themes.map((t) => (
              <span
                key={t}
                className="bg-accent-start/10 text-accent-start text-xs px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
