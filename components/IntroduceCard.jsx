const IntroduceCard = ({ icon, title, subtitle }) => {
    return (
      <article className="w-full h-full flex flex-col justify-start items-center bg-black/30 text-white gap-6 text-center p-6 rounded-2xl shadow-lg backdrop-blur-md">
        <i className={`${icon} mt-6 text-7xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent`}></i>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-wide">{title}</h3>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">{subtitle}</p>
        </div>
      </article>
    );
  };
  
  export default IntroduceCard;
  