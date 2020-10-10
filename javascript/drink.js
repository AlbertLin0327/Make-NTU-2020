navigator.bluetooth.requestDevice({
  acceptAllDevices: true,
  optionalServices: ['battery_service']
})
.then(device => { alert(device) })
.catch(error => { alert(error); });