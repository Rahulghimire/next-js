export default function ProductDetails({
  params,
}: {
  params: {
    productId: "string";
  };
}) {
  return <div>This is product details page of product {params?.productId}</div>;
}
