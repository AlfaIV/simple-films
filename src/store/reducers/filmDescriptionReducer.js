const defaultDescription = {
    // id: 1,
    // title: "123",
    // date: 123441,
    // country: "Russia",
    // mark: "1",
    // mark_number: "4",
    // infoText: "fjhasdhgfkdsgahifuohlriuerhgirehgiorehguiehruihgruihgiurehgiuerhgui",
    // url: "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg",
};

export const filmDescriptionActions = {
  GET_DESCRIPTION: 'GET_DESCRIPTION',
}

export const filmDescriptionReducer = (state = defaultDescription, action) => {
    switch (action.type) {
      case filmDescriptionActions.GET_DESCRIPTION:
        // console.log(action.payload)
        return [ action.payload ]
      default:
        return state;
    }
  }