import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// feat:  pages/index is Home -> the main page -> automatic defined as default by NextJS
//        from this link, we can route to different pages using <Link> with href and place pages inside pages package
//        `pages` is dynamic name, can define the different name

// feat:  Client-side Navigation | if we change background using dev tool chrome, and using navigation from <LinK>
//        we'll see the transition meaning not refreshing all the page -> quick response time

// feat:  Code-splitting | only loading the page currently display -> if load Home page only have home page js load
// feat:  Prefetching | when the Link display in the page, it will automatic prefetching page which has href refer to in background

// how:  assets file | can be put in public/images
// feat:  optimising images | to avoid loading large images in the small viewport -> using <Image> from NextJS
//        it will resize, optimise, serving as WebP format which browsers support
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Nextjs app by Clark ver 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          {/*  // feat: using <Link> with href for Navigation between pages -> href value will have route */}
          <Link href="/posts/first-post">
            <a>Next.js by Clark. It is the first tutorial!</a>
          </Link>
        </h1>
        <Image
          src="/images/house.jpg"
          alt="Vercel Logo"
          className="normal-image"
          width={300}
          height={300}
        />

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {" "}
          tao mot cai moi DONE chuyen ve cai 1
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
