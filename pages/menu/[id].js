import Details from "@/components/templates/Details";

export default function DetailsPage({ data }) {
  return <Details {...data} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
    const data = await res.json();

    return {
      props: { data },
      revalidate: +process.env.REVALIDATE,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true, // هدایت کاربر به صفحه 404
    };
  }
}
