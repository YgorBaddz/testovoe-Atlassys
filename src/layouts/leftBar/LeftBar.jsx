import LeftBarLink from "../../components/LeftBarLink";

const LeftBar = () => {
  return (
    <div className="flex-shrink-0 hidden h-screen md:flex w-[246px] border-r pt-[31px] pl-[44px] pr-[35px]">
      <LeftBarLink />
    </div>
  );
};

export default LeftBar;
