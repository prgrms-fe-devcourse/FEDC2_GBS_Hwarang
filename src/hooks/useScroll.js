import { useEffect, useRef } from "react";
import useRafState from "./useRafState";

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return [ref, state];
};

export default useScroll;
