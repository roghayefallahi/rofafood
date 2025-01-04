import Categories from "@/components/templates/Categories";

export default function CategoriesPage({ data }) {
  return <Categories data={data} />;
}

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResault = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetail = cookingTime.split(" ")[0];
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResault.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResault.length) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
}
