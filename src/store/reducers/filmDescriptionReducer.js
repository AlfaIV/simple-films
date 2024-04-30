import Description from "../../components/description/description";

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
}

export const filmDescriptionReducer = (state = defaultDescription, action) => {
    switch (action.type) {
      case filmDescriptionActions.GET_DESCRIPTION:
        // console.log(action.payload)
        return {description: [ action.payload ]}
      case filmDescriptionActions.GET_COLLECTION:
        return {collection: [action.payload]}
      default:
        return state;
    }
  }

// 'https://api.themoviedb.org/3/movie/100/recommendations?language=ru-Ru&page=1'