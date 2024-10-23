
const Loading = () => {
  return (
    <> 
        <div className="bg-gray-600 skeleton h-[25px] w-[160px] mb-5"></div>

        <div className="flex w-full gap-2">
            <div className="bg-gray-600 skeleton h-[102px] w-full"></div>
            <div className="bg-gray-600 skeleton h-[102px] w-full"></div>
            <div className="bg-gray-600 skeleton h-[102px] w-full"></div>
        </div>

        <div className="bg-gray-600 skeleton h-[25px] w-[160px] mt-9 mb-5"></div>

        <div className="flex w-full gap-2">
            <div className="bg-gray-600 skeleton h-[252px] w-full"></div>
        </div>
    </>
  )
}

export default Loading
