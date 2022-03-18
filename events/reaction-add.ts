import { createEventHandler } from '../create-event-handler';
import constants from '../constants';

const reactionAdd = createEventHandler('messageReactionAdd', async (reaction, user) => {
	constants.BANNED_REACTIONS.forEach(async (reactName) => {
		if (reaction.emoji.name?.toLowerCase() === reactName.toLowerCase()) {
			await reaction.remove();
			try {
				await (
					await user.createDM()
				).send(`You used banned reaction "${reactName}", please dont !`);
			} catch (e) {
				console.log(`cant message ${user.tag}`);
			}
		}
	});
});

export default reactionAdd;
