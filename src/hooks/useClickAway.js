import { useRef, useEffect } from "react";

const events = ["mousedown", "touchstart"];

function useClickAway(handler) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e) => {
      if (!element.contains(e.target)) handler();
    };

    events.forEach((event) => document.addEventListener(event, handleEvent));

    // eslint-disable-next-line
    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvent)
      );
    };
  });

  return ref;
}

export default useClickAway;
