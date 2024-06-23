import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[9rem_1fr]  sm:grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div className="pt-9 pb-1 sm:py-1 ">{children}</div>
    </div>
  );
}
