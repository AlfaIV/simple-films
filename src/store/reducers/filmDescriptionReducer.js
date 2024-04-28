const defaultDescription = {
    id: 1,
    title: "123",
    date: 123441,
    country: "Russia",
    mark: "1",
    mark_number: "4",
    infoText: "fjhasdhgfkdsgahifuohlriuerhgirehgiorehguiehruihgruihgiurehgiuerhgui",
    url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg",
};

export const filmDescriptionReducer = (state = defaultDescription, action) => {
    switch (action.type) {
      case "GET_DESCRIPTION":
        return { ...state }
      default:
        return state;
    }
  }