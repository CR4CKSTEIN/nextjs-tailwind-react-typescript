"use client";

import React from "react";

export default function HomePage() {
  const [currentUser, setCurrentUser] = React.useState(null);
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="items-center justify-center text-center">
        <div className="mx-auto flex h-full w-full max-w-cover flex-col p-4">
          <header className="mb-auto">
            <div>
              <h3 className="mb-0 md:float-left">YelpCamp</h3>
              <nav className="justify-center md:float-right">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="/campgrounds">
                  Campgrounds
                </a>
                {!currentUser ? (
                  <>
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                    <a className="nav-link" href="/register">
                      Register
                    </a>
                  </>
                ) : (
                  <a className="nav-link" href="/logout">
                    Logout
                  </a>
                )}
              </nav>
            </div>
          </header>
        </div>
      </div>
      <div className="">
        <main className="px-3">
          <h1>YelpCamp</h1>
          <p className="">
            Welcome to YelpCamp <br /> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iure maiores ipsa quia sint suscipit magnam
            aliquid fuga, doloremque obcaecati nostrum omnis fugit, quas
            deleniti. Quod laborum libero inventore delectus aperiam?
          </p>
          <a
            href="/campgrounds"
            className="btn-secondary btn-secondary rounded border border-white bg-white px-4 py-2 text-lg font-bold !mt-10"
          >
            View Campgrounds
          </a>
        </main>
      </div>
      <div>
        <footer className="text-white opacity-50">
          <p>&copy; 2023 Crackstein</p>
        </footer>
      </div>
    </div>
  );
}

{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>YelpCamp</h1>
      <p>
        YelpCamp Welcome to YelpCamp Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Iure maiores ipsa quia sint suscipit magnam aliquid
        fuga, doloremque obcaecati nostrum omnis fugit, quas deleniti. Quod
        laborum libero inventore delectus aperiam?
      </p>
      <a href="/campgrounds" className="px-4 py-2 rounded bg-white text-gray-700 border border-white font-bold text-lg hover:bg-gray-200">View Campgrounds</a>
    </main> */
}
