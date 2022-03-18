import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';
import { ready } from './ready';
config();

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

ready(client);

client.login(process.env.TOKEN || 'not here lmao xD');
