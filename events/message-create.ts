import { createEventHandler } from '../create-event-handler';
import constants from '../constants';

const messageCreate = createEventHandler('messageCreate', async (message) => {
	// if (message.channelId !== constants.TEST_CHANNEL_ID) return; // we testing
	if (message.author.id === constants.SELF) return; // dont loop urself

	console.log(`in ${message.channel} ${message.author.tag} sent: ${message.content}`);
	let hasBanned = false;
	
	constants.BANNED_PHRASES.forEach(async (bannedPhrase) => {
		if (!hasBanned && message.content.toLocaleLowerCase().includes(bannedPhrase.toLowerCase())) {
			await message.delete();
			await message.channel.send(
				`<@${message.author.id}> you sent a banned phrase, stop !`,
			);
			await (await message.author.createDM()).send(`You sent "${bannedPhrase}", which is not okay!`);
			hasBanned = true;
		}
	})
});

export default messageCreate;
