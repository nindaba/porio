export default function Navbar() {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="text-2xl font-bold tracking-tight">
              Arthur Nindaba
            </h1>
            {/* <img */}
            {/*   className="h-8 w-auto text-indigo-600" */}
            {/*   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" */}
            {/*   alt="" */}
            {/* /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm/6 font-semibold"
              aria-expanded="false"
            >
              <svg
                className="size-5 stroke-zinc-900 dark:stroke-zinc-200"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  d="M6.11367 2.58499C5.03436 2.7385 4.01128 3.16208 3.13932 3.81643C2.26737 4.47078 1.57476 5.33472 1.12574 6.32813C0.67672 7.32154 0.485822 8.41224 0.57075 9.49911C0.655679 10.586 1.01368 11.6338 1.61156 12.5454L0.525879 15.4737L4.16143 14.8164C5.09627 15.2742 6.12785 15.4995 7.16844 15.4731C8.20904 15.4467 9.22788 15.1695 10.1383 14.6649C11.0488 14.1603 11.8239 13.4432 12.3978 12.5748C12.9717 11.7064 13.3273 10.7122 13.4346 9.6768M8.99005 3.90371C8.65635 3.84566 8.65635 3.36662 8.99005 3.30857C10.199 3.09825 11.1605 2.17745 11.4229 0.978759L11.443 0.886875C11.5152 0.557077 11.9848 0.555024 12.0598 0.884179L12.0843 0.991258C12.3564 2.18429 13.3182 3.09732 14.5237 3.30705C14.8591 3.3654 14.8591 3.84688 14.5237 3.90523C13.3182 4.11496 12.3564 5.02799 12.0843 6.22102L12.0598 6.3281C11.9848 6.65726 11.5152 6.6552 11.443 6.32541L11.4229 6.23352C11.1605 5.03483 10.199 4.11403 8.99005 3.90371Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="text-sm/6 font-semibold">
            Experience
          </a>
          <a href="#" className="text-sm/6 font-semibold">
            Skills
          </a>
          <a href="#" className="text-sm/6 font-semibold">
            About
          </a>
          <a href="#" className="flex items-center text-sm/6 font-semibold">
            <span className="sr-only">Download Cv</span>
            <svg
              className="size-4 stroke-zinc-900 dark:stroke-zinc-200"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8L7 10M7 10L5 8M7 10V4.5M12.5 12.5C12.5 12.7652 12.3946 13.0196 12.2071 13.2071C12.0196 13.3946 11.7652 13.5 11.5 13.5H2.5C2.23478 13.5 1.98043 13.3946 1.79289 13.2071C1.60536 13.0196 1.5 12.7652 1.5 12.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H9L12.5 4V12.5Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="xhidden lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="text-2xl font-bold tracking-tight">
                Arthur Nindaba
              </h1>
              {/* <img */}
              {/*   className="h-8 w-auto" */}
              {/*   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" */}
              {/*   alt="" */}
              {/* /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3"></div>
                <a
                  href="#"
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  <svg
                    className="size-5 stroke-zinc-900 dark:stroke-zinc-200"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      d="M6.11367 2.58499C5.03436 2.7385 4.01128 3.16208 3.13932 3.81643C2.26737 4.47078 1.57476 5.33472 1.12574 6.32813C0.67672 7.32154 0.485822 8.41224 0.57075 9.49911C0.655679 10.586 1.01368 11.6338 1.61156 12.5454L0.525879 15.4737L4.16143 14.8164C5.09627 15.2742 6.12785 15.4995 7.16844 15.4731C8.20904 15.4467 9.22788 15.1695 10.1383 14.6649C11.0488 14.1603 11.8239 13.4432 12.3978 12.5748C12.9717 11.7064 13.3273 10.7122 13.4346 9.6768M8.99005 3.90371C8.65635 3.84566 8.65635 3.36662 8.99005 3.30857C10.199 3.09825 11.1605 2.17745 11.4229 0.978759L11.443 0.886875C11.5152 0.557077 11.9848 0.555024 12.0598 0.884179L12.0843 0.991258C12.3564 2.18429 13.3182 3.09732 14.5237 3.30705C14.8591 3.3654 14.8591 3.84688 14.5237 3.90523C13.3182 4.11496 12.3564 5.02799 12.0843 6.22102L12.0598 6.3281C11.9848 6.65726 11.5152 6.6552 11.443 6.32541L11.4229 6.23352C11.1605 5.03483 10.199 4.11403 8.99005 3.90371Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="inline-block">ChatCV</span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Experience
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  <svg
                    className="my-0 inline-block size-5 stroke-zinc-900 dark:stroke-zinc-200"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 8L7 10M7 10L5 8M7 10V4.5M12.5 12.5C12.5 12.7652 12.3946 13.0196 12.2071 13.2071C12.0196 13.3946 11.7652 13.5 11.5 13.5H2.5C2.23478 13.5 1.98043 13.3946 1.79289 13.2071C1.60536 13.0196 1.5 12.7652 1.5 12.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H9L12.5 4V12.5Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="mx-2 my-0 inline-block">Download CV</span>
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
