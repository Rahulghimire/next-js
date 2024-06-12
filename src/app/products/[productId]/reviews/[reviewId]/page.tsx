export default function Page({
  params,
}: {
  params: {
    reviewId: "string";
    productId: "string";
  };
}) {
  return (
    <div>
      This is a reveiew page of product {params.productId} & review{" "}
      {params.reviewId}
    </div>
  );
}
