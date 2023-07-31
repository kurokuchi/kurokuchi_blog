import { connectDB } from '@/app/mongo/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

export default async function Write() {

  const client = await connectDB
  const db = client.db('forum')

  let result = await db.collection('list').find().toArray()

  return (
    <div className="bg-slate-100 p-10 h-screen">
      <h4 className="text-xl font-bold pb-4">글작성</h4>
      <form action={'/api/post/new'} method='POST'>
        <input className="text-lg w-72 p-2 mb-4 block" name='title' placeholder='글제목'/>
        <input className="text-lg w-72 p-2 mb-4 block" name='content' placeholder='글내용'/>
        <button className="p-2 text-md text-white bg-black block" type='submit'>버튼</button>
      </form>
    </div>
  )
}
