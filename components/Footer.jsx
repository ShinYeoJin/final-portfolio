const Footer = () => {
  return (
    <footer className="w-full bg-violet-800 text-white py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* 이름 */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Shin Yeo Jin</h3>
          <span className="text-lg sm:text-xl md:text-2xl">Be Like A Star⭐</span>
        </div>

        {/* 연락처 & GitHub */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-lg">
          {/* GitHub */}
          <a
            href="https://github.com/ShinYeoJin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-yellow-300 transition-colors duration-300"
          >
            <i className="ri-github-fill text-2xl mb-1"></i>
            <span>GITHUB</span>
          </a>

          {/* 이메일 */}
          <div className="flex flex-col items-center">
            <i className="ri-mail-line text-2xl mb-1"></i>
            <span>syj3072@naver.com</span>
          </div>

          {/* 전화번호 */}
          <div className="flex flex-col items-center">
            <i className="ri-phone-line text-2xl mb-1"></i>
            <span>010-8794-3072</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;