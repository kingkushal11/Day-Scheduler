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
    }else if (hour === time){
        $(this).addClass('present');
    }

});

$(".saveBtn").each(function(){
    $(this).on('click', savelocalstorages);

});

function savelocalstorages(event){
    var btn = event.target;
    btn.siblings(".description").val()

    
}