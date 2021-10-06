import logo from './logo.svg';
import './App.css';

const fs = window.require('fs');
const { app } = window.require('@electron/remote');

const redis = window.require('redis');

const redisClient = redis.createClient();

function App() {
  return (
    <div className="App">
      <button onClick={() => redisClient.setex("GG", 360, "GG WORLD", (err) => {
        if (err) console.error(err);
      })}>add</button>
      <button onClick={() => redisClient.get("GG", (err, data) => {
        if (err) console.error(err);
        else console.log(data);
      })}>click</button>
    </div>
  );
}

export default App;
