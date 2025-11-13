import React, { useCallback, useEffect } from "react";

interface OutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler(): void;
}

const useOutsideClick = ({ ref, handler }: OutsideClickHandlerProps) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
};

export default useOutsideClick;
