import { useEffect, useState } from "react"
import Card from "../Components/Card"

const Home = () => {

  const [data, setData] = useState([])
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/todos")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data.data)
        setFlag(false)
      })

  }, [])

  if (data.length == 0 && flag)
  {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Loading....
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your tasks easily
          </p>
        </div>

        <div className="space-y-4">
          {
            data.length > 0 ? (
              data.map((item) => {
                return (
                 <Card title={item.title} des={item.des} id={item.id}/>
                )
              })
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm py-16 text-center">
                <h1 className="text-xl font-semibold text-gray-700">
                  No Task Available
                </h1>

                <p className="text-gray-500 mt-2">
                  Create a new task to get started.
                </p>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Home