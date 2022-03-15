class User {
	constructor (name, avatarNumb) {
		this.name = name;
		this.avatar = `img/avatar/avatar_${avatarNumb}.jpg`;
	}
}

class Message {
	constructor (text, sent, date) {
		this.text = text;
		this.sent = sent;
		this.date = date;
	}
}

const app = new Vue({
	el: '#root',
	data: {
		myUser: new User('Alessio', 'io'),
		searchChat:'',
		chats: [
			{
				user: new User('Michele', 1),
				messages: [
					new Message('Hai portato a spasso il cane?', true,  '15:30'),
					new Message('Ricordati di stendere i panni', true,  '15:50'),
					new Message('Tutto fatto!',						false, '16:15'),
				],
				lastAccess: '12:00'
			},
			{
				user: new User('Fabio', 2),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Alessandro L.', 3),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Alessandro B.', 4),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Sofia', 5),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Claudia', 6),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Federico', 7),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
			{
				user: new User('Davide', 8),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00'
			},
		],
		chatIndex: 0
	},
	methods: {
		displayedChats() {
			return this.chats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		}
	}
});