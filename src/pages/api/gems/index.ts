import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const allGems = async (request: NextApiRequest, response: NextApiResponse) => {
	const db = new DB();
	const allEntries = await db.getAll();

	response.status(200).json({ data: allEntries });
};

export default allGems;
