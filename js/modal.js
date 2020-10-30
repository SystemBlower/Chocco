// const validateFields = (form, arr) => {
//   arr.forEach((field) => {
//       field.removeClass("input-error");
//       if(field.val().trim() ==  "") {
//           field.addClass("input-error");
//       }
//   });

//   const errorFiled = form.find(".input-error");

//   return errorFiled.length == 0;
// }

// $(".form").submit( e => {
//   e.preventDefault();

//   const form = $(e.currentTarget);
//   const name = form.find("[name='name']");
//   const phone = form.find("[name='phone']");
//   const street = form.find("[name='street']");
//   const home = form.find("[name='home']");
//   const building = form.find("[name='building']");
//   const apartment = form.find("[name='apartment']");
//   const floor = form.find("[name='floor']");
//   const comment = form.find("[name='comment']");
//   const to = form.find("[name='to']");
//   const formArr = [name,phone,street,home,building,apartment,floor,comment,to];

//   const modal = $(".modal");
//   const content = modal.find(".modal__title");

//   content.removeClass("error-modal");

//   const isValid = validateFields(form,formArr);

//   if(isValid) {
//   $.ajax({
//       url: "https://webdev-api.loftschool.com/sendmail",
//       method: "post",
//       data: {
//               name: name.val(),
//               phone: phone.val(),
//               street: street.val(),
//               home: home.val(),
//               building: building.val(),
//               apartment: apartment.val(),
//               floor: floor.val(),
//               comment: comment.val(),
//               to: to.val(),
//           },

//           success: (data) => {
//               console.log(data);
//               content.text(data.message);

//               $.fancybox.open({
//                   src: "#modal",
//                   type: "inline"
//               });

//               $(".form")[0].reset();
//           },
//           error: data => {
//               console.log('fghj');
//               const message = data.responseJSON.message;
//               console.log(message);
//               console.log(content);
//               console.log(modal);
//               content.text(message);
//               content.addClass("error-modal");

//               $.fancybox.open({
//                   src: "#modal",
//                   type: "inline"
//               });
//           }
//       });
//   }
// });

// $(".app-close-modal").click(e => {
//   e.preventDefault();

//   $.fancybox.close();
// });

//
const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach((field) => {
        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }

    });

    const errorFields = form.find(".input-error");
    
    return errorFields.length == 0;
}

$('.form').submit((e) => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    modal.removeClass("error-modal")

    const isValid = validateFields(form, [name, phone, comment, to]);



    if (isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            succes: data => {
                content.text(data.message)
                // console.log(data);
                $.fancybox.open({
                    src: "#modal",
                    type: "inline",
                });
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass("error-modal")
                
                $.fancybox.open({
                    src: "#modal",
                    type: "inline",
                });
            }
        });
    }
});

$(".app-submit-btn").click((e)=> {
    e.preventDefault();

    $.fancybox.close();
});