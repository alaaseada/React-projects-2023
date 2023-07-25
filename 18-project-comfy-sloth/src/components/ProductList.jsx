import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length === 0) {
    return (
      <h5 style={{ textTransform: 'None' }}>
        Sorry, there are no products match your search.
      </h5>
    );
  }
  const product_view = grid_view ? (
    <GridView products={products} />
  ) : (
    <ListView products={products} />
  );
  return product_view;
};

export default ProductList;
