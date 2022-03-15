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
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Fabio', 2),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Alessandro L.', 3),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Alessandro B.', 4),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Sofia', 5),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Claudia', 6),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Federico', 7),
				messages: [],
				lastAccess: '12:00'
			},
			{
				user: new User('Davide', 8),
				messages: [],
				lastAccess: '12:00'
			},
		],
		chatIndex: 0
	},
	methods: {

	}
});