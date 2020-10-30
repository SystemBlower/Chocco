$(".form").submit( e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");
    const formArr = [name,phone,comment];
    const modal = $(".modal");
    const content = modal.find(".modal__title");

    content.removeClass("error-modal");

    const isValid = validateFields(form,formArr)

    if(isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },

            success: (data) => {
                console.log(data);
                content.text(data.message);

                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
                
                $(".form")[0].reset();
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                content.addClass("error-modal");

                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
            },
        });
    }
});

const validateFields = (form, arr) => {
    arr.forEach((field) => {
        field.removeClass("input-error");
        if(field.val().trim() === "") {
            field.addClass("input-error");
        }
    });

    const errorfield = form.find(".input-error");

    return errorfield.length === 0;
}

$(".app-close-modal").click(e => {
    e.preventDefault();

    $.fancybox.close();
})