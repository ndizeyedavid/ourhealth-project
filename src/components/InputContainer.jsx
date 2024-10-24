
const InputContainer = ({setPrompt}) => {

  function handleForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    // console.log(formObject);
    setPrompt(formObject.prompt)
    e.target.reset();
  }

  function submitOnEnter(e){
    if (e.key === 'Enter'){
      document.getElementById('submitButton').click();
    }
    
  }
  
  return (
    <>
     <div className="absolute bottom-2 w-full p-2 h-[80px]">

        <form id="promptForm" method="POST" onSubmit={(e)=>handleForm(e)} className="flex items-center justify-between w-full h-full gap-3 p-2 rounded-full" style={{background: "#2f2f2f"}}>
            <button type="button" className="btn btn-circle btn-outline btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-389q-53.83 0-91.46-37.63-37.63-37.63-37.63-91.46v-238.32q0-53.83 37.63-91.46Q426.17-885.5 480-885.5q53.83 0 91.46 37.63 37.63 37.63 37.63 91.46v238.32q0 53.83-37.63 91.46Q533.83-389 480-389Zm-43.59 240v-80.37Q341.07-242.61 273.29-310q-67.77-67.39-82.49-163.5-2.47-18.43 9.72-31.51 12.2-13.08 30.63-13.08 18.44 0 31.25 12.7 12.82 12.69 17.3 31.13 15.19 70.96 71.77 116.08 56.57 45.11 128.53 45.11 72.96 0 129.03-45.61 56.08-45.62 71.27-115.58 4.48-18.44 17.3-31.13 12.81-12.7 31.25-12.7 18.43 0 30.51 13.2 12.08 13.19 9.6 31.63-14.72 94.11-81.87 162.38-67.16 68.27-163.5 81.51V-149q0 18.44-12.58 31.01-12.58 12.58-31.01 12.58t-31.01-12.58q-12.58-12.57-12.58-31.01Z"/></svg>
            </button>

            <textarea name="prompt" onKeyUp={(e)=>submitOnEnter(e)} className="w-full h-full pt-2.5 text-xl" placeholder="Describe how you feel" style={{background: "none", outline: "none", overflow: "hidden", resize: "none"}}></textarea>

            <button id="submitButton" type="submit" className="bg-white btn btn-circle btn-outline btn-ghost hover:border hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M417-592 260-435q-19 19-45 19t-45-19q-18-19-18-45t19-45l264-264q9-9 21-14t24-5q12 0 24 5t21 14l265 265q19 19 19 44.5T790-435q-19 19-45 19t-45-19L543-592v403q0 26-18.5 44.5T480-126q-26 0-44.5-18.5T417-189v-403Z"/></svg>
            </button>

        </form>
        
     </div> 
    </>
  )
}

export default InputContainer
