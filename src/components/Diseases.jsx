import {Tooltip } from 'react-tooltip';


const Diseases = () => {
  return (
    <>
      <div className="mt-5">    
        <h3 className="mb-5 text-3xl font-medium">Diseases: </h3>
        <div className="flex justify-between gap-3">
          
            <div data-tip="<ul><li>Mellow</li></ul>" data-html={true} className="tooltip tooltip-bottom flex-col text-black grow bg-green-300 h-[100px] rounded-lg flex items-center justify-center ">
                <h3 className="text-2xl font-semibold">Malaria</h3>
                <span className="text-lg font-normal">30%</span>

            </div>
                <Tooltip />


            <div className="flex-col text-black grow bg-yellow-300 h-[100px] rounded-lg flex items-center justify-center ">
                <h3 className="text-2xl font-semibold">COVID-19</h3>
                <span className="text-lg font-normal">30%</span>
            </div>

            
            <div className="flex-col text-black grow bg-red-300 h-[100px] rounded-lg flex items-center justify-center ">
                <h3 className="text-2xl font-semibold">Ebola</h3>
                <span className="text-lg font-normal">30%</span>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Diseases
