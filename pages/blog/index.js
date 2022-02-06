import Layout from "../../components/Layout";

export default function Blog({ posts }) {
  return (
    <Layout pageTitle="Blog Page">
      <main>
        <h1 className="text-blue-500 font-bold text-4xl">
          Ini adalah halaman blog
        </h1>
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="px-10 py-4 shadow-md rounded-xl my-8 hover:cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              <h1 className="font-bold text-xl">{post.title}</h1>
              <p className="text-md">{post.body}</p>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts,
    },
  };
}
