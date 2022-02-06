import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout pageTitle="Home Page">
        <main className={styles.main}>
          <h1 className={styles.title}>Ini adalah halaman home</h1>
          <Image
            src="/code.png"
            alt="Code wallpaper"
            width={300}
            height={300}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            eveniet tempore voluptate nisi repellat dignissimos laboriosam
            aliquid reprehenderit voluptates incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            laborum?
          </p>
          <Image
            src="/night.jpg"
            alt="Code wallpaper"
            width={400}
            height={300}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            eveniet tempore voluptate nisi repellat dignissimos laboriosam
            aliquid reprehenderit voluptates incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            laudantium ex, blanditiis molestiae dolorem obcaecati animi
            voluptatibus nulla aut consectetur rem facere autem sint quasi
            suscipit ipsum quaerat id ullam.
          </p>
          <Image
            src="/astro.jpg"
            alt="Code wallpaper"
            width={300}
            height={300}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            eveniet recusandae sunt repellat distinctio eligendi?
          </p>
        </main>
      </Layout>
    </div>
  );
}
