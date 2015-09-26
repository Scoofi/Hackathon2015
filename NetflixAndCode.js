var sinchClient = new SinchClient({
    //TODO: Insert our actual App Key below.
	applicationKey: 'INSERT_KEY_HERE',
	capabilities: {messaging: true, calling: true},
	startActiveConnection: true,
	// The next three lines are for more verbose debugging

	//onLogMessage: function(message) {
	//	console.log(message);
	//}

});

var sessionName = 'CodeButts-' + sinchClient.applicationKey;


//Voice Calling code below

sinchClient.start({username: '<user id>', password: '<password>'})

var callListeners = {
    onCallEstablished: function(call) {
        $('audio').attr('src', call.incomingStreamURL);
    },
}
var callClient = sinchClient.getCallClient();
var call = callClient.callUser('<remote user id>');
call.addEventListener(callListeners);