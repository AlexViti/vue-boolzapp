class User {
	constructor (name, avatarNumb) {
		this.name = name;
		this.avatar = `img/avatar/avatar_${avatarNumb}.jpg`;
	}
}

const app = new Vue({
	el: '#root',
	data: {
		myUser: new User('Alessio', 'io'),
		chats: [
			{
				user: new User('Michele', 1),
				messages: []
			},
			{
				user: new User('Fabio', 2),
				messages: []
			},
			{
				user: new User('Alessandro L.', 3),
				messages: []
			},
			{
				user: new User('Alessandro B.', 4),
				messages: []
			},
			{
				user: new User('Sofia', 5),
				messages: []
			},
			{
				user: new User('Claudia', 6),
				messages: []
			},
			{
				user: new User('Federico', 7),
				messages: []
			},
			{
				user: new User('Davide', 8),
				messages: []
			},
		],
		chatIndex: 0
	},
	methods: {

	}
});