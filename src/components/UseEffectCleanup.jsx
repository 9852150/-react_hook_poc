useEffect(() => {
  const handleResize = () => {
    console.log("Window resized");
  };

  window.addEventListener("resize", handleResize);

  // Cleanup function that will be called when the component is unmounted
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Empty array ensures it runs only once (componentDidMount)
