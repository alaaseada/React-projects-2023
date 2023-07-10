import { useFetchImages } from './reactQueryCustomHook';
import { useGlobalContext } from './Context';

function Gallery() {
  const { keyword } = useGlobalContext();
  const { data, isLoading, isError } = useFetchImages(keyword);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something wrong occurred</p>;
  }
  return (
    <section className='image-container'>
      {data?.results.map((image) => {
        return (
          <img
            key={image.id}
            src={image.urls.regular}
            className='img'
            alt={'image'}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
