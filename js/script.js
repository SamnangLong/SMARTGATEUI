var connection_status= false;

setTimeout(function() {
    ConnectToMQTT();
  }, 1000);
  function ConnectToMQTT(){
    // Generate a random number for the client ID
    const randomClientNumber = Math.floor(Math.random() * 1000) + 1;
    const clientID = 'GATE' + randomClientNumber;
          host = 'blithesome-chiropractor.cloudmqtt.com';
          port = 443;

    // Create a client instance
    // client = new Paho.MQTT.Client('e8f424ec.emqx.cloud', 8083, "test");
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({
      onSuccess: onConnect,
      // onFailure: onFailure,
      useSSL: true,

      userName: 'rwufzabs',
      password: 'kVZNw5Tuj6e5',
      mqttVersion:4
    });
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  connection_status = true ;
  // alert("Connect to server is success.");
  setTimeout(() => {
    console.log('Connection successful!');
  }, 2000);

//   const subTopic1 = 'STATUS' ;
//   const subTopic2 = 'E_DATA' ;
  qos = 0;
  // client.subscribe(subTopic1);
  // client.subscribe(subTopic2);
  

}
  
  
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+ responseObject.errorMessage);
    alert("MQTT Connection Lost");
  }

}



// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
    
  const values = message.payloadString.split(',');
}

