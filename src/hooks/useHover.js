import { useState } from "react";

const useHover = (target) => {
  const [isHovering, setIsHovering] = useState({ ...target });

  const handleMouseEnter = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setIsHovering({ ...isHovering, [name]: true });
  };

  const handleMouseLeave = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setIsHovering({ ...isHovering, [name]: false });
  };

  return [isHovering, handleMouseEnter, handleMouseLeave];
};

export default useHover;
