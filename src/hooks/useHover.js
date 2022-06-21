import { useState } from "react";

const useHover = (target, type = "") => {
  const [isHovering, setIsHovering] = useState({ ...target });

  const handleMouseEnter = (e) => {
    if (type === "detail") {
      return;
    }
    const name = e.currentTarget.getAttribute("name");
    setIsHovering({ ...isHovering, [name]: true });
  };

  const handleMouseLeave = (e) => {
    if (type === "detail") {
      return;
    }
    const name = e.currentTarget.getAttribute("name");
    setIsHovering({ ...isHovering, [name]: false });
  };

  return [isHovering, handleMouseEnter, handleMouseLeave];
};

export default useHover;
