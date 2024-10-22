import UserMessagePrompt from "./UserMessagePrompt"
import AiRepsonse from "./AiRepsonse"
const MainContainer = () => {
  return (
    <>
      <div className='px-5 h-[83vh]'>
        <div className='h-full mt-5 overflow-auto'>

            {/* <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full"><img src="/logo.webp" className="w-[200px] h-[200px] object-contain animate-pulse" alt="Logo" /></div> */}
            <UserMessagePrompt />

            <AiRepsonse />

        </div>
      </div>
    </>
  )
}

export default MainContainer
