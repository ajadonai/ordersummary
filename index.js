$(document).ready(function () {
  // Pricing
  const month1 = $("#monthly");
  const month3 = $("#tri-monthly");
  const year1 = $("#yearly");
  const plan = $("#planName");
  const price = $("#planPrice");

  month1.on("click", function () {
    plan.text("Monthly Plan");
    price.text("$3.99/per month");
  });

  month3.on("click", function () {
    plan.text("3 Months");
    price.text("$4.33/per month");
  });

  year1.on("click", function () {
    plan.text("Annual Plan");
    price.text("$4.99per /month");
  });

  // Order confirmation
  const proceed = $(".proceed");
  const cancel = $(".cancel");
  const thankYouMessage = $("#thankYou");
  const cancelMessage = $("#cancelBilling");
  const order = $(".order");

  proceed.on("click", function () {
    thankYouMessage.removeAttr("id");
    cancelMessage.attr("id", "cancelBilling");
    order.attr("id", "order");
  });

  cancel.on("click", function () {
    cancelMessage.removeAttr("id");
    thankYouMessage.attr("id", "thankYou");
    order.attr("id", "order");
  });
});
