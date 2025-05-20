import Chart from "@/components/Chart";
import ChartLoadMore from "@/components/Chart/ChartLoadMore";

export default function ChartPage() {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-4xl pb-5 border-b-2 border-gray-700 dark:border-gray-50 px-2.5">
        무비차트
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 mt-6 px-2.5">
        <Chart />
        <ChartLoadMore />
      </div>
    </section>
  );
}
