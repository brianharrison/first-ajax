$(document).on('ready', function() {
  $(".root").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "get",
      data: { },
      dataType: "text"
    });
    console.log('Click success!');
  });

  $(".ping").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "get",
      data: { },
      dataType: "text"

    }).done(function(responseData) {
      $('#step3456').append(responseData);
      console.log(responseData);

    }).fail(function(jqXHR, textStatus, errorThrown) {
      $('#step3456').append(jqXHR.responseText);
      console.log(jqXHR.responseText);

    }).always(function () {
      console.log('The request was completed successfully.');

    });
  });

  $(".count").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "get",
      data: { },
      dataType: "text"

    }).done(function(responseData) {
      $('#step7').append(responseData);
      console.log(responseData);

    });
  });

  $(".time").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "get",
      data: {timezone: 'Pacific/Auckland'},
      dataType: "text"

    }).done(function(responseData) {
      $('#step8').append(responseData);
      console.log(responseData);
    });
  });

  $(".car").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "get",
      data: { },
      dataType: "html"

    }).done(function(responseData) {
      $('#carList').append(responseData);
      console.log(responseData);
    });
  });
});

