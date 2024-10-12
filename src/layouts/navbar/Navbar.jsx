import SearchBar from "../../components/SearchBar";
import User from "../../components/userIcon/User";

const Navbar = () => {
  return (
    <nav className="">
      <div className="h-[140px] md:h-[100px] px-5 md:px-10 bg-white flex border-b-0 md:border-b">
        <div className="max-w-[135px] lg:max-w-[250px] hidden flex-shrink-0 border-r md:flex items-center justify-center">
          <img
            src="/nav/Logo.png"
            alt=""
            className=" object-contain w-full h-auto mr-[22px]"
          />
        </div>

        <div className="flex w-full items-center justify-between py-5">
          <div className="block md:hidden cursor-pointer">
            <img src="/common/menu.svg" alt="" />
          </div>

          <h1 className="ml-5 mr-[10px] text-[20px] md:text-[28px] text-[#343C6A] font-semibold">
            Setting
          </h1>

          <div className="hidden md:flex items-center gap-[10px] lg:gap-[30px]">
            <div className="">
              <SearchBar />
            </div>

            <div className="cursor-pointer w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#F5F7FA]">
              <img src="/nav/settings.svg" alt="" />
            </div>

            <div className="cursor-pointer w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#F5F7FA]">
              <img src="/nav/bell.svg" alt="" />
            </div>

            <div className="flex items-center justify-center w-[60px] h-[60px]">
              <User />
            </div>
          </div>

          <div className="block md:hidden w-[55px] h-[55px] flex-shrink-0">
            <User />
          </div>
        </div>
      </div>

      <div className="block md:hidden mx-[25px] mb-5">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
