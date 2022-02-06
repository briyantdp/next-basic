import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function User({ dataUsers }) {
  const router = useRouter();
  console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      <main>
        <h1 className="text-blue-500 font-bold text-4xl">
          Ini adalah halaman user
        </h1>
        {dataUsers.map((user) => {
          return (
            <div
              key={user.id}
              className="px-14 py-10 shadow-md rounded-xl my-8 hover:cursor-pointer hover:bg-blue-600 hover:text-white"
              onClick={() => router.push(`/users/${user.id}`)}
            >
              <p className="text-lg my-2">{user.name}</p>
              <p className="text-lg my-2">{user.email}</p>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
