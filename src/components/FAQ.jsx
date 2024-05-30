import { useState, useRef } from "react";
import Markdown from "react-markdown";

const FAQQuestion = ({ open: { open, setOpen }, question: { question, answer, text, hyperRef }, i }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const isOpen = open === i;

  return (
    <li
      className="flex flex-col shadow-card hover:shadow-cardMedium transition px-6 md:px-10 py-4 md:py-4 lg:py-6 rounded-xl cursor-pointer"
      onClick={() => {
        setOpen(isOpen ? -1 : i);
        setHeight(contentRef.current.clientHeight);
      }}>
      <div className="flex justify-between items-center gap-2">
        <h3 className="font-bold text-p sm:text-large lg:text-large">{question}</h3>

        <svg
          width={40}
          height={40}
          data-slot="icon"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            transform: isOpen ? `rotate(180deg)` : "rotate(0deg)",
          }}
          className="transition-transform duration-300 ease-in-out min-w-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
        </svg>
      </div>

      <div
        className="relative overflow-hidden transition-height duration-300 ease-in-out"
        style={{
          height: isOpen ? height : 0,
        }}>
        <div className="h-fit flex flex-col gap-6" ref={contentRef}>
          <div class="w-full">
            <Markdown className="w-full prose-lg prose-zinc prose-a:text-light-blue font-regular mt-4">{answer.trim()}</Markdown>
          </div>

          {hyperRef && (
            <a target="_blank" className="bg-cph-blue hover:bg-light-blue transition text-cph-white font-large font-semibold px-11 py-3 rounded-lg self-start" href={hyperRef}>
              {text}
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export function FAQ({ faqQuestions, headlineText, paragraphText }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="grid py-10 w-full gap-4">
      <div>
        <h2 className="text-5 sm:text-4 font-bold text-cph-blue py-3">{headlineText}</h2>
        <p className="text-p md:text-large">{paragraphText}</p>
      </div>
      <div>
        <ul className="grid gap-4">
          {faqQuestions.map((question, i) => (
            <FAQQuestion
              key={i}
              {...{
                open: { open, setOpen },
                question,
                i,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
