import Chart from "@/components/Movies/Chart";

export default function MoviesPage() {
  return (
    <section>
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        무비차트
      </h2>
      <Chart />
    </section>
  );
}
