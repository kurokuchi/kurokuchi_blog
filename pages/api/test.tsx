
export default async function handler(req:any, res:any) {
    if(req.method == 'POST') {

    }
    return res.status(200).json('처리완료') //처리성공시 200
    // return res.status(500).json('처리완료') //처리실패시 500
    // return res.status(400).json('처리완료') //서버기능 처리실패시 (유저잘못) 400
}