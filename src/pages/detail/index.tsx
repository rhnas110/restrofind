import { IoHome } from "react-icons/io5";
import { PageWrapper } from "../../components/page-wrapper";
import { Detail as DetailLayout } from "../../components/features/detail";
export const Detail = () => {
  return (
    <PageWrapper>
      <DetailLayout />
      <a
        href="/"
        title="Home"
        className="fixed flex items-center justify-center w-10 h-10 rounded-full cursor-pointer sm:w-12 sm:h-12 bg-stone-500/75 sm:bottom-4 sm:right-4 bottom-2 right-2"
      >
        <IoHome size={25} className="text-[#F9F8F6]" />
      </a>
    </PageWrapper>
  );
};
