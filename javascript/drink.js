mask = ["start-long-island", "start-margarita", "start-vodka-sunrise", "start-whiskey-coke", "start-diy", "long-island", "margarita", "vodka-sunrise", "whiskey-coke"]

var trans = function(){
	var list = document.getElementsByClassName('selected');
	value = 0
	for(var i = 0; i < list.length; i++){
		value = value * 10 + mask.indexOf(list[i])
	}
}

var button = document.getElementById('confirm');
var making = function(node){
	val = mask.indexOf(node.classList[0])

	navigator.bluetooth.requestDevice({ filters: [{ name: 'GARLIC' }] })
	.then(device => device.gatt.connect())
	.then(characteristic => {
		if(val == 4){
			val = trans()
		}

	  var resetEnergyExpended = Uint8Array.of(val);
	  return characteristic.writeValue(resetEnergyExpended);
	})
	.catch(error => { console.log(error); });
}