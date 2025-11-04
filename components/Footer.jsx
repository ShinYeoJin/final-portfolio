const Footer = () => {
    return ( 
    <>
        <div className="w-full h-200px bg-violet-800 flex flex-col justify-center items-center gap-[10px] text-white">
            <div>
                <h2>Contact Me</h2>
                <h3>Shin Yeo Jin</h3>
            </div>
            
            <div className="flex flex-row justify-center items-center gap-[30px]">
                <div>
                    <a href="https://github.com/ShinYeoJin"><i class="ri-github-fill"></i></a>
                    <span>GITHUB</span>
                </div>

                <div>
                    <i class="ri-mail-line"></i>
                    <span>syj3072@naver.com</span>
                </div>

                <div>
                    <i class="ri-phone-line"></i>
                    <span>010-0000-0000</span>
                </div>
            </div>
            
        </div>
    </> );
}
 
export default Footer;