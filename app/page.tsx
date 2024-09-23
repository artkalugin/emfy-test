import LeadsList from "./components/leadsList";

export default async function Home() {
  return (
      <main>
        <div className="container">
          <LeadsList />
        </div>
      </main>
  );
}
