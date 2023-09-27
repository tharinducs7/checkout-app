import { useState } from 'react';
import AppLayout from './layout/AppLayout';
import ThreeStepProcess from './components/ThreeStepProcess';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout>
        <ThreeStepProcess />
      </AppLayout>
    </>
  );
}

export default App;
