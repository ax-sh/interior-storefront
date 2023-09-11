import { PageHeader } from "../ui/page-header.tsx";

export default function HomePage() {
  return (
    <div className={"px"}>
      <PageHeader>Rooms.</PageHeader>
      <section>
        <div className={"prose prose-headings:font-medium prose-h1:text-10xl"}>
          <img alt={"home"} src={"/home-card.jpg"} className={"rounded-md"} />
          <div className={"flex justify-between items-center"}>
            <h1 className={"m-0"}>European details</h1>
            <button className={"bg-black text-white px-10 py-2 text-xl"}>
              Explore
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
