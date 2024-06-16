// import React from 'react';

// const CustomModal = ({ isOpen, onClose, posts }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full max-h-full overflow-y-auto">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-semibold">Related Posts</h2>
//           <button onClick={onClose} className="text-xl">&times;</button>
//         </div>
//         <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posts.map((post, index) => (
//             <div key={index} className="relative overflow-hidden rounded-2xl">
//               <img src={post.image} alt={post.alt} className="h-full w-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomModal;
