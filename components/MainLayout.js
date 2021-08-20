import React from "react";
import Head from "next/head";
import Link from "next/link";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>BLOG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        ></link>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" href="#">
              Blogs
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/posts">
                  <a className="nav-link active" aria-current="page">
                    Posts
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Create Post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default MainLayout;
