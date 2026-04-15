const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">KeenKeeper</h2>
            <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Social Link</h3>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a className="cursor-pointer transition hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a className="cursor-pointer transition hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              <a className="cursor-pointer transition hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/20" />

        <div className="flex flex-col items-center gap-4 text-center text-sm text-white/80 md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
