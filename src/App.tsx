import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import RocketDetail from './pages/RocketDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen text-white font-mono min-w-full">
        <header className="text-center p-4 mb-4">
          <h1 className="text-4xl">
            <Link to="/">SpaceX Rockets</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rocket/:id" element={<RocketDetail />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
}

export default App;
