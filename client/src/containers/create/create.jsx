import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createvideogame, getgenres } from '../../actions';
import Swal from 'sweetalert2';


const Create = () => {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const genres1 = genres.slice(0, 10);
  const genres2 = genres.slice(10, 20);

  const [game, setGame] = useState({
    name: '',
    description: '',
    image: '',
    released: '',
    rating: 0,
    genres: [],
    platforms: []
  });

  useEffect(() => {
    dispatch(getgenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomPlatfroms = [
    'pc',
    'iOS',
    'Android',
    'macOS',
    'PlayStation 4',
    'PlayStation 5',
    'Xbos',
    'PS Vita'
  ];

  const ChangeInput = (e) => {
    if (e.target.name === 'genres' || e.target.name === 'platforms') {
      const arr = game[e.target.name];
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms
    };

    //validaciones
    if (!obj.name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar un Nombre!',
      });
      return;
    }
    if (!obj.description.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar una Descripcion!',
      });
      return;
    }
    if (!obj.released.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar una Fecha de Lanzamiento!',
      });
      return;
    }
    if (obj.rating > 5 || obj.rating < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El Rating debe estar entre 0 y 5 !',
      });
    }
    dispatch(createvideogame(obj));
    e.target.reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Video Game Creado',
      showConfirmButton: false,
      timer: 1500
    });
    setGame({
      name: '',
      description: '',
      image: '',
      released: '',
      rating: 0,
      genres: [],
      platforms: []
    });
  };

  return (
    <Fragment>
      <div className='container'>
        <p>Crea tu VideoGame</p>
        <form id='form'
          className='form'
          noValidate
          onChange={(e) => ChangeInput(e)}
          onSubmit={(e) => handleSubmit(e)}>
          <div className='containerP'>
            <div className='containerS'>
              <div className='titulo'>
                <div className='colum'>
                  <label>Name</label>
                  <input className='input' id='name' type='text' name='name' value={game.name} />
                </div>
                <div className='colum'>
                  <label>Description</label>
                  <input className='input' id='description' type='text' name='description' value={game.description} />
                </div>
                <div className='colum'>
                  <label>Released</label>
                  <input className='input' id='released' type="text" name='released' value={game.released} />
                </div>
                <div className='colum'>
                  <label>Rating</label>
                  <input className='input' id='rating' type="text" name='rating' value={game.rating} />
                </div>
                <div className='img'>
                  <label>Image</label>
                  <input className='image' type="text" name='image' value={game.image} />
                </div>
              </div>
            </div>
            <div className='containerT'>
              <div className='checkbox'>
                <div className='checks'>
                  <label>Genres</label>
                  <div className='genre'>
                    <div className='genre1'>
                      {genres1.map((e) => (
                        <div key={e.name}>
                          <input name='genres' value={e.name} type="checkbox" />
                          <label name={e}>{e.name}</label>
                        </div>
                      ))}
                    </div>
                    <div className='genre2'>
                      {genres2.map((e) => (
                        <div key={e.name}>
                          <input name='genres' value={e.name} type="checkbox" />
                          <label name={e}>{e.name}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='checks'>
                  <label>Platforms</label>
                  <div className='platforms'>
                    {randomPlatfroms.map((e) => (
                      <div key={e}>
                        <input name='platforms' value={e} type="checkbox" />
                        <label name={e}>{e}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className='btn' type='submit'>
              Crear!
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default Create;