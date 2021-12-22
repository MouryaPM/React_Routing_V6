import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const PRODUST_ARRAY = [
    {
      id: "p1",
      name: "Books",
    },
    {
      id: "p2",
      name: "Series",
    },
    {
      id: "p3",
      name: "Videos",
    },
  ];
  const params = useParams();
  const product_data = PRODUST_ARRAY.find(
    (product) => product.id === params.productId
  );
  if (!product_data) {
    return <p>No Product Found</p>;
  }
  return (
    <section>
      <div>Details page</div>
      <p>{product_data.name}</p>
    </section>
  );
};

export default ProductDetails;
