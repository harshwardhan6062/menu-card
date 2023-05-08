import { useState, useEffect } from 'react'
import './App.css'
import alldata from './data'
import { Categories } from './Categories'
import { Items } from './Items'
import Title from './Title'

const allCategories = ['all', ...new Set(alldata.map((item) => item.category))];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [items, setItems] = useState(alldata);

  const updateCategories = (category) => {
    setSelectedCategory(category);
  }

  useEffect(() => {
    let newItems = [];
    if(selectedCategory === 'all') {
      newItems = alldata;
    } else {
      newItems = alldata.filter((item) => { return item.category === selectedCategory; });
    }
    setItems(newItems);
  }, [selectedCategory]);

  console.log(items);

  return (
    <main>
      <section className='menu'>
        <Title text='our menu'/>
        <Categories allCategories={allCategories} updateCategories={updateCategories} />
        <Items items={items} />
      </section>
    </main>
  );
}

export default App;
