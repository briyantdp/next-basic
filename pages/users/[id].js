import Layout from "../../components/Layout";

export default function UserDetails({ user }) {
  return (
    <Layout pageTitle={`User ${user.id} Page`}>
      <main className="pr-32 pl-8 py-12 shadow-md rounded-xl my-8 hover:bg-blue-600 hover:text-white">
        <h1 className="font-bold text-4xl my-3">{user.name}</h1>
        <p className="text-lg">{user.username}</p>
        <p className="text-lg">{user.phone}</p>
        <p className="text-lg">{user.website}</p>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();
  const paths = dataUsers.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user: user,
    },
  };
}
