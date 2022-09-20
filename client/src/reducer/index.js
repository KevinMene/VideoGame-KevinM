const initialState = {
  videogames: [],
  genres: [],
  searchvideogames: [],
  createvideogame: null,
  searchvideogamebyid: [],
  searchvideogamebyname: [],
  filtergame: [],
  orderby: 'Select',
  filterby: 'All'
};

export default function rootReducer (state = initialState, action) {
switch (action.type) {
  case 'GET_VIDEOGAMES':
    return {
      ...state,
      videogames: action.payload
    };
  case 'SEARCH_VIDEOGAMES':
    return {
      ...state,
      searchvideogamebyname: action.payload
    };
  case 'GET_VIDEOGAME_ID':
    return {
      ...state,
      searchvideogamebyid: action.payload
    };
  case 'GET_GENRES':
    return {
      ...state,
      genres: action.payload
    };
  case 'CREATE':
    return {
      ...state,
      createvideogame: action.payload
    };
  case 'RESET':
    return {
      ...state,
      videogames: [],
      filtergame: [],
      orderby: 'Select',
      filterby: 'All'
    };
  case 'FILTER_GENRE':
    return {
      ...state,
      filtergame: action.payload.gamegenre,
      filterby: action.payload.genre,
    };
    case 'ORDER_ASC':
    case 'ORDER_DESC':
      return{
        filtergame: action.payload.ordergame,
        orderby: action.payload.name
      }
  case 'ORDER_CREATE':
    return {
      ...state,
      filtergame: action.payload.videogames,
      filterby: action.payload.source
    };
  default:
    return state;
}
}