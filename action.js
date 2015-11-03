
export default function *() {
	this.on('action.Chatroom.say', function *(name, msg) {
		if (!msg)
			return;

		this.dispatch('store.Chatroom.addMessage', name, msg);
	});
};
