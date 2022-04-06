import { FunctionComponent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'remix'

interface SearchFormProps {}

export const SearchForm: FunctionComponent<SearchFormProps> = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams?.get('q') || ''
  const location = useLocation()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { searchQuery },
  })

  useEffect(() => {
    if (location.pathname !== '/produk') {
      reset({ searchQuery: '' })
    } else if (!searchQuery) {
      reset({ searchQuery: '' })
    }
  }, [location, searchQuery, reset])

  const onSubmit = (data: any) => {
    try {
      if (data.searchQuery) {
        const q = data.searchQuery
        navigate(`/produk?q=${q}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group input-group-sm md:input-group-sm">
        <input
          {...register('searchQuery')}
          defaultValue={searchQuery}
          name="searchQuery"
          type="text"
          placeholder="Search…"
          className="input input-sm input-bordered ml-4 md:input-md"
        />
        <button
          type="submit"
          className="btn btn-sm md:btn-md btn-primary btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
