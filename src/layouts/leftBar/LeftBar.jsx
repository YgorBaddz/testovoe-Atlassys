import LeftBarLink from "../../components/LeftBarLink";

const LeftBar = () => {
  return (
    <div className="flex-shrink-0 hidden h-screen md:flex w-[175px] lg:w-[246px] border-r pt-[31px] px-[25px] lg:px-[38px]">
      <LeftBarLink />
    </div>
  );
};

export default LeftBar;
