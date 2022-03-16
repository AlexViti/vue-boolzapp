const DateTime = luxon.DateTime;
const launchDate = DateTime.now();
const todayStr = launchDate.toISODate()
console.log(launchDate.toISO())

/*
CLASSES DEFINITION
*/
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

/*
VUE APP
*/
const app = new Vue({
	el: '#root',
	data: {
		myUser: new User('Alessio', 'io'),
		searchChat:'',
		chats: [
			{
				id: 1,
				user: new User('Michele', 1),
				messages: [
					new Message('Hai portato a spasso il cane?',
						true, DateTime.fromISO(`${todayStr}T10:30`)
					),
					new Message('Ricordati di stendere i panni',
						true, DateTime.fromISO(`${todayStr}T16:50`)
					),
					new Message('Tutto fatto!', 
						false, DateTime.fromISO(`${todayStr}T17:21`)
					),
				],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 2,
				user: new User('Fabio', 2),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 3,
				user: new User('Alessandro L.', 3),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 4,
				user: new User('Alessandro B.', 4),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 5,
				user: new User('Sofia', 5),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 6,
				user: new User('Claudia', 6),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 7,
				user: new User('Federico', 7),
				messages: [new Message('Ultimo messaggio', false, DateTime.fromISO(`${todayStr}T16:30`))],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
			{
				id: 8,
				user: new User('Davide', 8),
				messages: [new Message('Ultimo messaggio', false, DateTime.now())],
				lastAccess: DateTime.fromISO(`${todayStr}T16:30`),
			},
		],
		currentId: 1,
		newMessageText: ''
	},
	methods: {
		displayedChats() { //FILTER CHATS BY SEARCH INPUT
			return this.chats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		},
		newMessage() {
			const chat = this.idFinder(this.currentId);
			if(this.newMessageText != '') {
				const newMessage = new Message(this.newMessageText.trim(), true, DateTime.now())
				chat.messages.push(newMessage);
			}
			this.newMessageText = '';

			setTimeout(() => this.reply(chat.id), 1000);
		},
		reply(interlocutorId) {
			const newMessage = new Message('ok', false, DateTime.now())
			this.idFinder(interlocutorId).messages.push(newMessage);
		},
		idFinder(id) {
			let result;
			this.chats.forEach(chat => {
				if (chat.id == id) {
					result = chat;
				}
			});
			return result;
		}
	}
});

// const sortedChats = this.chats.sort((chatA, chatB) => chatB.messages[chatB.messages.length - 1].date - chatA.messages[chatA.messages.length - 1].date)
