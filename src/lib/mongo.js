import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
	const mongoURL = process.env.MONGODB_URL || import.meta.env.MONGO_URL;
	if (!mongoURL) {
		throw new Error('MONGODB_URL env variable is not defined.');
	}

	if (cachedDb) {
		return cachedDb;
	}
	const client = cachedClient || new MongoClient(mongoURL);
	if (!cachedClient) {
		await client.connect();
		cachedClient = client;
	}
	cachedDb = client.db('ChatBLT');
	return cachedDb;
}