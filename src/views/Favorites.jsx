import MiContexto from "../MiContexto";
import { useContext } from "react";


const Favorites = () => {
  const { fotos } = useContext(MiContexto);
  const favoritas = fotos.filter((foto) => foto.liked);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
      {favoritas.map((foto) => (
              <div className="image-container" key={foto.id}>
                    <img className="favoritos" src={foto.src.medium} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
