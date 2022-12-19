import Layout from "@/layout";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import SearchResult from "@/components/SearchResult";

export default function Homepage() {
  return (
    <Layout>
      <Hero />
      <main className="content relative z-0 -mt-1">
        <section className="container z-10 mx-auto -mt-20">
          <Filters />
          <SearchResult />
        </section>
      </main>
      <style jsx>
        {`
          .content {
            background-color: #ddaa5d;
          }
        `}
      </style>
    </Layout>
  );
}
