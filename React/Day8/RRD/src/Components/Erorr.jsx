
import { Link } from "react-router-dom"

const Erorr = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-lg text-center">

        <h1 className="text-9xl font-extrabold text-indigo-500">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-3xl font-bold text-white">
            Oops! Page Not Found
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            The page you are looking for doesn't exist
            or may have been moved.
            Please check the URL or return to the home page.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/Home"
            className="inline-block rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Go to Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          Error Code: 404 | Page Not Found
        </p>

      </div>
    </div>
  )
}

export default Erorr
