import Random from "./components/Random"
import Tag from "./components/Tag"


function App() {
  return (
    <div className="w-full  flex flex-col items-center background ">

      <h1 className="bg-white rounded-[10px]  w-11/12 mt-[20px] text-center text-4xl font-bold py-2">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-5">
        <Random />
        <Tag />
      </div>

    </div>
  )
}
export default App
