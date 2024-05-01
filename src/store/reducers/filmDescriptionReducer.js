const defaultDescription = {
    description: [],
    collection: [],
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
  GET_COLLECTION: 'GET_COLLECTION',
  FETCH_DESCRIPTION: 'FETCH_DESCRIPTION',
  FETCH_COLLECTION: 'FETCH_COLLECTION',
}

export const filmDescriptionReducer = (state = defaultDescription, action) => {
    switch (action.type) {
      case filmDescriptionActions.GET_DESCRIPTION:
        return {...state, description: [ action.payload ]}
      case filmDescriptionActions.GET_COLLECTION:
        return {...state, collection: [ action.payload ]}
      default:
        return state;
    }
  }
