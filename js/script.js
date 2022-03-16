const DateTime = luxon.DateTime;
const launchDate = DateTime.now();

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
						true, launchDate.minus({hours: 1, minutes: 30})
					),
					new Message('Ricordati di stendere i panni',
						true, launchDate.minus({minutes: 50})
					),
					new Message('Tutto fatto!', 
						false, launchDate.minus({minutes: 30})
					),
				],
				lastAccess: launchDate.minus({minutes: 24}),
				isTyping: false
			},
			{
				id: 2,
				user: new User('Fabio', 2),
				messages: [
					new Message('Buon natale', false, DateTime.fromISO('2020-12-25T16:12')),
					new Message('Anche a te e famiglia', true, DateTime.fromISO('2020-12-25T18:12')),
				],
				lastAccess: launchDate.minus({days: 1, hours: 1, minutes: 30}),
				isTyping: false
			},
			{
				id: 3,
				user: new User('Alessandro L.', 3),
				messages: [
					new Message('Ehilà, come va?', false, launchDate.minus({days: 1, hours: 1, minutes: 02})),
					new Message('Tutto bene grazie, tu?', true, launchDate.minus({days: 1,hours: 0, minutes: 58})),
					new Message('Ti va di venire domani sera a vedere Batman? Andiamo alle 9 al Sarca', false, launchDate.minus({days: 1,hours: 0, minutes: 6}))
				],
				lastAccess: launchDate.minus({hours: 1, minutes: 30}),
				isTyping: false
			},
			// {
			// 	id: 4,
			// 	user: new User('Alessandro B.', 4),
			// 	messages: [new Message('Ultimo messaggio', false, launchDate.minus({hours: 1, minutes: 30}))],
			// 	lastAccess: launchDate.minus({hours: 1, minutes: 30}),
			// },
			// {
			// 	id: 5,
			// 	user: new User('Sofia', 5),
			// 	messages: [new Message('Ultimo messaggio', false, launchDate.minus({hours: 1, minutes: 30}))],
			// 	lastAccess: launchDate.minus({hours: 1, minutes: 30}),
			// },
			// {
			// 	id: 6,
			// 	user: new User('Claudia', 6),
			// 	messages: [new Message('Ultimo messaggio', false, launchDate.minus({hours: 1, minutes: 30}))],
			// 	lastAccess: launchDate.minus({hours: 1, minutes: 30}),
			// },
			// {
			// 	id: 7,
			// 	user: new User('Federico', 7),
			// 	messages: [new Message('Ultimo messaggio', false, launchDate.minus({hours: 1, minutes: 30}))],
			// 	lastAccess: launchDate.minus({hours: 1, minutes: 30}),
			// },
			// {
			// 	id: 8,
			// 	user: new User('Davide', 8),
			// 	messages: [new Message('Ultimo messaggio', false, launchDate.minus({years: 1, hours: 1, minutes: 30}))],
			// 	lastAccess: launchDate.minus({hours: 1, minutes: 30}),
			// },
		],
		sortedChats: [],
		currentId: 1,
		newMessageText: '',
		ids: [],
		slicer: 35,
		isMenuOpen: false,
		menuX: 0,
		menuY: 0,
		messageMenuIndex: '',
	},
	methods: {
		displayedChats() { //FILTER CHATS BY SEARCH INPUT
			return this.sortedChats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		},
		newMessage() {
			const chat = this.idFinder(this.currentId);
			if(this.newMessageText != '') {
				const newMessage = new Message(this.newMessageText.trim(), true, DateTime.now())
				chat.messages.push(newMessage);
			}
			this.newMessageText = '';

			this.sortChats();
			chat.isTyping = true,

			setTimeout(() => this.reply(chat.id), 5000);
		},
		reply(interlocutorId) {
			const newMessage = new Message('ok', false, DateTime.now())
			this.idFinder(interlocutorId).messages.push(newMessage);
			this.sortChats();
			this.idFinder(interlocutorId).isTyping = false;
		},
		idFinder(id) {
			let result;
			this.chats.forEach(chat => {
				if (chat.id == id) {
					result = chat;
				}
			});
			return result;
		},
		toRelative: (date) => date.diffNow().as('minutes') > -1 ? 'adesso' : date.toRelative({locale: 'it'}),
		sortChats() {
			this.sortedChats = this.chats.sort((chatA, chatB) => chatB.messages[chatB.messages.length - 1].date - chatA.messages[chatA.messages.length - 1].date)
		},
		getLastMessage: (chat) => chat.messages[chat.messages.length - 1],
		scrollToEnd () {
			const content = this.$refs.container;
			content.scrollTop = content.scrollHeight;
		},
		menuToggle(messageIndex, event) {
			this.isMenuOpen = !this.isMenuOpen;
			this.messageMenuIndex = messageIndex;
			this.menuX = event.pageX;
			this.menuY = event.pageY;
		},
		closeMenu() {
			this.isMenuOpen = false;
		},
		deleteMessage() {
			const chats = this.chats;
			const chat = this.idFinder(this.currentId);
			chat.messages.splice(this.messageMenuIndex, 1 );
			this.isMenuOpen = false;
			if (chat.messages.length < 1) {
				chats.splice(chats.indexOf(chat), 1)
				this.currentId = chats[0].id;
			}
		}
	},
	created: function() {
		this.ids = this.chats.map(chat => chat.id)
		this.sortChats();
	},
	updated: function() {
		this.scrollToEnd();
	},
	mounted: function() {
		this.scrollToEnd();
	}
});