const defaultFilm = [
    {
      title: "Неудержимые 1",
      id: "1",
      url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg",
      rating: 7,
    },
    {
      title: "Неудержимые 2",
      id: "2",
      url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg",
      rating: 8,
    }
  ];

export const listFilmsReducer = (state = defaultFilm, action) => {
    switch (action.type) {
      case "GET_FILMS":
        return { ...state }
      default:
        return state;
    }
  }