import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../shad/ui/sheet'
import { Input } from '../shad/ui/input'
import { Separator } from '../shad/ui/separator'
import { Button } from '../shad/ui/button'
import { Edit , Contact2Icon, MoreHorizontal } from 'lucide-react'

const Message= ({ icon: Icon, title }) => {

  return (
    <Sheet>
      <SheetTrigger className='w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all rounded'>
        <Icon />
        {title}
      </SheetTrigger>
      <SheetContent side="right" className="fixed top-0 right-0 w-[350px] z-[9] flex flex-col bg-white shadow-lg p-4 mt-2">

      {/* <SheetContent side="right" className="fixed top-[60px] left-0 right-0 z-[9] flex flex-col bg-white p-6 rounded-t-lg mt-10 mr-10 ml-10"> */}
      {/* <SheetContent side="right" className="fixed top-[60px] left-0 right-0 z-[9] flex flex-col bg-white p-6 rounded-t-lg mt-10 mr-10 ml-10"> */}

       <SheetHeader>
  <div className="flex-row justify-between">
    <SheetTitle >Inbox</SheetTitle>
    
  </div>
</SheetHeader>


        {/* Activity Logs */}
        <div className='flex flex-col gap-6 mt-6'>
          <div className='flex flex-col gap-2'>
            
            <div>
            <Input 
              type="text"
              placeholder="Search by Name or email.... "
               className="mt-6 rounded-full w-50% " 
        />
              
            </div>
          </div>
          <p className='flex p-2 gap-3'> <Edit/>New Messages</p>
          <div className='flex gap-4 p-2  '><Contact2Icon/>
           Invite Your Friends<br></br>
          connect to start chatting
          </div>
         {/* <Separator /> */}
          {/* <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold'>This month</h3>
            <div>
              Activity
            </div>
          </div> */}
          {/* <Separator /> */}
          {/* <div className='flex flex-col gap-2'>
            <h3 className='text-xs font-bold'>Earlier</h3>
            <div>
              Activity
            </div>
          </div> */}
        </div>

      </SheetContent>
    </Sheet>
  )
}

export default Message