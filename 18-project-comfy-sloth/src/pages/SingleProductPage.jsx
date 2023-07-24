import { useEffect } from 'react';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    selected_product: p,
    product_loading,
    product_error,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (product_error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [product_error]);

  console.log(p);
  if (product_loading) {
    return <Loading />;
  }
  if (product_error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero title={p.name} product={true} />
      <div className='section section-center page '>
        <Link className='btn' to='/products'>
          Back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={p.images} />
          <section className='content'>
            <h2>{p.name}</h2>
            <Stars reviews={p.reviews} stars={p.stars} />
            <h5>{formatPrice(p.price)}</h5>
            <p className='desc'>{p.description}</p>
            <p className='info'>
              <span>Available:</span>{' '}
              {p.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className='info'>
              <span>SKU:</span>
              {p.id}
            </p>
            <p className='info'>
              <span>Brand:</span>
              {p.company}
            </p>
            <hr />
            {p.stock > 0 && <AddToCart id={p.id} colors={p.colors} stock={p.stock} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
