import Chart from "@/components/Chart";
import ChartLoadMore from "@/components/Chart/ChartLoadMore";

export default function ChartPage() {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-gray-700 dark:border-gray-50">
        무비차트
      </h2>
      <div className="sm:grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-9 mt-6">
        <Chart />
        <ChartLoadMore />
      </div>
    </section>
  );
}
