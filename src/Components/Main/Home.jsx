import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

const Home = () => {
  return (
    <div className="my-5">
      <div className="my-5 text-center font-mono">
         <h2 className="text-4xl font-extrabold mb-8">Welcome to BRTA</h2>
    
        <p className="font-semibold">Providing Efficient and Reliable Services</p>
        <p className="font-semibold">Visit the BRTA office for more details.</p>

      </div>
<Section1></Section1>
<Section2></Section2>
<Section3></Section3>
    </div>
  )
}

export default Home