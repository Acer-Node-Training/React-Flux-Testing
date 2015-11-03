export default function *() {
	// Get a state to save our store
	var state = this.getState('Chatroom', {
		messages: []
	});

	this.on('store.Chatroom.addMessage', function *(name, msg) {
		state.messages.push({
			name: name,
			msg: msg
		});

		// Store was changed
		this.dispatch('state.Chatroom');
	});
};
