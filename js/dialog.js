$(function () {
  var dialog, form,

    // From https://html.spec.whatwg.org/multipage/input.html#e-mail-state-%28type=email%29
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $("#name"),
    email = $("#email"),
    phone = $("#phone"),
    allFields = $([]).add(name).add(email).add(phone),
    tips = $(".validateTips");

  function updateTips(t) {
    tips
      .text(t)
      .addClass("ui-state-highlight");
    setTimeout(function () {
      tips.removeClass("ui-state-highlight", 1500);
    }, 500);
  }

  function checkLength(o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
      o.addClass("ui-state-error");
      updateTips("Length of " + n + " must be between " +
        min + " and " + max + ".");
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp(o, regexp, n) {
    if (!(regexp.test(o.val()))) {
      o.addClass("ui-state-error");
      updateTips(n);
      return false;
    } else {
      return true;
    }
  }

//   function addUser() {
//     var valid = true;
//     allFields.removeClass("ui-state-error");

//     valid = valid && checkLength(name, "username", 3, 16);
//     valid = valid && checkLength(email, "email", 6, 80);
//     valid = valid && checkLength(phone, "phone", 5, 16);

//     valid = valid && checkRegexp(name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
//     valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
//     valid = valid && checkRegexp(phone, /^([0-9a-zA-Z])+$/, "Phone No. field only allows : a-z 0-9");

//     if (valid) {
//       $("#users tbody").append("<tr>" +
//         "<td>" + name.val() + "</td>" +
//         "<td>" + email.val() + "</td>" +
//         "<td>" + phone.val() + "</td>" +
//         "</tr>");
//       dialog.dialog("close");
//     }
//     return valid;
//   }

  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Book a Call": function (){
    
      },
      Cancel: function () {
        dialog.dialog("close");
      }
    },
    close: function () {
      form[0].reset();
      allFields.removeClass("ui-state-error");
    }
  });

  form = dialog.find("form").on("submit", function (event) {
    // event.preventDefault();
    // addUser();
  });

  $("#book-call").button().on("click", function () {
    dialog.dialog("open");
  });
});