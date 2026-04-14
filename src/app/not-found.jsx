import Link from "next/link";
import React from "react";
import { FaRegAngry } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="max-w-lg text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-error/10">
          <span className="text-4xl"><FaRegAngry color="red" /></span>
        </div>

        <h1 className="text-6xl font-extrabold text-base-content">404</h1>
        <h2 className="mt-3 text-2xl font-bold text-base-content">
          Page not found
        </h2>
        <p className="mt-4 text-base-content/70">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
