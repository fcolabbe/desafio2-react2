import React, { useContext } from 'react'
import MiContexto from '../MiContexto';
import IconHeart from './IconHeart';

const Gallery = () => {

const { fotos, setFotos } = useContext(MiContexto);

const darLike = (e) => {
    const id = e.target.src;
    const newPhotos = fotos.map((foto) => {
      if (foto.src.medium === id) {
        return { ...foto, liked: !foto.liked };
      }
      return foto;
    });
    setFotos(newPhotos);
}

  return (
    <main>
      <div className="gallery grid-columns-5 p-3">
        {fotos.map((foto) => (
              <div className="image-container" key={foto.id}>
                    <img className="galeria" src={foto.src.medium}  onClick={darLike}/>
                    <p className='image-text'>{foto.alt}</p>
            {/*   <div className="like-icon" data-liked={foto.liked}></div> */}
              <IconHeart filled={foto.liked}/>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Gallery;
