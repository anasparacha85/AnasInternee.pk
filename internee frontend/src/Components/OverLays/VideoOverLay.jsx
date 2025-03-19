import React from 'react'

const VideoOverLay = ({isopen,videourl,closeModal}) => {
    if(!isopen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
      <div className="bg-white rounded-lg w-full md:w-2/5 
       
        px-1 relative mt-5">
      <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-100"
          onClick={closeModal}
        >
          ✕
        </button>
         {/* Video Section */}
      <div className="flex-1  flex items-center justify-center">
        {videourl ? (
          <iframe
            className="w-full h-[50%]   md:h-[400px] border-2 border-gray-300 rounded-lg shadow-lg"
            src={videourl}
            title="Course Video"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-lg font-semibold">Select a lesson to watch</p>
        )}
      </div>
      </div>
    </div>
  )
}

export default VideoOverLay
