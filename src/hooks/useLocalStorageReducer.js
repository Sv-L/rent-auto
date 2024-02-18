import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (defaultValue, key) => {
  const init = defaultValue => {
    const storedData = JSON.parse(localStorage.getItem(key));
    return storedData ? [...storedData] : defaultValue;
  };

  const reduser = (state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.data];
      case 'delete':
        return state.filter(item => item.id !== action.data);
      default:
    }
  };

  const [state, dispatch] = useReducer(reduser, defaultValue, init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    if (state.length === 0) {
      localStorage.removeItem(key);
    }
  }, [key, state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
