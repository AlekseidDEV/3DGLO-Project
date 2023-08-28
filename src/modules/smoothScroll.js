const smoothScroll = () => {
  const btnScroll = document.querySelector('a[href = "#service-block"]');
  const menu = document.querySelector("menu");
  const itemsMenu = menu.querySelectorAll("a");

  const hendlerScroll = (e) => {
    e.preventDefault();
    document.getElementById("service-block").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const smoothLink = (item) => {
    const blockId = item.getAttribute("href").slice(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  itemsMenu.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();
      smoothLink(item);
    })
  );
  btnScroll.addEventListener("click", hendlerScroll);
};

export default smoothScroll;
