import React from "react";

const VideoOverLay = ({ isopen, videourl, closeModal }) => {
  if (!isopen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg w-full md:w-2/5 px-4 py-4 relative mt-5 shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50 p-2 bg-white rounded-full shadow-md"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center">
          {videourl ? (
            <div className="relative w-full">
              <iframe
                className="w-full h-[250px] md:h-[400px] border border-gray-300 rounded-lg shadow-lg pointer-events-auto"
                src={videourl}
                title="Course Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className="text-lg font-semibold text-center">
              Select a lesson to watch
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoOverLay;
