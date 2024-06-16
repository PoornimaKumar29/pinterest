import { SignIn } from '@clerk/clerk-react'
const Authentication = () => {
  return (
    <div className=' bg-gradient-to-br from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20'>

      {/* Setting max-width for the container */}
      <div className="max-w-screen-lg mx-auto">

        {/* Flexbox to center elements */}
        <div className="h-screen flex flex-col items-center justify-center">

          {/* Grid  */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
            
            {/* Column1 */}
            <div className=''>
              {/* <img src="/auth.png" alt="banner image" className='lg:w-full' /> */}
            </div>

            {/* Column2 */}
            <div className="flex flex-col items-center justify-center gap-2.5">
              <img src="/logo.png" alt="logo" className="w-[200px] rounded-lg"/>
              <p className='text-neutral-500 text-center'>Pinterest</p>
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
