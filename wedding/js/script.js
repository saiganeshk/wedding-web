$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 0, 23),
		newYear = true;
	
	if((new Date()).getTime() > ts.getTime()){
		newYear = false;
	}
	
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " ";
			
			if(newYear){
				message += "left until Jan 23, 2013";
			}
			else {
				message += "completed after our marriage";
			}
			
			note.html(message);
		}
	});
	
});
