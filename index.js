$(function() {
  var availableTags = [
    "New York, NY",
    "Madrid, Spain",
    "Mexico D.F., Mexico",
    "Berlin, Germany",
    "Longon, UK",
    "Rome, Italy",
    "Los Angeles, CA",
    "Tokyo, Japan",
    "Johannesburg, South Africa",
    "Buenos Aires, Argentina",
    "Moscow, Russia"
  ];
  $( ".city" ).autocomplete({
    source: availableTags
  });
  $( ".date" ).datepicker();
  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();
  $( "#selectable" ).selectable();
});
