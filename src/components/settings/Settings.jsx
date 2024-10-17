import User from "../userIcon/User";

const Settings = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen w-full p-[25px] md:pt-[30px] md:px-[40px] md:pb-0">
      <div className="bg-white w-full h-full rounded-[25px] px-5 md:px-[30px] py-[22px] md:py-[30px]">
        <div className="flex flex-wrap gap-[42px] md:gap-[72px] border-b">
          <p className="text-[#1814F3] mb-2 cursor-pointer font-medium text-[13px] md:text-base relative ">
            Edit Profile{" "}
            <span className="absolute -bottom-2 -left-[6px] md:-left-4 bg-[#1814F3] w-[80px] md:w-[114px] h-[4px] rounded-tr-[10px] rounded-tl-[10px]"></span>
          </p>
          <p className="text-[#718EBF] mb-2 cursor-pointer font-medium text-[13px] md:text-base">
            Preference
          </p>
          <p className="text-[#718EBF] mb-2 cursor-pointer font-medium text-[13px] md:text-base">
            Security
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:py-[55px] gap-[53px]">
          <div className="mx-auto md:mx-0 w-[170px] md:w-[130px] h-[170px] md:h-[130px] my-[25px] relative flex-shrink-0">
            <User />

            <div className="w-[38px] md:w-[30px] cursor-pointer h-[38px] md:h-[30px] bg-[#1814F3] flex items-center justify-center rounded-[50%] absolute right-0 bottom-4">
              <img src="/common/pencil.svg" alt="" className="" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[29px] gap-y-4 md:gap-y-[22px] p-4 w-full">
            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">Your Name</p>
              <input
                type="text"
                placeholder="Charlene Reed"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">User Name</p>
              <input
                type="text"
                placeholder="Charlene Reed"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">Email</p>
              <input
                type="email"
                placeholder="charlenereed@gmail.com"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">Password</p>
              <input
                type="password"
                placeholder="**********"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">
                Date of Birth
              </p>

              <div className="relative">
                <select className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px] pr-[34px] md:pr-[34px] appearance-none">
                  <option className="">25 January 1990</option>
                </select>

                <img
                  src="/common/dropdown.svg"
                  alt=""
                  className="absolute right-[15px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">
                Present Address
              </p>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">
                Permanent Address
              </p>
              <input
                type="text"
                placeholder="San Jose, California, USA"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">City</p>
              <input
                type="text"
                placeholder="San Jose"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">Postal Code</p>
              <input
                type="text"
                placeholder="45962"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>

            <div className="w-full">
              <p className="text-[13px] md:text-base mb-[10px]">Country</p>
              <input
                type="text"
                placeholder="USA"
                className="border w-full text-[13px] md:text-base outline-none text-[#8BA3CB] placeholder-[#8BA3CB] rounded-[15px] px-[15px] py-[13px] md:px-[20px] md:py-[16px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5">
          <button className="bg-[#1814F3] py-[11px] md:py-[14px] w-full md:w-auto px-[74px] font-medium text-white rounded-[9px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
