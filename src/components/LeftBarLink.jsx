const LeftBarLink = () => {
  return (
    <div className="hidden md:flex flex-col ">
      <ul className="flex flex-col gap-10">
        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/home.svg" alt="" className="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Dashboard
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/transfer.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Transactions
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/user.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Accounts
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/inv.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Investments
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/creditCard.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Credit Cards
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/loan.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Loans
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/service.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            Services
          </p>
        </li>

        <li className="flex items-center gap-6 cursor-pointer">
          <img src="/leftBarIcons/econometrics.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#B1B1B1] hover:text-[#1814F3] duration-300">
            My Privileges
          </p>
        </li>

        <li className="flex items-center relative gap-6 cursor-pointer">
          <img src="/leftBarIcons/settingsActive.svg" alt="" />
          <p className="text-base md:text-[18px] font-medium text-[#1814F3] hover:text-[#1814F3] duration-300">
            Setting
          </p>

          <div className="absolute -left-[44px] w-[6px] h-[60px] rounded-tr-[10px] rounded-br-[10px] bg-[#1814F3]"></div>
        </li>
      </ul>
    </div>
  );
};

export default LeftBarLink;
