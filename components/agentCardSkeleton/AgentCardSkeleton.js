

const SkeletonAgentCard = () => {
    return (
        <div className="property-wrap bg-white shadow-md">
        <div className="skeleton-image h-72 bg-gray-300 animate-pulse"></div>
        <div className="p-4">
            <div className="flex items-center mb-4">
                <div className="skeleton-avatar w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="skeleton-username ml-2 bg-gray-300 w-20 h-4 animate-pulse"></div>
            </div>
            <p className="skeleton-date text-sm text-gray-300 mb-2 w-24 h-3 bg-gray-300 animate-pulse"></p>
            <h3 className="skeleton-title text-lg font-bold mb-2 w-3/4 h-5 bg-gray-300 animate-pulse"></h3>
            <div className='flex items-center'>
                <p className="skeleton-location text-sm text-gray-300 mb-2 w-12 h-3 bg-gray-300 animate-pulse"></p>
                <p className='skeleton-listing-type mb-2 bg-gray-300 text-white text-xs px-1 py-[2px] ml-3 capitalize w-10 h-4 animate-pulse'></p>
            </div>
            <ul className="skeleton-details flex text-sm text-gray-300">
                <li className="mr-4 flex items-center gap-1 w-12 h-3 bg-gray-300 animate-pulse"></li>
                <li className="mr-4 flex items-center gap-1 w-12 h-3 bg-gray-300 animate-pulse"></li>
                <li className='flex items-center gap-1 w-16 h-3 bg-gray-300 animate-pulse'></li>
            </ul>
        </div>
    </div>
    
    );
  };
  
  export default SkeletonAgentCard;
  