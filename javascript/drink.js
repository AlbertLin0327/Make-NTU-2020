

var trigger = document.getElementById("confirm");
trigger.addEventListener("click", function(){
	navigator.bluetooth.requestDevice({
	  acceptAllDevices: true,
	  optionalServices: ['battery_service']
	})
	.then(device => { alert(device) })
	.catch(error => { alert(error); });
})