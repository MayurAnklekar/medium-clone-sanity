import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-6'>
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif max-w-xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write, read and connect.
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-48 lg:h-96"
          src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png"
          alt=""
        />
      </div>
    </div>
  );
}
