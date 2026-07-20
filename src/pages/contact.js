import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

// Netlify Form config

export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a thank you page
        router.push("/thanks");
      } else {
        // Handle error
        console.error("Form submission failed!", response);
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Emmanuel Udorah</title>
        <meta
          name="description"
          content="My portfolio"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Begin Today,
I'm One Message Away"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl bg-transparent p-6 xs:p-4">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                What’s Next?
              </h2>

              <div className="w-full"></div>
              <p className="">
                My inbox is always open. Whether you have a question or just
                want to say hello, I'll try my best to get back to you! Feel
                free to message me about any relevant project updates.
              </p>
            </div>
            <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl bg-transparent p-6 xs:p-4">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form
                    name="contact-form"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />
                    <p className="hidden">
                      <label>
                        Name
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark dark:text-light">
                        Your Name:
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          className="mt-1 w-full rounded-md border border-dark/20 bg-transparent px-3 py-2 outline-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] dark:border-light/30 dark:text-light dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                        Your Email:
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="off"
                          className="mt-1 w-full rounded-md border border-dark/20 bg-transparent px-3 py-2 outline-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] dark:border-light/30 dark:text-light dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark/75 dark:text-light/75"
                      >
                        Message:
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows="4"
                          className="mt-1 w-full rounded-md border border-dark/20 bg-transparent px-3 py-2 outline-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] dark:border-light/30 dark:text-light dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]"
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <button
                        type="submit"
                        className="px-4 py-2 font-semibold capitalize text-light bg-dark rounded-md hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark"
                      >
                        Send it!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
