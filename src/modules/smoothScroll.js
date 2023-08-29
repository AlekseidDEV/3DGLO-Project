const smoothScroll = () => {
  const btnScroll = document.querySelector('a[href = "#service-block"]');
  const menu = document.querySelector("menu");

  const hendlerScroll = (e) => {
    e.preventDefault();
    document.getElementById("service-block").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const smoothLink = (identificator) => {
    const idBlock = identificator.slice(1)
    document.getElementById(idBlock).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  btnScroll.addEventListener("click", hendlerScroll);

  menu.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.className === '') smoothLink(e.target.hash)
  })
};

export default smoothScroll;
