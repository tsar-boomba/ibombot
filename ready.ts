import { Client } from "discord.js";

export const ready = (client: Client) => {
	client.on('ready', (client) => console.log(`logged in as ${client.user.tag}`));
}