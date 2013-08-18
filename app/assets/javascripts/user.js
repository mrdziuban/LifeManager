var User = function () {
  var userId;

  var init = function (myUserId) {
    userId = myUserId;
    $("#sidebar input[type=submit]").on("click", createList)
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