
import './App.css';
import useDevice from './hooks/useDevice';
import useFetch from './hooks/useFetch';
import useMedia from './hooks/useMedia';

function App() {
  const media = useMedia('(max-width: 480px)')
  const device = useDevice()
  const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts/1')
  console.log(media);
  console.log(error);
  return (
    <div className="App">
      <p>{media}</p>
      <p>{JSON.stringify(device)}</p>
      {!!error.length && <p>{error}</p>}
      {loading && <p>Wait some time...</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
