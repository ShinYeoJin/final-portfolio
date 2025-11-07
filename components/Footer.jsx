const Footer = () => {
  return (
    <footer className="w-full bg-violet-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 이름 */}
        <div>
          <h3 className="text-4xl font-semibold">Shin Yeo Jin</h3>
          <span className="text-2xl">Be Like A Star..⭐</span>
        </div>

        {/* 연락처 & GitHub */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 text-lg">
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
            <span>010-0000-0000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;