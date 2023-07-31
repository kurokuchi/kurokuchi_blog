import { connectDB } from '@/app/mongo/database';

export default async function handler(req:any, res:any) {
    if(req.method == 'GET') {
        const client = await connectDB
        const db = client.db('forum')

        let result = await db.collection('list').find().toArray()

        return res.status(200).json(result)
    }
}