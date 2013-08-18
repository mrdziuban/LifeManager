var User = function () {
  var userId;

  var init = function (myUserId) {
    userId = myUserId;
    $("#sidebar input[type=submit]").on("click", createList)

    $(".add-item").on("click", function () {
      var itemId = $("form > textarea").length
      var html = "<label for='list_item_" + itemId + "_text'>Text</label><textarea name='list[items_attributes][" + itemId + "][text]'' id='list_item_" + itemId + "_text'></textarea><br>"
      $("input[type=submit]").before($(html).hide().fadeIn("fast"));
    });
  };

  var createList = function (event) {
    var that = this;
    event.preventDefault();

    var formData = $(that.form).serialize();
    formData += "&list%5Buser_id%5D=" + userId;

    $.ajax({
      url: that.form.action,
      method: "POST",
      data: formData,
      success: function (data) {
        $("#content .user-lists").append($(data).hide().fadeIn("fast"));
        that.form.reset();
      },
      error: function () {
        console.log("error");
      }
    });
  };

  return {
    init: init
  }
}();