"use client";
import { notFound } from "next/navigation";
export default function Page({
  params,
}: {
  params: {
    reviewId: "string";
    productId: "string";
  };
}) {
  if (parseInt(params?.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      This is a reveiew page of product {params.productId} & review{" "}
      {params.reviewId}
    </div>
  );
}
