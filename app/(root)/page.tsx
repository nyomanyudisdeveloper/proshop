import ProductList from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.action";

const HomePage = async () => {
  const latestData = await getLatestProducts();
  // const latestData = [];
  return <ProductList data={latestData} title="Newest Arrivals" limit={4} />;
};

export default HomePage;
