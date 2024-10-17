const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex gap-[15px] w-full bg-[#F5F7FA] py-3 px-5 md:py-4 rounded-[40px]">
          <img src="/common/search.svg" alt="" />

          <input
            type="text"
            placeholder="Search for something"
            className="border-0 outline-none bg-[#F5F7FA] text-[#8BA3CB] text-[13px] md:text-base placeholder-[#8BA3CB] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
