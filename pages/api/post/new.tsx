import { connectDB } from '@/app/mongo/database';

export default async function handler(req:any, res:any) {
    if(req.method == 'POST') {
        if(req.body.title == '') {
            return res.status(400).json('제목이 없습니다.')
        } else if (req.body.content == '') {
            return res.status(400).json('내용이 없습니다.')
        }

        try {
            const client = await connectDB
            const db = client.db('forum')
    
            let result = await db.collection('list').insertOne(req.body)
    
            res.redirect(302, '/list')
        } catch(error) {
            return res.status(500).json('서버가 터졌습니다.')
        }

    }

}