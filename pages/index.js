import Link from "next/link";
import Layout from "../components/layout";

import { getSortedList } from "../lib/data";

export async function getStaticProps() {

  const allData = await getSortedList();
  console.log(allData)
  return {
    props: { allData }
  };
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <h1>List of Posts</h1>
      <div className="list-group">
        {allData.map(
          ({ id, name }) => (
            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )

        }
      </div>
    </Layout>
  );
}