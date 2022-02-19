import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About DevSpace">
      <h1 className="text-5xl border-b-4 pb-5 font-bold"></h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Football Supreme</h3>

        <p className="mb-3">
          This blog aims to review the big matches in the English Premier League, UEFA Champions League and major international tournaments such as the upcoming World Cup. I also aim to talk about potential hot prospects in the world of football and other stuff related to the most talked about sport.
        </p>

        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
}
