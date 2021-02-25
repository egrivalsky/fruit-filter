import FruitContainer from './Components/FruitContainer';

function App() {
  const fruits = ['bananas🍌', 'watermelon🍉', 'cherry🍒', 'guava❔', 'avocado🥑', 'pineapple🍍', 'apple🍎', 'kiwi 🥝']
  return (
    <div>
      <h1>Fruit Filter</h1>
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
