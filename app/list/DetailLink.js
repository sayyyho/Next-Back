"use client";

// client component에서만 router 기능 사용 가능

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      test
    </button>
  );
}
