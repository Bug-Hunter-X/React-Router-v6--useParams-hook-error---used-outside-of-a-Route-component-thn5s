import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>MyComponent {id}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MyComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;