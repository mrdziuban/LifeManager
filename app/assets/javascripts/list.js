var List = function () {
  var init = function () {
    $("div.list-content").on("click", ".list-add-item-link", function () {
      $(".new-item-form").slideToggle("fast");
    });

    $("div.list-content").on("click", ".new-item-form input[type=submit]", addItem);
  };

  var addItem = function (event) {
    var that = this;
    event.preventDefault();

    var listId = $("div.list-content").attr("id");

    var formData = $(that.form).serialize();
    formData += "&item%5Blist_id%5D=" + listId;

    $.ajax({
      url: that.form.action,
      type: "POST",
      data: formData,
      success: function (data) {
        $(that.form).siblings("ul").append($(data).hide().fadeIn("fast"));
        that.form.reset();
        $(that.form).slideToggle();
      }
    });
  };

  return {
    init: init
  }
}();