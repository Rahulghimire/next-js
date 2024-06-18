import Link from "next/link";

export default function ProductsList() {
  return (
    <>
      <h1>This is a product Page</h1>
      <Link href="/"></Link>
      <p>
        <Link href={"/products/1"}>Product 1</Link>
      </p>
      <p>
        <Link href={"/products/2"} replace>
          Product 2
        </Link>
      </p>
      <p>Product 2</p>
    </>
  );
}
