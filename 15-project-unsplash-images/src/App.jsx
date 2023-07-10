import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <section>
        <h1 className='title'>Photo Gallery Project</h1>
        <SearchForm />
      </section>
      <Gallery />
    </main>
  );
};
export default App;
