import React, { useEffect } from "react";

interface OutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler(): void;
}

const useOutsideClick = ({ ref, handler }: OutsideClickHandlerProps) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
