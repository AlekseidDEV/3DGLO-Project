const tabs = () => {
  const tabContent = document.querySelectorAll(".service-tab");
  const tabPanel = document.querySelector(".service-header");
  const tabsBtn = document.querySelectorAll(".service-header-tab");

  const swithTab = (e) => {
    if (e.target.closest(".service-header-tab")) {
      tabsBtn.forEach((tab, index) => {
        if (tab === e.target.closest(".service-header-tab")) {
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  };
  

  tabPanel.addEventListener("click", swithTab);
};
export default tabs;
