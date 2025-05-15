type MainBannerProps = {
  title: string;
  description: string;
};

const MainBanner = ({ title, description }: MainBannerProps) => {
  return (
    <div>
      <div className="relative w-full h-100 sm:h-72 md:h-80 lg:h-120 bg-green-700 overflow-hidden mb-10 flex items-center bg-[url('/marketplace/banner2.png')] bg-cover bg-center">
        {/* Contenido a la izquierda */}
        <div className="w-1/4 h-full flex flex-col justify-center items-start px-10 text-black ml-[15%] ">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{title}</h1>
          <p className="text-sm md:text-base mb-4">{description}</p>
          <button className="bg-green-700 text-white py-3 px-5 rounded-sm  hover:bg-green-900 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
