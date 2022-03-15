const now = new Date(Date.now());
const today = [now.getFullYear(), now.getMonth(), now.getDay()];
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
						true, new Date(...today, 15, 30)
					),
					new Message('Ricordati di stendere i panni',
						true, new Date(...today, 15, 50)
					),
					new Message('Tutto fatto!', 
						false, new Date(...today, 22, 15)
					),
				],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Fabio', 2),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 8, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Alessandro L.', 3),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 14, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Alessandro B.', 4),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 17, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Sofia', 5),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 13, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Claudia', 6),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 16, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Federico', 7),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 11, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
			{
				user: new User('Davide', 8),
				messages: [new Message('Ultimo messaggio', false, new Date(...today, 7, 0))],
				lastAccess: new Date(...today, 12, 0)
			},
		],
		chatIndex: 0
	},
	methods: {
		displayedChats() {
			const sortedChats = this.chats.sort((chatA, chatB) => chatB.messages[chatB.messages.length - 1].date - chatA.messages[chatA.messages.length - 1].date)
			return sortedChats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		}
	}
});