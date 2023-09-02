import { useState } from "react";

const useActive = (cb) => {
  const [isActive, setActive] = useState(isActiveDefault);

  const mouseEnterHandler = () => {
    setActive(true);
    cb.?();
  };

  return {
    onMouseEnter: mouseEnterHandler,
    className: isActive ? "active" : ""
  }
}

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const props = useActive(mouseEnterCallbak);

  return (
    <div {...props}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  const props = useActive(mouseEnterCallbak);

  return (
    <div {...props}>
      <p>{content}</p>
    </div>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  const props = useActive(mouseEnterCallbak);

  return (
    <div {...props}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </div>
  );
};
