// LUXON LIBRARY
const DateTime = luxon.DateTime;
const launchDate = DateTime.now();

/*
CLASSES DEFINITION
*/
class User {
	constructor (name, id) {
		this.name = name;
		this.id = id;
		this.avatar = `img/avatar/avatar_${id}.jpg`;
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
				isTyping: false,
				newMessageText: '',
			},
			{
				id: 2,
				user: new User('Fabio', 2),
				messages: [
					new Message('Buon natale', false, DateTime.fromISO('2020-12-25T16:12')),
					new Message('Anche a te e famiglia', true, DateTime.fromISO('2020-12-25T18:12')),
				],
				lastAccess: launchDate.minus({days: 1, hours: 1, minutes: 30}),
				isTyping: false,
				newMessageText: '',
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
				isTyping: false,
				newMessageText: '',
			},
			{
				id: 4,
				user: new User('Alessandro B.', 4),
				messages: [
					new Message(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a, iste, deserunt laboriosam delectus quis repellendus sed quasi placeat, dolorem ad. Illum quia tempore sapiente odio excepturi quaerat magnam consequatur.
					Eligendi sunt nesciunt tenetur recusandae voluptatum nihil porro repudiandae fugiat labore a, officiis voluptate quasi, ratione nam ipsum molestiae delectus. Id assumenda modi nemo ducimus ut voluptates, dolore laboriosam voluptatum.
					Reprehenderit ipsa modi esse, voluptates laborum vero neque temporibus dolores ea dolor voluptatum officia eius incidunt debitis qui facere vitae fuga voluptatibus corrupti rerum quo voluptatem maxime, ipsam ratione! Rem.
					A sint beatae labore similique minima reiciendis necessitatibus culpa facilis? Delectus mollitia dicta saepe a vel molestiae aperiam laborum sint quaerat, illo illum! Amet debitis pariatur obcaecati nostrum odit repellat.
					Error aliquam expedita, porro est, optio delectus voluptas a enim similique temporibus, cumque voluptate accusantium saepe iusto accusamus quibusdam consectetur asperiores ipsa qui inventore necessitatibus assumenda. Deleniti excepturi consectetur fugit!
					Tenetur, vitae ratione. Cupiditate, perferendis suscipit odio facilis et accusantium alias accusamus tempore dolor obcaecati, quasi possimus sunt exercitationem repellat eligendi dolorem ut in corporis, doloremque rem vel repudiandae. Nobis!`, false, launchDate.minus({days: 10, hours: 1, minutes: 02})),
					new Message(`Dolorum repudiandae labore laudantium facere quod, molestiae inventore nesciunt, repellat maiores, nobis quasi eum quo excepturi reprehenderit modi tempora. Modi illum velit corrupti est voluptatum dolorum. Excepturi eum ipsam hic.
					Obcaecati omnis magnam, molestiae in quasi laudantium maxime pariatur laborum, saepe esse repudiandae iste quibusdam nulla aperiam veritatis ad? Dolorum, expedita accusantium eveniet saepe eius dolores vero iure. Harum, distinctio.
					Dicta cum aliquam, maxime sequi eos totam iste id est neque fuga esse, earum non sapiente? Voluptatem iste adipisci possimus voluptate laborum neque, dolorum cumque amet, ea et iusto mollitia.
					Fugit mollitia veniam quo recusandae ducimus, minima facilis, consequuntur facere a error distinctio aut quibusdam maiores odit nobis sunt! Doloremque eligendi vitae ex molestiae dignissimos molestias fugiat alias non quasi.`, true, launchDate.minus({days: 6, hours: 5})),
					new Message(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a, iste, deserunt laboriosam delectus quis repellendus sed quasi placeat, dolorem ad. Illum quia tempore sapiente odio excepturi quaerat magnam consequatur.
					Eligendi sunt nesciunt tenetur recusandae voluptatum nihil porro repudiandae fugiat labore a, officiis voluptate quasi, ratione nam ipsum molestiae delectus. Id assumenda modi nemo ducimus ut voluptates, dolore laboriosam voluptatum.
					Reprehenderit ipsa modi esse, voluptates laborum vero neque temporibus dolores ea dolor voluptatum officia eius incidunt debitis qui facere vitae fuga voluptatibus corrupti rerum quo voluptatem maxime, ipsam ratione! Rem.
					A sint beatae labore similique minima reiciendis necessitatibus culpa facilis? Delectus mollitia dicta saepe a vel molestiae aperiam laborum sint quaerat, illo illum! Amet debitis pariatur obcaecati nostrum odit repellat.
					Error aliquam expedita, porro est, optio delectus voluptas a enim similique temporibus, cumque voluptate accusantium saepe iusto accusamus quibusdam consectetur asperiores ipsa qui inventore necessitatibus assumenda. Deleniti excepturi consectetur fugit!
					Tenetur, vitae ratione. Cupiditate, perferendis suscipit odio facilis et accusantium alias accusamus tempore dolor obcaecati, quasi possimus sunt exercitationem repellat eligendi dolorem ut in corporis, doloremque rem vel repudiandae. Nobis!`, false, launchDate.minus({days: 3, hours: 0, minutes: 30})),
					new Message(`Dolorum repudiandae labore laudantium facere quod, molestiae inventore nesciunt, repellat maiores, nobis quasi eum quo excepturi reprehenderit modi tempora. Modi illum velit corrupti est voluptatum dolorum. Excepturi eum ipsam hic.
					Obcaecati omnis magnam, molestiae in quasi laudantium maxime pariatur laborum, saepe esse repudiandae iste quibusdam nulla aperiam veritatis ad? Dolorum, expedita accusantium eveniet saepe eius dolores vero iure. Harum, distinctio.
					Dicta cum aliquam, maxime sequi eos totam iste id est neque fuga esse, earum non sapiente? Voluptatem iste adipisci possimus voluptate laborum neque, dolorum cumque amet, ea et iusto mollitia.
					Fugit mollitia veniam quo recusandae ducimus, minima facilis, consequuntur facere a error distinctio aut quibusdam maiores odit nobis sunt! Doloremque eligendi vitae ex molestiae dignissimos molestias fugiat alias non quasi.`, true, launchDate.minus({hours: 5})),
				],		
				lastAccess: launchDate.minus({hours: 1, minutes: 30}),
				isTyping: false,
				newMessageText: '',
			}
		],
		sortedChats: [],
		currentId: 1,
		ids: [],
		slicer: 35,
		isMenuOpen: false,
		infoToggle: false,
		menuX: 0,
		menuY: 0,
		messageMenuIndex: '',
		dateUpdate: 0,
		dateFormat: DateTime.DATETIME_MED,
		darkMode: false,
	},
	methods: {

		sortChats() {
			this.sortedChats = this.chats.sort((chatA, chatB) => chatB.messages[chatB.messages.length - 1].date - chatA.messages[chatA.messages.length - 1].date)
		},
		// Filter chats by search input
		displayedChats() {
			return this.sortedChats.filter(chat => (chat.user.name.toLowerCase().startsWith(this.searchChat.trim().toLowerCase())));
		},

		newMessage() {
			const chat = this.idFinder(this.currentId);
			if(chat.newMessageText != '') {
				const newMessage = new Message(chat.newMessageText.trim(), true, DateTime.now());
				chat.messages.push(newMessage);
			}
			chat.newMessageText = '';

			this.sortChats();
			chat.isTyping = true;

			setTimeout(() => this.reply(chat.id), 5000);
		},

		reply(interlocutorId) {
			const newMessage = new Message('ok', false, DateTime.now())
			this.idFinder(interlocutorId).messages.push(newMessage);
			this.sortChats();
			this.idFinder(interlocutorId).isTyping = false;
		},
		// Given an id, return the corrisponding chat obj
		idFinder(id) {
			let result;
			this.chats.forEach(chat => {
				if (chat.id == id) {
					result = chat;
				}
			});
			return result;
		},
		// Return a string in Italian with how long ago a date was
		toRelative: (date) => date.diffNow().as('minutes') > -1 ? 'adesso' : date.toRelative({locale: 'it'}),

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

		deleteMessage() {
			const chats = this.chats;
			const chat = this.idFinder(this.currentId);
			chat.messages.splice(this.messageMenuIndex, 1 );
			this.isMenuOpen = false;
			if (chat.messages.length < 1) {
				chats.splice(chats.indexOf(chat), 1)
				this.currentId = chats[0].id;
			}
		},
		// Refresh relative date every minute
		update() {
			this.dateUpdate++;
		}
	},

	created: function() {
		this.ids = this.chats.map(chat => chat.id)
		this.sortChats();
		const dateUpdateInterval = setInterval(this.update, 60000);
	},

	updated: function() {
		this.scrollToEnd();
	},

	mounted: function() {
		this.scrollToEnd();
	}
});

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