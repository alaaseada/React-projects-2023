import GridView from './GridView';
import ListView from './ListView';
import Product from '../components/Product';

const ProductList = ({ products, view }) => {
  if (products.length === 0) {
    return <h3>Sorry, there are no products match your search.</h3>;
  }
  const product_view =
    view === 'grid' ? (
      <GridView products={products} />
    ) : (
      <ListView products={products} />
    );
  return product_view;
};

export default ProductList;
