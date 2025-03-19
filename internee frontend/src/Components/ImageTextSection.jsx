const ImageTextSection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center max-h-full  bg-gray-100">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnJCIxsqTC3Ul4YshqA3LI5a-Y4n1kZXAiQ&s"
            alt="Descriptive Image"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
  
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 p-6 px-20 md:p-12">
          <h1 className="text-[40px]  text-gray-800 mb-4">Ultimate Place To Find The Best Job</h1>
          <p className="text-gray-400 text-lg">
          Internee.pk bridges the gap between talented individuals and the thriving IT industry, providing a pathway for students to succeed in the tech world. Whether you’re a beginner or an enthusiast, Internee.pk offers a unique blend of theory and practical experience to propel your tech career forward
          </p>
        </div>
      </div>
    );
  };
  
  export default ImageTextSection;
  