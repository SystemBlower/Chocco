// const findBlockByAlias = (alias)=>{
//   return $(".reviews__item").filter((ndx, item)=>{
//     return $(item).attr("data-shown") == alias;
//   });
// };

// $(".interactive-avatar__link").click((e) =>{
//   e.preventDefault();

//   const $this = $(e.currentTarget);
//   const target = $this.attr("data-shown");
//   const itemToShow = findBlockByAlias(target);
//   const curItem = $this.closest(".reviews-switcher__item");
//   console.log(curItem)
//   console.log($this)
//   itemToShow.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
//   curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");

// });

// var jsTriggers = document.querySelectorAll('.reviews-switcher__item'),
//     jsContents = document.querySelectorAll('.reviews__item');
// jsTriggers.forEach(function(trigger) {
//    trigger.addEventListener('click', function() {
//       var id = this.getAttribute('data-id-switcher'),
//           content = document.querySelector('.reviews__item[data-tab="'+id+'"]'),
//           activeTrigger = document.querySelector('.reviews-switcher__item.active'),
//           activeContent = document.querySelector('.reviews__item.reviews__item-active');
      
//       activeTrigger.classList.remove('active'); // 1
//       trigger.classList.add('active'); // 2
      
//       activeContent.classList.remove('reviews__item-active'); // 3
//       content.classList.add('reviews__item-active'); // 4
//    });
// });



$(".reviews__switcher-item").click(function (e){
  e.preventDefault();

  const target = $(this);

  if(!target.hasClass("interactive-avatar_active")) {
      const id = target.attr("data-id-switcher");
      const reviewsInner =  $(`.reviews__item[data-linked-with="${id}"]`);

      target.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");

      reviewsInner.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
  }
});

// const openText = item => {
//     const contentWrapper = item.find(".team__content");
//     const contentText = contentWrapper.find(".team__content-block");
//     const reqHeight = contentText.height();
//
//     contentWrapper.height(reqHeight);
// }
// const closeText = item => {
//     const contentWrapper = item.find(".team__content");
//
//     contentWrapper.height(0);
// }
//
// $(".team__item").click(function (e){
//     const target = $(this);
//
//     if(!target.hasClass("team__item_active")){
//         const itemActive = $(".team__item_active");
//         itemActive.removeClass("team__item_active");
//         closeText(itemActive);
//
//         target.addClass("team__item_active");
//         openText(target);
//     } else {
//         target.removeClass("team__item_active");
//         closeText(target);
//     }
// });