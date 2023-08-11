import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function Faq() {
  return (
    <section className="py-20 my-20 w-full border-t-2" id="faq">
      <div className="max-w-6xl p-5 mx-auto font-Archivo flex flex-col gap-10 md:gap-0 md:flex-row md:space-x-96">
        <div>
          <h1 className="text-md font-bold text-[#01AEEF]">INCREASE VALUES</h1>
          <h1 className="text-5xl pt-6 font-extrabold text-black">FAQ</h1>
        </div>

        <div className="w-full    flex flex-col gap-3">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none f ">
                  <span className="font-Archivo uppercase text-lg font-semibold text-[#01AEEF]">
                    What is your refund policy?
                  </span>
                  <ChevronUpIcon
                    className={`transition-transform duration-300 ease-out ${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-h-6 text-blue-500 `}
                  />
                </Disclosure.Button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open ? "h-[100px]" : "h-0"
                  }`}
                >
                 
                  <Disclosure.Panel
                    className={`opacity-0 duration-300 ease-out ${
                      open ? "opacity-100" : ""
                    } px-4 pt-4 pb-2 text-lg text-[#B200F3]`}
                  >
                    If you&apos;re unhappy with your purchase for any reason,
                    email us within 90 days and we&apos;ll refund you in full,
                    no questions asked.
                  </Disclosure.Panel>
                </div>

                <div className="border-t-[1px] border-y-pink-500"></div>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none f ">
                  <span className="font-Archivo uppercase text-lg font-semibold text-[#01AEEF]">
                    What is your refund policy?
                  </span>
                  <ChevronUpIcon
                    className={`transition-transform duration-300 ease-out ${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-h-6 text-blue-500 `}
                  />
                </Disclosure.Button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open ? "h-[100px]" : "h-0"
                  }`}
                >
                 
                  <Disclosure.Panel
                    className={`opacity-0 duration-300 ease-out ${
                      open ? "opacity-100" : ""
                    } px-4 pt-4 pb-2 text-lg text-[#B200F3]`}
                  >
                    If you&apos;re unhappy with your purchase for any reason,
                    email us within 90 days and we&apos;ll refund you in full,
                    no questions asked.
                  </Disclosure.Panel>
                </div>

                <div className="border-t-[1px] border-y-pink-500"></div>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none f ">
                  <span className="font-Archivo uppercase text-lg font-semibold text-[#01AEEF]">
                    What is your refund policy?
                  </span>
                  <ChevronUpIcon
                    className={`transition-transform duration-300 ease-out ${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-h-6 text-blue-500 `}
                  />
                </Disclosure.Button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open ? "h-[100px]" : "h-0"
                  }`}
                >
                 
                  <Disclosure.Panel
                    className={`opacity-0 duration-300 ease-out ${
                      open ? "opacity-100" : ""
                    } px-4 pt-4 pb-2 text-lg text-[#B200F3]`}
                  >
                    If you&apos;re unhappy with your purchase for any reason,
                    email us within 90 days and we&apos;ll refund you in full,
                    no questions asked.
                  </Disclosure.Panel>
                </div>

                <div className="border-t-[1px] border-y-pink-500"></div>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none f ">
                  <span className="font-Archivo uppercase text-lg font-semibold text-[#01AEEF]">
                    What is your refund policy?
                  </span>
                  <ChevronUpIcon
                    className={`transition-transform duration-300 ease-out ${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-h-6 text-blue-500 `}
                  />
                </Disclosure.Button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open ? "h-[100px]" : "h-0"
                  }`}
                >
                 
                  <Disclosure.Panel
                    className={`opacity-0 duration-300 ease-out ${
                      open ? "opacity-100" : ""
                    } px-4 pt-4 pb-2 text-lg text-[#B200F3]`}
                  >
                    If you&apos;re unhappy with your purchase for any reason,
                    email us within 90 days and we&apos;ll refund you in full,
                    no questions asked.
                  </Disclosure.Panel>
                </div>

                <div className="border-t-[1px] border-y-pink-500"></div>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
}

export default Faq;
