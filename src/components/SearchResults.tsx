export default function SearchResults({ results }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {results.docs?.map((item) => {
        return (
          <li key={item.key} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.title}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.author_name}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{item.title}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
