import { SignIn } from '@clerk/clerk-react'
const Authentication = () => {
  return (
    <div className=' bg-gradient-to-br from-[#f9fafb]/20 to-[#dc2626]/30'>

      {/* Setting max-width for the container */}
      <div className="max-w-screen-lg mx-auto">

        {/* Flexbox to center elements */}
        <div className="h-screen flex flex-col items-center justify-center">

          {/* Grid  */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
            
            {/* Column1 */}
            <div className=''>
              <img src="/pinterest.svg" alt="banner image" className='lg:w-md h-3/4 w-3/4 pt-10  ' />
            </div>

            {/* Column2 */}
            <div className="flex flex-col items-center justify-center gap-2.5">
             
              <p className='text-neutral-500 text-center text-grey-900 text-2xl'>Welcome to Pinterest Clone</p>
              <div className='mt-5'>
                <SignIn />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication