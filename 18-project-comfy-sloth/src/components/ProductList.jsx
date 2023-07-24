import GridView from './GridView';
import ListView from './ListView';
import Product from '../components/Product';

const ProductList = ({ products, view }) => {
  if (products.length === 0) {
    return (
      <h5 style={{ textTransform: 'None' }}>
        Sorry, there are no products match your search.
      </h5>
    );
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
