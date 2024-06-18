import { Metadata } from "next";

export const generateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Android ${params?.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

type Props = {
  params: {
    productId: "string";
  };
};

export default function ProductDetails({ params }: Props) {
  return <div>This is product details page of product {params?.productId}</div>;
}
