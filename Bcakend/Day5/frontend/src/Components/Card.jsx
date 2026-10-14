
const Card = ({title,des,id}) => {
  return (
     <article
        key={id}
        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center justify-between gap-6 hover:shadow-md transition duration-200"
     >
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate">
            {title}
          </h1>

          <h2 className="text-gray-500 leading-relaxed">
            {des}
          </h2>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition">
            Edit
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 active:scale-95 transition">
            Delete
          </button>
        </div>

      </article>
  )
}

export default Card