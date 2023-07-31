import { connectDB } from '@/app/mongo/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {

  const client = await connectDB
  const db = client.db('forum')

  let result = await db.collection('list').find().toArray()

  return (
    <div className="bg-slate-100 p-5 h-screen">
      {
        result.map((row, index) => {

          return (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-5" key={index}>
              <Link href={`/detail/${row._id}`}>
              <h4 className='text-lg font-bold m-0'>
                {row.title}
              </h4>
              </Link>              
              <DetailLink />
              <p className='text-gray-600 m-1'>
                {row.content}
              </p>
            </div>
          )
        })
      }
      <Link href={'/write'}>글작성</Link>


    </div>
  )
}
