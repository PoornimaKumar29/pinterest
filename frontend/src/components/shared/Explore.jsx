



import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../shad/ui/sheet';
import { Input } from '../shad/ui/input';
import { Separator } from '../shad/ui/separator';
import { Button } from '../shad/ui/button';
import axios from 'axios';
import { CheckCircle2Icon } from 'lucide-react';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Explore = ({ title }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Data fetching
    async function fetchPosts() {
      // const { data } = await axios.get(${SERVER_URL}/insta-post);
       const { data } = await axios.get(`${SERVER_URL}/insta-post`);

      setPosts(data.posts);
      console.log(data);
    }
    fetchPosts();
  }, []);


  return (
    <Sheet>
    <SheetTrigger className=' p-3 rounded-sidebar flex gap- items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all rounded'>
      {/* <Icon /> */}
      {title}
    </SheetTrigger>
         <SheetContent side="top" className="h-screen  fixed   flex flex-col bg-white p-8 mt-20  overflow-y-auto">
        

      <SheetHeader>
        <SheetTitle class="text-center text-3xl font-bold">Stay Tuned</SheetTitle>
        <p class="text-center text-3xl ">10 June 2024</p>
      </SheetHeader>
      <div class="grid-cols-1 md:grid md:grid-cols-3  ">
      <article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="food.jpg" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Food</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">food for life</div>
</article>
<article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="not3.jpg" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">WomenCLothing</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Fashion</div>
</article>
<article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="https://images.unsplash.com/photo-1547043848-d94c4ea5adc5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Work Space</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Ideas</div>
</article>
</div>



<SheetHeader>
        <SheetTitle class="text-center text-3xl font-bold pt-20 " >More!!</SheetTitle>
        <p class="text-center text-2xl ">11 June 2024</p>
      </SheetHeader>
      <div class="grid-cols-1 md:grid md:grid-cols-3  ">
      <article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="anime.jpg" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Anime</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Trendy attire</div>
</article>
<article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Business</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Quality Time</div>
</article>
<article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Supercar</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Porsche 911</div>
    <div>heelo</div>
</article>
<article class="relative isolate  justify-end overflow-y-full rounded-2xl px-16 pb-8 pt-40 max-w-sm  mx-3 mt-24 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <img src="flower.jpg" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">FLOWERs</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">Varities</div>
    <div>heelo</div>
</article>

</div>
<div>
  
<div class="flex items-center justify-center ">
  <CheckCircle2Icon class="text-center"/>
  
</div>  
<div class="text-center text-color-red ">That's all for today!
  <h5 className='font-bold '>Come back for Tomorrow for more inspiration</h5><br></br>
  <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-300">
    Go to home feed
  </button>
</div>
{/* <div className="flex items-center justify-center h-screen w-screen">
    
</div> */}

</div>



    </SheetContent>
    
  </Sheet>

  )
};

export default Explore

