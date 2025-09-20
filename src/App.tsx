import { IoMdAddCircle } from "react-icons/io"
import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendsList from "./components/TrendsList"
import { BlogProvider } from "./share/BlogContext"

const App = () => {
  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          {/* main area*/}
          <section className="mx-auto p-6">
            <div>
              <button onClick={openModelForNewBlog} className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">
                Add New Blog <IoMdAddCircle className="ml-[0.5rem]"/>
              </button>
            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>

      </BlogProvider>
    </div>
  )
}

export default App