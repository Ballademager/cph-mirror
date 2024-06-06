import { useTransition, animated } from "@react-spring/web";
import { clsx } from "../javascript/utils";

export default function Modal({
  title,
  isOpen,
  close,
  doClose = true,
  children,
  cardClasses,
}) {
  const transitions = useTransition([isOpen], {
    from: { open: 0 },
    enter: { open: 1 },
    leave: { open: 0 },
    config: { tension: 800, friction: 50 },
  });

  return transitions((style, item) => {
    if (!item) return null;

    return (
      <animated.div
        className="fixed inset-0 z-50"
        style={{ opacity: style.open }}
      >
        <div
          className="absolute inset-0 bg-[#000000] opacity-50 z-[-1]"
          onClick={close}
        />

        <div className="flex justify-center items-center w-full h-full pointer-events-none px-3">
          <animated.div
            className={clsx(
              "bg-cph-white flex flex-col shadow-card py-6 px-8 w-full justify-center max-w-[400px] items-center rounded-xl gap-2 pointer-events-auto",
              cardClasses ?? "",
            )}
            style={{
              transform: style.open
                .to({
                  range: [0.0, 1.0],
                  output: [0.85, 1],
                })
                .to((value) => `scale(${value})`),
            }}
          >
            {(title || doClose) && (
              <div className="flex justify-between w-full items-center">
                <p className="text-6 font-semibold">{title}</p>

                <button onClick={close}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
                    />
                  </svg>
                </button>
              </div>
            )}

            {children}
          </animated.div>
        </div>
      </animated.div>
    );
  });
}
