const defaultFilm = {
  listOfFilms: [],
  lenOfList: 1,  
  // {
  //   title: "Неудержимые 1",
  //   id: "1",
  //   poster: {url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg"},
  //   rating: 7,
  // },
  // {
  //   title: "Неудержимые 2",
  //   id: "2",
  //   poster: {url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg"},
  //   rating: 8,
  // }
};

export const listFilmsReducerActionType = {
  GET_FILMS: "GET_FILMS",
  ADD_FILMS: "ADD_FILMS",
  SET_PAGE: "SET_PAGE",
}

export const listFilmsReducer = (state = defaultFilm, action) => {
    switch (action.type) {
      case listFilmsReducerActionType.GET_FILMS:
        return {...state}
      case listFilmsReducerActionType.ADD_FILMS:
        console.log([...action.payload])
        return {...state, listOfFilms: [...state.listOfFilms,...action.payload]}
      case listFilmsReducerActionType.SET_PAGE:
          return {...state, lenOfList: action.payload}
      default:
        return state;
    }
  }