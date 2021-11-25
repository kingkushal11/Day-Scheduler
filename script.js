var dates = moment().format('MMMM Do YYYY');
$("#currentDay").text(dates);

$(".row").each(function(){
    var time = parseInt($(this).attr('id'));
    var hour = moment().hours();
    console.log(hour, time);
    if (hour > time){
        $(this).addClass('past');
    } else if (hour < time ){
        $(this).addClass('future');
        $(this).addClass('past');
        $(this).addClass('present');
    }else if (hour === time){
        $(this).addClass('present');
        $(this).addClass('past');
        $(this).addClass('present');
     
    }

});

$(".saveBtn").each(function(){
    $(this).on('click', savelocalstorages);

});

function savelocalstorages(event){
    var btn = $(event.target);
    var text = btn.siblings(".description").val();
    console.log(text);
    var id = btn.parent().attr('id');
    localStorage.setItem(id, text);
}

$('#9').children('.description').val(localStorage.getItem('9'));
$('#10').children('.description').val(localStorage.getItem('10'));
$('#11').children('.description').val(localStorage.getItem('11'));
$('#12').children('.description').val(localStorage.getItem('12'));
$('#13').children('.description').val(localStorage.getItem('13'));
$('#14').children('.description').val(localStorage.getItem('14'));
$('#15').children('.description').val(localStorage.getItem('15'));
$('#16').children('.description').val(localStorage.getItem('16'));
$('#17').children('.description').val(localStorage.getItem('17'));