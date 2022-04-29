import {useReducer, useState} from "react";

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [state.cats, {name: payload, id: Date.now()}]}
        case 'deleteCat' :
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}

        case 'addDog' :
            return {...state, dogs: [state.dogs, {name: payload, id: Date.now()}]}
        case 'deleteDog' :
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}

        default :
            console.error('Невідомо');
            return state;
    }
}

export const App = () => {
    const [state, dispatch] = useReducer(reducer, { cats: [], dogs: [] });
    const [catItem, setCatItem] = useState('');
    const [dogItem, setDogItem] = useState('');


    const buttonCat = () => {
        dispatch({type: 'addCat', payload: catItem});
        setCatItem('')
    }
    const buttonDog = () => {
        dispatch({type: 'addDog', payload: dogItem});
        setDogItem('')
    }

    return (
        <div>
          <div className={'header'}>
              <div>
                  <label>Cat name: <input type="text" onChange={({target}) => setCatItem(target.value)} value={catItem}/></label>
                  <button onClick={buttonCat}>Save</button>
              </div>
              <div>
                  <label>Dog name: <input type="text" onChange={({target}) => setDogItem(target.value)} value={dogItem}/></label>
                  <button onClick={buttonDog}>Save</button>
              </div>
          </div>


            <hr/>

          <div>
              <div className={'header'}>
                  {
                      state.cats.map(cat => (
                          <div key={cat.id}>
                              {cat.name}
                              <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete</button>
                          </div>
                      ))
                  }
              </div>
              <div>
                  {
                      state.dogs.map(dog => (
                          <div key={dog.id}>
                              {dog.name}
                              <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete</button>
                          </div>
                      ))
                  }
              </div>
          </div>
        </div>
    );
}

export default App;
