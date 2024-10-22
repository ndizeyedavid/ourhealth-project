import Diseases from "./Diseases"
import Symptoms from "./Symptoms"
const AiRepsonse = () => {
  return (
    <>
     <div className="mt-5">
        <p>Here's the ai prediction: </p>

        {/* diseases */}
        <Diseases />
        
        {/* Symptoms */}
        <Symptoms />

     </div> 
    </>
  )
}

export default AiRepsonse
