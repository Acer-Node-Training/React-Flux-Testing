import Fluky from 'Fluky';

import Action from './action';
import Store from './store';

var Actions = [
	Action
];

var Stores = [
	Store
];

Fluky.load(Actions, Stores);

class Messages extends React.Component {
	constructor() {
		super();

		this.state = {
			messages: []
		};
	}

	componentWillMount() {
		Fluky.on('state.Chatroom', Fluky.bindListener(this.onChange.bind(this)));
	}

	componentWillUnmount() {
		Fluky.off('state.Chatroom', this.onChange);
	}

	onChange() {
		//alert('Chatroom store was changed');
		var store = Fluky.getState('Chatroom');

		// Update component's state to re-render
		this.setState({
			messages: store.messages
		});
	}

	render() {
		var style = {
			border: '1px solid black',
			width: '400px',
			height: '300px'
		};

		var list = [];
		for (var index in this.state.messages) {
			var obj = this.state.messages[index];

			list.push(
				<div>
					{obj.name}: {obj.msg}
				</div>
			);
		}

		return (
			<div style={style}>{list}</div>
		);
	}
}

class InputBox extends React.Component {

	send() {
//		alert(this.refs.msg.value);
		Fluky.dispatch('action.Chatroom.say', 'Me', this.refs.msg.value);
	}

	render() {
		return (
			<div>
				<input type='text' ref='msg' />
				<input type='button' value='Send' onClick={this.send.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<Messages />
		<InputBox />
	</div>,
	document.getElementById('example')
);
