function useLocalStorage() {
  const addUser = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getUser = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const removeUser = (key, setUser) => {
    localStorage.removeItem(key);
    setUser(null);
  };

  return {
    addUser,
    getUser,
    removeUser,
  };
}

export default useLocalStorage;
