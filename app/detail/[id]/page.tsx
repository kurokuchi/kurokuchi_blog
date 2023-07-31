import { connectDB } from '@/app/mongo/database';
import { ObjectId } from 'mongodb';

export default async function Detail({params}:any) {

    // const client = await connectDB
    // const db = client.db('forum')
    
    // let result = await db.collection('list').findOne({_id: new ObjectId(params.id)})

    return (
        <div className="bg-slate-100 p-5 h-screen">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-5">
                <h4 className='text-lg font-bold m-0'>
                    상세페이지
                </h4>
                {/* <h4 className='text-lg font-bold m-0'>
                    {result && result.title}
                </h4>
                <p className='text-gray-600 m-1'>
                    {result && result.date}
                </p> */}
            </div>
        </div>
    )
}
