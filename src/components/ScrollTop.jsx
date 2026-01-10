import useScrollTrigger from "@mui/material/useScrollTrigger";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#home"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
      <div
        onClick={handleClick}
        className="fixed bottom-16 right-16"
      >
        {children}
      </div>
  );
}

export default ScrollTop;
