function timeGo(){
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var rq = myDate.getDate();
	var xq = myDate.getDay();
		var xq_arr = ["日",,"一","二","三","四","五","六"];
		xq = xq_arr[xq];

		var time = myDate.getHours();
		if (time<10){
			time = "0"+time;
		}

		var minutes = myDate.getMinutes();
		var seconds = myDate.getSeconds();
		(seconds<10)&&(seconds="0"+seconds);
		var res = year+"年" +month+"月" + rq +"日" +"&nbsp" + time +":" +minutes+":" +seconds;
		document.getElementById("showtime").innerHTML = res
}

setInterval(function(){timeGo();},1000)