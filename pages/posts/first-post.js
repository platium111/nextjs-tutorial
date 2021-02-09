import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// ! need to have export default
export default function FirstPost() {
  return (
    <>
      {/* // how:  Modifying Head | why using <Head> ? because you can modify head of the page */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      {/* // ! / is used to going from public -> don't use ../../ */}
      <Image
        src="/images/house.jpg"
        alt="Vercel Logo"
        className="normal-image"
        width={300}
        height={300}
      />

      {/* how:  styling | using build in styled-jsx */}
      <style jsx>
        {`
          h1 {
            color: green;
          }
        `}
      </style>
    </>
  );
}
