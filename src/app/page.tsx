import HomePage from "@/components/pages/HomePage";

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: [] = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage data={data} />
    </main>
  );
}
