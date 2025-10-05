import data from '../Api/data.json'

export const Header=()=>{
    return(
         <div>
        <h1>I am header of this Appliction</h1>
        <h1>Search me</h1>
    </div>

    );
   

};

 const NetflixCards = () =>{
    
    return (
      <div className="container">
        <ul>
          {data.map((currentEle) => {
            return (
              <li key={currentEle.id}>
                <div>
                  <img
                    src={currentEle.img_url}
                    alt="Picture Not upload"
                    width="40%"
                    height="20%"
                  />
                </div>
                <div className="item">
                  <h1>Name: {currentEle.name}</h1>
                  <h2>Rating: {currentEle.rating}</h2>
                  <p>Description: {currentEle.description}</p>
                  <p>Genre: {currentEle.genre}</p>
                  <p>Cast: {currentEle.cast}</p>
                  <a href={currentEle.watch_url} target="_blank">
                    <button
                      type="button"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Watch Now
                    </button>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default NetflixCards;

export const Footer=()=>{
    return <p>I am footer</p>;
};
