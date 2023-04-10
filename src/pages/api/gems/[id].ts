import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const allGems = async (request: NextApiRequest, response: NextApiResponse) => {
	const db = new DB();
	const id = request.query.id;
	const gem = await db.getById(id as string);

	response.status(200).json({ data: gem });
};

export default allGems;
