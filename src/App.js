import ColoredUserpic from './components/ColoredUserpic/';
import './App.css';

function App() {
  return (
    <div className="App">
      <ColoredUserpic 
        src='https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/38230/kabancev-yurii-zerkalo-2018-379938.jpg?itok=llNijpJA'
        backgroundColor='red'
        size={150}
        margin={4}
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
