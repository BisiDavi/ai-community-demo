import Layout from "@/layout";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";

export default function Homepage() {
  return (
    <Layout>
      <Hero />
      <main>
        <section>
          <Filters />
        </section>
      </main>
    </Layout>
  );
}
