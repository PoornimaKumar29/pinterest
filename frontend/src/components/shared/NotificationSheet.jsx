
 import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../shad/ui/sheet';
import { Input } from '../shad/ui/input';
import { Separator } from '../shad/ui/separator';
import { Button } from '../shad/ui/button';
import { Edit, Contact2Icon } from 'lucide-react';

const NotificationSheet = ({ icon: Icon, title }) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all rounded">
        <Icon />
        {title}
      </SheetTrigger>
      <SheetContent side="right" className="fixed flex flex-col bg-white shadow-lg  mt-2 md-200 overflow-y-auto h-full">
        <SheetHeader>
          <SheetTitle className="text-center mb-2">Updates</SheetTitle>
        </SheetHeader>
        <div className="space-y-4">
          <div className="flex gap-2 bg-white hover:bg-gray-200 transition-colors duration-200 p-2">
            <h2 className="mt-2 font-bold text-gray-900">Woman's Style</h2>
            <p className="mt-2">for you Recent.</p>
          </div>
          <article className="relative justify-end overflow-hidden rounded-2xl px-16 pb-8 pt-40 max-w-sm mx-auto flex flex-col bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <img src="/not4.jpg" alt="error loading img..." className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          </article>
          <div className="flex gap-2 bg-white hover:bg-gray-200 transition-colors duration-200 p-2">
          <h2 className="mt-2 font-bold text-gray-900">Poses</h2>
            <p className="mt-2">inspired by you 2d.</p>

          </div>
          <article className="relative justify-end overflow-hidden rounded-2xl px-16 pb-8 pt-40 max-w-sm mx-auto flex flex-col bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <img src="/not2.jpeg" alt="error loading img..." className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          </article>
          <div className="flex gap-2 bg-white hover:bg-gray-200 transition-colors duration-200 p-2">
            <h2 className="mt-2 font-bold text-gray-900">MakeOver </h2>
            <p className="mt-2">for you 4d.</p>
          </div>
          <article className="relative justify-end overflow-hidden rounded-2xl px-16 pb-8 pt-40 max-w-sm mx-auto flex flex-col bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <img src="/not5.jpg" alt="error loading img..." className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          </article>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationSheet;
