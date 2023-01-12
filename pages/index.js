import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import products from "../products.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("products", products);
  return (
    <>
      <Head>
        <title>Space Jelly Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Space Jelly Shop</h1>
        <div className={styles.description}>
          The best space jellyfish swag in the universe!
        </div>
        <ul className={styles.grid}>
          {products.map(({ id, title, description, price, image }) => (
            <li className={styles.card} key={id}>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
