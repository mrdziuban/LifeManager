var User = function () {
  var userId;

  var init = function (myUserId, formAuthenticityToken) {
    userId = myUserId;
    $("#sidebar input[type=submit]").on("click", createList)

    $(".add-item").on("click", function () {
      var itemId = $("form > textarea").length
      var html = "<div class='new-list-item'><label for='list_item_" + itemId + "_text'>Text</label><textarea name='list[items_attributes][" + itemId + "][text]'' id='list_item_" + itemId + "_text'></textarea><br></div>"
      $("input[type=submit]").before($(html).hide().fadeIn("fast"));
    });

    $("#content").on("click", ".user-lists > li", function () {
      $(this).children(".list-items").slideToggle("fast");
      if ($(this).find(".circle-plus").attr("src") == "/assets/circle_plus.png" || $(this).find(".circle-plus").attr("src") == "/assets/circle_plus-f0ee6d85e489c5b6de90ded216286da9.png") {
        $(this).find(".circle-plus").attr("src", "/assets/circle_minus.png");
      }
      else {
        $(this).find(".circle-plus").attr("src", "/assets/circle_plus.png");
      }
    });

    $("#content").on("click", ".list-items > li", toggleCompletion);

    $("#content").on("click", ".add-item-link", function (event) {
      event.stopPropagation();
      $(this).siblings(".new-item-form").slideToggle("fast");
    });

    $("#content").on("click", ".new-item-form", function (event) {
      event.stopPropagation();
    });

    $("#content").on("click", ".new-item-form input[type=submit]", createItem);

    $("#content").on("click", ".delete-list-link", deleteList);
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
        $("#sidebar .new-list-item").remove();
      },
      error: function () {
        console.log("error");
      }
    });
  };

  var toggleCompletion = function (event) {
    var that = this;
    var id = $(that).attr("id");
    event.stopPropagation();

    var data = {
      id: id
    };

    $.ajax({
      url: "/toggle_complete",
      method: "POST",
      data: data,
      success: function () {
        $(that).toggleClass("completed", $(that).attr("class") === undefined || $(that).attr("class") === "")
      },
      error: function () {
        console.log("error");
      }
    });
  };

  var createItem = function (event) {
    var that = this;
    event.preventDefault();
    var listId = $(that).closest("li").attr("id");

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

  var deleteList = function (event) {
    event.stopPropagation();
    var that = this;
    var listId = $(that).closest("li").attr("id");

    $.ajax({
      url: "/lists/" + listId,
      type: "DELETE",
      success: function () {
        $(that).closest("li").fadeOut("fast");
        $(that).closest("li").remove();
      }
    });
  };

  return {
    init: init
  }
}();