import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result[0]);
  const URL = "http://localhost:3000/detail/";
  return (
    // map() 인자로 콜백함수, 콜백 인자로는 mapping되는 array 값
    <div className="list-bg">
      {result.map(
        (item, index) => (
          <div className="list-item" key={index}>
            <a href={URL + item._id}>{item.title}</a>
            <p>{item.content}</p>
          </div>
        )
        // 중괄호 + return 생략
      )}
    </div>
  );
}
