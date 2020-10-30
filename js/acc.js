const countWidth = (item) => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  let reqWidth = 0;

  const screenWidth = $(window).width();
  const list = item.closest(".acc__list");
  const links = list.find(".acc__link");
  const titleWidth = links.width() * (isMobile? 1 : links.length);

  const reqTextContainer = item.find(".acc__box");
  const paddingLeft = parseInt(reqTextContainer.css("padding-left"));
  const paddingRight = parseInt(reqTextContainer.css("padding-right"));

  const isTablet = window.matchMedia("(max-width: 768px)").matches;

  if (isTablet) {
    reqWidth = screenWidth - titleWidth;
  } else {
    reqWidth = 524;
  }

  return {
    container: reqWidth,
    textContainer: reqWidth - paddingLeft - paddingRight,
  };
};

const openContent = (item) => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  const reqWidthitem = countWidth(item);
  const textBlock = item.find(".acc__box");

  item.closest(".acc__list").find(".acc__item").removeClass("acc__item_active");
  item.closest(".acc__item").find(".acc__content").removeClass("acc__content_active").width(0);

  if (isMobile) {
    item.closest(".acc__item").addClass("acc__item_active");
    item.closest(".acc__item").find(".acc__content").addClass("acc__content_active").width(reqWidthitem.container);
    textBlock.width(reqWidthitem.textContainer);
  } else {
    item.closest(".acc__item").find(".acc__content").addClass("acc__content_active").width(reqWidthitem.container);
    textBlock.width(reqWidthitem.textContainer);
  }
};

const closeContent = (item) => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  if (isMobile) {
    item.closest(".acc__list").find(".acc__item").removeClass("acc__item_active");
    item.closest(".acc__item").find(".acc__content").removeClass("acc__content_active").width(0);
  } else {
    item.closest(".acc__item").find(".acc__content").removeClass("acc__content_active").width(0);
  }
};

$(".acc__item").click(function (e) {
  const target = $(e.currentTarget);
  const targetContent = target.find(".acc__content");
  const isTargetOpen = targetContent.css("width").replace("px", "") !== "0";
  const items = $(".acc__item");
  const openedItems = items.filter((item) => {
    return $(items[item]).find(".acc__content").css("width").replace("px", "") !== "0";
  });

  if (isTargetOpen) {
    closeContent(target);
  } else {
    openedItems.map((index, item) => closeContent($(item)));
    openContent(target);
  }
});
