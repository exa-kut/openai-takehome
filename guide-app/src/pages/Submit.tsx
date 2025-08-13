import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRecipeStore } from '../store/recipes'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  format: z.string().min(1, 'Format is required'),
})

type FormData = z.infer<typeof schema>

export default function Submit() {
  const navigate = useNavigate()
  const addRecipe = useRecipeStore((s) => s.addRecipe)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    addRecipe({ id: nanoid(), title: data.title, themes: [], subtitle: '', author: '', })
    navigate('/')
  }

  const preview = watch()

  return (
    <div className="md:flex">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:w-1/2">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input className="w-full border rounded px-2 py-1" {...register('title')} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Format</label>
          <input className="w-full border rounded px-2 py-1" {...register('format')} />
          {errors.format && <p className="text-red-500 text-sm">{errors.format.message}</p>}
        </div>
        <button type="submit" className="bg-gradient-to-r from-accent-start to-accent-end text-white px-4 py-2 rounded">Submit</button>
      </form>
      <div className="p-4 md:w-1/2 bg-gray-50">
        <h2 className="font-semibold mb-2">Live Preview</h2>
        <div className="border rounded-2xl p-4">
          <h3 className="text-lg font-bold">{preview.title || 'Recipe Title'}</h3>
          <p className="text-sm text-gray-600">{preview.format || 'Format'}</p>
        </div>
      </div>
    </div>
  )
}
