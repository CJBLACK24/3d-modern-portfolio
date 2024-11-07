"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils"; 
export const TextGenerateEffect = ({ words, className }) => {

  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 2,
      },
      {
        duration: 5,
        delay: stagger(0.3),
      }
    );
  }, [scope.current, animate, wordsArray]);
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={` ${idx > 3 ? "text-purple" : "text-gray_gradient text-black"} opacity-0`}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  return (
    <div className={cn(className)}>
      <div className="my-1">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};