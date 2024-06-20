"use client";
import { useRouter } from "next/router";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.back()
    // router.forward()
  };
  return (
    <>
      <div>This is order product page</div>
      <button onClick={handleClick}>place order</button>
    </>
  );
}
