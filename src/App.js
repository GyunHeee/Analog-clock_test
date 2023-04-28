import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import TimeProvider from './recoil/TimeProvider';

function App() {
  return (
    <TimeProvider>
      <Clock />;
    </TimeProvider>
  );
}

export default App;
