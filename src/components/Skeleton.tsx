
export const Skeleton = () => {
  return (
    <div className='flex flex-col gap-10 aspect-auto px-4 md:px-36'>
  <div className="relative mx-4 lg:mx-0">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
    </span>

    <div className="w-full h-10 py-2 pl-10 pr-4 bg-gray-200 border border-gray-300 rounded-md animate-pulse"></div>
  </div>

  <div className="w-full flex flex-wrap justify-evenly gap-12 md:gap-4 mt-4">
    {Array.from({length: 8}).map((_, index) => (
      <div key={index} className="w-full min-w-[180px] sm:w-2/5 md:w-[200px] lg:w-1/5 bg-white rounded-md shadow-md flex flex-wrap flex-col items-center justify-between animate-pulse">
        <div className='p-4'>
          <div className="w-[104px] h-[104px] bg-gray-200 rounded-full"></div>
        </div>
        <div className='w-full bg-[#EDEFF2] flex justify-between items-center px-6 py-3'>
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
