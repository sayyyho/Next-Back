import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    // map() 인자로 콜백함수, 콜백함수의 인자로는 mapping되는 array 값
    <div className="list-bg">
      {result.map(
        (item, index) => (
          <div className="list-item" key={index}>
            <Link href={"/detail/" + item._id}>{item.title}</Link>
            <DetailLink />
            <p>{item.content}</p>
          </div>
        )
        // 중괄호 + return 생략
      )}
    </div>
  );
}
