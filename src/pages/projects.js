import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HireMe2 } from "@/components/HireMe2";
import proj1 from "../../public/images/projects/portofolio.png";

import proj2 from "../../public/images/projects/weather app.png";

import proj3 from "../../public/images/projects/admin dashboard.png";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  date,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center justify-between overflow-hidden rounded-[2rem] border border-solid border-dark/10 bg-light p-10 shadow-lg dark:border-light/10 dark:bg-dark lg:flex-col lg:p-8 xs:rounded-3xl xs:p-5"
    >
      <Link href={link} className="w-1/2 overflow-hidden rounded-2xl lg:w-full">
        <Image
          src={img}
          className="h-auto w-full rounded-2xl object-cover"
          alt={title}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-dark/10 bg-dark px-3 py-1 text-sm font-semibold text-light dark:border-light/10 dark:bg-light dark:text-dark">
            {type}
          </span>
          <span className="rounded-full border border-dark/10 px-3 py-1 text-sm font-medium text-dark/70 dark:border-light/10 dark:text-light/70">
            {date}
          </span>
        </div>
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary dark:text-primaryDark">
          {tools}
        </span>
        <Link href={link} className="mt-3 underline-offset-4 hover:underline">
          <h2 className="w-full text-left text-4xl font-bold leading-tight lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-4 max-w-xl rounded-2xl text-base leading-7 text-dark/80 dark:text-light/80 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center gap-4">
          {github ? (
            <Link
              href={github}
              target={"_blank"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-dark text-light dark:border-light/10 dark:bg-light dark:text-dark"
              aria-label="github link"
            >
              <GithubIcon />
            </Link>
          ) : null}
          <Link
            href={link}
            className="inline-flex items-center rounded-full border border-dark bg-dark px-6 py-3 text-base font-semibold capitalize text-light dark:border-light dark:bg-light dark:text-dark"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-solid border-dark/10 bg-light p-5 shadow-lg dark:border-light/10 dark:bg-dark xs:p-4"
    >
      <Link href={link} className="w-full overflow-hidden rounded-2xl">
        <Image
          src={img}
          alt={title}
          className="h-auto w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-5 flex w-full flex-col items-start justify-between">
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary dark:text-primaryDark">
          {type}
        </span>
        <h2 className="mt-2 text-2xl font-bold text-dark dark:text-light lg:text-xl md:text-lg">
          {title}
        </h2>
        <span className="mt-1 text-sm font-medium text-dark/70 dark:text-light/70 xs:text-base">
          {tools}
        </span>
        <div className="mt-5 flex w-full items-center justify-between">
          <Link
            href={link}
            className="inline-flex items-center rounded-full border border-dark/10 bg-dark px-5 py-2.5 text-sm font-semibold capitalize text-light dark:border-light/10 dark:bg-light dark:text-dark"
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | By Emmy</title>
        <meta
          name="description"
          content="Emmy's Projects."
        />
      </Head>

      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <h1 className="mb-14 text-center text-8xl font-bold leading-tight text-dark dark:text-light lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl">
            My Projects, My Passion
          </h1>
          <div className="grid grid-cols-12 gap-8 gap-y-10 xl:gap-x-6 lg:gap-x-5 md:gap-y-8 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                tools="HTML | CSS | JavaScript "
                title="First Portfolio"
                img={proj1}
                link="https://emmydev.me"

              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                tools="Next.js | Tailwind CSS | TypeScript | Open-Meteo API"
                title="Weather Forecast"
                img={proj2}
                link="https://weather-forecast-two-teal.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                tools="Next.js | Tailwind CSS | TypeScript"
                title="Admin Dashboard"
                img={proj3}
                link="https://admin-dashboard-tau-three-49.vercel.app/dashboard"
              />
            </div>
          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">
            </ul>

            <div className="mt-2 flex items-center justify-center gap-3 grid-cols-2">
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
