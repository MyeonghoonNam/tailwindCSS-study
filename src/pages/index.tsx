import Link from "next/link";

const Home = () => {
  return (
    <>
      <header>
        <h1>Tailwind CSS Study</h1>
      </header>

      <main>
        <ul>
          <li>
            <Link href="/basic">Basic</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
