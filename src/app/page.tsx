import Filter from "@/components/modules/Filter";
import HomePage from "@/components/pages/HomePage";

async function getData() {
  const revalidate = 3600 * 24; // update data every 24 hour
  const res = await fetch("https://restcountries.com/v3.1/all", {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: [] = await getData();

  return (
    <main className="">
      <HomePage data={data} />
    </main>
  );
}
