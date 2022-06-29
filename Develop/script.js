 $(document).ready(function() {

     $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
  
     $('.saveBtn').on('click', function(){
       console.log(this);
         var plans = $(this).siblings(".description").value();
         var time = $(this).parent().attr('id');

         localStorage.setItem(plans, time);
       });

     $("#9am .description").value(localStorage.getItem("9"));
     $('#10am .description').value(localStorage.getItem('10'));
     $('#11am .description').value(localStorage.getItem('11'));
     $('#12pm .description').value(localStorage.getItem('12'));
     $('#1pm .description').value(localStorage.getItem('1'));
     $('#2pm .description').value(localStorage.getItem('2'));
     $('#3pm .description').value(localStorage.getItem('3'));
     $('#4pm .description').value(localStorage.getItem('4'));
     $('#5pm .description').value(localStorage.getItem("5"));

 });