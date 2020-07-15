(function() {
  const mesureWidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();  
    const container = item.closest(".menu__list");
    const titleBlocks = container.find(".menu__title");
    const titlesWidth = titleBlocks.width() * titleBlocks.length;

    const textContainner = item.find(".menu__container");
    const paddingLeft = parseInt(textContainner.css("padding-left"));
    const paddingRight = parseInt(textContainner.css("padding-right"));

    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 480px)").matches;

    if (isTablet) {
      reqItemWidth = screenWidth - titlesWidth;

      if (isMobile) {
        reqItemWidth = screenWidth - 62;
      }
    } else {
      reqItemWidth = 500;
    }  

    return {
      container: reqItemWidth,
      textContainner: reqItemWidth - paddingLeft - paddingRight
    }
  };

  const hideTitlesOnMobile = container => {
    const items = container.find(".menu__item");
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (isMobile) {
      items.addClass("hidden");
    }
  }

  const showTitlesOnMobile = container => {
    const items = container.find(".menu__item");
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (isMobile) {
      items.removeClass("hidden");
    }
  }

  const closeEveryItemInContainer = container => {
    const items = container.find(".menu__item");
    const content = container.find(".menu__content");

    items.removeClass("active");
    content.width(0);
  };

  const openMenuItem = item => {
    const hiddenContent = item.find(".menu__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".menu__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainner);

    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (isMobile) {
      item.removeClass("hidden");
    }
  };

  $(".menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".menu__list");

    if (itemOpened) {
      closeEveryItemInContainer(container);
      showTitlesOnMobile(container);
    } else {
      closeEveryItemInContainer(container);
      hideTitlesOnMobile(container);
      openMenuItem(item);
    }
  });


  $(".menu__close").on("click", (e) => {
    e.preventDefault();

    closeEveryItemInContainer($('.menu__list'));
    showTitlesOnMobile($('.menu__list'));
  });
})()