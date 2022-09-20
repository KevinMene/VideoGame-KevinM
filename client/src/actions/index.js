export const getvideogames = () => {
  return function(dispatch) {
    return fetch('http:/localhost:3001/videogames')
    .then(r => r.json())
    .then(json => {
      dispatch({
        type: 'GET_VIDEOGAMES',
        payload: json
      });
    });
  }
}

export const getvideogamesid = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/videogame/${id}`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({
        type : 'GET_VIDEOGAME_ID',
        payload: json
      });
    });
  }
}

export const searchvideogames = (name) => {
  return (dispatch) => {
    fetch (`http://localhost:3001/videogames?name=${name}`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({
        type: 'SEARCH_VIDEOGAMES',
        payload: json,
      });
    });
  }
}

export const getgenres = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/genres`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({
        type: 'GET_GENRES',
        payload: json
      });
    });
  }
}

export const createvideogame = (obj) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/videogame`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type' : 'application/json',
      },
      body: JSON.stringfy(obj),
    })
    .then((r) => r.json())
    .then((json) => {
      dispatch({
        type: 'CREATE',
        payload: json
      })
    })
  }
}

export const reserall = () => {
  return (dispatch) => {
    dispatch({
      type: 'RESET'
    })
  }
}

export const filtergenre = (genres) => (dispatch, getState) => {
  let gamefilter = [];
  if (genres === 'ALL') {
    gamefilter = getState().Videogames;
  } else {
    gamefilter = getState().videogames.filter((game) =>
      (game.genres).include(genres)
    )
  };
  dispatch({
    type: 'FILTER_GENRE',
    payload: {
      genres,
      gamegenre: gamefilter
    }
  })
}

export const orderasc = (type) => (dispatch, getState) => {
  const filtered = getState().filtergame;
  let ordergame = [];
  if (type === 'asc_name'){
    ordergame = filtered.sort((a,b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
  } else if (type === 'asc_rating'){
    ordergame = filtered.sort((a,b) => a.rating -b.rating );
  }
  dispatch({
    type: 'ORDER_ASC',
    payload: {
      ordergame,
      name: type
    }
  });
}

export const orderdesc = (type) => (dispatch, getState) => {
  const filtered = getState().filtergame;
  let ordergame = [];
  if (type === 'desc_name') {
    ordergame = filtered.sort((a, b) => {
      if(a.name < b.name ) return 1;
      if(a.name > b.name) return -1;
      return 0;
    });
  } else if(type === 'desc_rating') {
    ordergame = filtered.sort((a, b) => b.rating - a.rating
    );
  }
  dispatch({
    type: 'ORDER_DESC',
    payload: {
      ordergame,
      name: type
    }
  });
}

export const ordercreate = (source) => (dispatch, getState) => {
  const videogames = getState().videogames.filter(function (e) {
    return e.source === source
  });
  dispatch({
    type: 'ORDER_CREATE',
    payload: {
      videogames,
      source
    }
  });
}
