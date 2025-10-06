import data from '../Api/data.json'
import { CardList } from "./CardList";


export const Header = () => {
  return (
    <div>
      <h1>I am header of this Appliction</h1>
    </div>
  );
};


export const NetflixCards = () => {
  return (
    <ul>
      {data.map((currentEle) => {
        return <CardList key={currentEle.id} currentEle={currentEle} />;
      })}
    </ul>
  );
};





export const Footer=()=>{
    return <p>I am footer</p>;
};
