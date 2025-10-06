export const CardList = (props) => {

  return (
    <li key={props.currentEle.id}>
      <div>
        <img
          src={props.currentEle.img_url}
          alt="Picture Not upload"
          width="40%"
          height="20%"
        />
      </div>
      <div className="item">
        <h1>Name: {props.currentEle.name}</h1>
        <h2>Rating: {props.currentEle.rating}</h2>
        <p>Description: {props.currentEle.description}</p>
        <p>Genre: {props.currentEle.genre}</p>
        <p>Cast: {props.currentEle.cast}</p>
        <a href={props.currentEle.watch_url} target="_blank">
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
};
