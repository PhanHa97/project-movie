import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../HomeTemplate/_component/Footer";
import Navbar from "../HomeTemplate/_component/Navbar";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="flex items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-coolGray-400">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                to="/"
                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
