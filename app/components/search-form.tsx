import { FunctionComponent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FiSearch } from 'react-icons/fi'
import { useLocation, useNavigate, useSearchParams } from 'remix'

interface SearchFormProps {}

type FormValues = {
  searchQuery: string
}

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

  const onSubmit = (data: FormValues) => {
    try {
      if (data.searchQuery) {
        const q = data.searchQuery
        navigate(`/produk?q=${q}`)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          {...register('searchQuery')}
          className=" md:w-[500px] md:h-[49px] py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
          defaultValue={searchQuery}
          name="searchQuery"
          type="text"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute p-2 text-black -translate-y-1/2 rounded-full top-1/2 right-4"
        >
          <FiSearch />
        </button>
      </div>
    </form>
  )
}
