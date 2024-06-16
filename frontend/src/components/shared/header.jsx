import { UserButton, useUser } from "@clerk/clerk-react";
import { Bell, Bookmark, Compass, Home, Instagram, Map, Menu, MessagesSquare, Search, Settings, Sun } from "lucide-react";
import CreateModal from "../modals/CreateModal";
import { Popover, PopoverContent, PopoverTrigger } from "../shad/ui/popover";
import NotificationSheet from "./NotificationSheet";
import Explore from "./Explore";
import Message from "./Message";
import { Input } from '../shad/ui/input'
// This is where your array should come (demoArray)
const popupArray = [
  {
    icon: Settings ,
    title: "Settings"
  },
  {
    icon: Map,
    title: "Map"
  },
  {
    icon: Bookmark,
    title: "Saved"
  },
  {
    icon: Sun,
    title: "Switch Appearance"
  },
  {
    icon: UserButton,
    title: "Profile"
  }
]

const listArray = [
  {
    icon: Home,
    title: "Home"
  },
  {
    icon: Home,
    title: "Explore"
  },
  
  
  {
    icon: MessagesSquare,
    title: "Messages"
  },
  {
    icon: Bell,
    title: "Notifications"
  },
  
]

const Sidebar = () => {
  
  const { user } = useUser()

  return (

    <div className="bg-white">
  <div className="flex justify-between items-center h-full  ">
    <div className="flex items-center gap-8 p-">
      <img src="/logo.png" alt="logo" className="w-40 block" />
      {/* <Instagram className="block lg:hidden" /> */}

      {/* List */}
      <div className="flex gap-8">
        {listArray.map((item, i) => {
         
          if (item.title === "Notifications") {
            return <NotificationSheet key={i} icon={item.icon} title={item.title} />;
          }
          if (item.title === "Explore") {
            return <Explore key={i} icon={item.icon} title={item.title} />;
          }
          if (item.title === "Messages") {
            return <Message key={i} icon={item.icon} title={item.title} />;
          }
          
          return (
            <div
              key={i}
              className="p-3 rounded flex gap-4 items-center text-neutral-800 hover:cursor-pointer hover:bg-black hover:text-white transition-all"
            >
              <item.icon />
              <p className=" hidden lg:block">{item.title}</p>
            </div>
            
          );
        })}
      

        <CreateModal />
      
      </div>
    </div>

    {/* PopUp */}
    <Popover>
      <PopoverTrigger className="flex items-center gap-2.5 p-2 rounded-lg font-bold hover:bg-neutral-200/50">
        <Menu className="w-8 h-8" />
        <p className="hidden lg:block">More</p>
      </PopoverTrigger>
      <PopoverContent className="ml-4 p-2 shadow-lg">
        {popupArray.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-4 hover:cursor-pointer hover:bg-neutral-200/50 transition-all p-4 rounded-lg cursor-pointer">
              <item.icon />
              {item.title}
              
            </div>
            {i === 3 && (
              <div className="h-[1px] border-b hover:cursor-pointer border-neutral-500 transition-all" />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  </div>
</div>

  );
};

export default Sidebar;