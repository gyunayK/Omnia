import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqData } from "./faqData";

function Faq() {
  return (
    <section className="py-20 my-20 w-full " id="faq">
      <div className="max-w-6xl px-5 md:px-0 mx-auto font-Archivo flex flex-col gap-10 md:gap-0 md:flex-row md:space-x-96">
        <div>
          <h1 className="text-md font-bold text-[#0026FF] whitespace-nowrap">
            INCREASE VALUES
          </h1>
          <h1 className="text-5xl pt-6 font-extrabold text-black">FAQ</h1>
        </div>

        <div className="w-full flex flex-col gap-3">
          {faqData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none f ">
                        <span className="font-Archivo uppercase text-md font-bold text-[#0019A5]">
                          {item.question}
                        </span>
                        <ChevronUpIcon
                          className={`transition-transform duration-300 ease-out ${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-h-6 text-blue-500 `}
                        />
                      </Disclosure.Button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          open ? "h-[120px]" : "h-0"
                        }`}
                      >
                        <Disclosure.Panel
                          className={`opacity-0 duration-300 ease-out ${
                            open ? "opacity-100" : ""
                          } px-4 pt-4 pb-2 text-md text-[#441655]`}
                        >
                          {item.answer}
                        </Disclosure.Panel>
                      </div>

                      <div className="border-t-[1px] border-y-pink-500"></div>
                    </>
                  )}
                </Disclosure>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
