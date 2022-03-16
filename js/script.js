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
					new Message('Hai portato a spasso il cane?',
						true, '12:00'
					),
					new Message('Ricordati di stendere i panni',
						true, '12:00'
					),
					new Message('Tutto fatto!', 
						false, '12:00'
					),
				],
				lastAccess: '12:00',
				id: 1
			},
			{
				user: new User('Fabio', 2),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 2
			},
			{
				user: new User('Alessandro L.', 3),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 3
			},
			{
				user: new User('Alessandro B.', 4),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 4
			},
			{
				user: new User('Sofia', 5),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 5
			},
			{
				user: new User('Claudia', 6),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 6
			},
			{
				user: new User('Federico', 7),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id: 7
			},
			{
				user: new User('Davide', 8),
				messages: [new Message('Ultimo messaggio', false, '12:00')],
				lastAccess: '12:00',
				id:  8
			},
		],
		chatIndex: 0,
		newMessageText: ''
	},
	methods: {
		displayedChats() {
			return this.chats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		},
		newMessage() {
			if(this.newMessageText != '') {
				const newMessage = new Message(this.newMessageText.trim(), true, '12:00')
				this.chats[this.chatIndex].messages.push(newMessage);
			}
			this.newMessageText = '';
		}
	}
});

// const sortedChats = this.chats.sort((chatA, chatB) => chatB.messages[chatB.messages.length - 1].date - chatA.messages[chatA.messages.length - 1].date)
