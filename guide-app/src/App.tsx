import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Library from './pages/Library'
import Submit from './pages/Submit'
import RecipeDetailPage from './pages/RecipeDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="p-4 border-b flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">The Gatherers' Guide</Link>
          <Link
            to="/submit"
            className="bg-gradient-to-r from-accent-start to-accent-end text-white px-4 py-2 rounded"
          >
            Submit
          </Link>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
