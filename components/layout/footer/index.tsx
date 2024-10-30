import MainLogo from 'public/logo/logo';

export default function Footer() {
  const CompanyAddress = () => (
    <div className="pt-[1.87rem] text-center sm:pt-0 sm:text-left">
      <MainLogo
        width="93px"
        height="88px"
        className="relative left-[-90px] mx-auto sm:mx-0" // Moves the logo 90px to the left
      />

      <div className="mt-2.5 leading-tight">
        <p>Lebanon</p>
        <p>Beirut Southern Border</p>
        <p>Ber Al Abed - Under Sfier Bridge</p>
        <p>+961 78 913 441</p>
      </div>
    </div>
  );

  const SocialIcons = () => (
    <div className="flex items-center gap-5 pt-[1.8rem]">
      {/* <Facebook className="max-w-[1.8rem]" /> */}
      {/* <Instagram className="max-w-[1.8rem]" /> */}
      {/* <Tiktok className="max-w-[1.8rem]" /> */}
    </div>
  );

  return (
    <footer className="mt-[70px] bg-light-pink pb-10 pt-12">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full flex-col-reverse items-center justify-center sm:flex-row sm:items-start sm:justify-between">
          <CompanyAddress />
        </div>
        <div className="mt-[4.3rem] flex w-full flex-col items-center justify-center ">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
