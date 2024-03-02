import React from 'react';

const AdminPropertyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-md relative shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="animate-pulse bg-gray-200 h-40"></div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-12 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-24 h-4 ml-2 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="w-12 h-4 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-20 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <span className="bg-gray-200 text-xs text-white px-1 py-[2px] ml-2 w-12 h-4 rounded-full animate-pulse"></span>
        </div>
        <ul className="flex text-sm text-gray-600">
          <li className="mr-3 flex items-center gap-1">
            <div className="w-8 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </li>
          <li className="mr-3 flex items-center gap-1">
            <div className="w-8 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </li>
          <li className="flex items-center gap-1">
            <div className="w-16 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </li>
        </ul>
        <div className="flex justify-end absolute top-0 right-0 bg-gray-900 bg-opacity-75 p-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse mr-4"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPropertyCardSkeleton;
