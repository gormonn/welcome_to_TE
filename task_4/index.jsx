import { useState } from "react";

const useActive = (cb) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    cb.?();
  };

  return {
    onMouseEnter: mouseEnterHandler,
    className: isActive ? "active" : ""
  }
}

// пишу с телефона
// хук - первое что пришло в голову,
// вместо этого можно было бы использовать
// компонент:
// const MouseEnterView = ({ children, mouseEnterCallbak }) => {
//    const props = useActive(mouseEnterCallbak);
//    return <div {...props}>{children}</div>
// }
// в таком случае можно обойтись без хука
// кроме того, я бы вынес Wrapper за пределы блоков.
// чтобы не пробрасывать логику туда где она не требуется

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
