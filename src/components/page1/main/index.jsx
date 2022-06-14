import "./styles.css";

function MainPage1() {
  return (
    <div className="main1-body">
      {/* Enjoy tv */}
      <div className="widget widget1">
        <div className="text">
          <h3>Enjoy on your Tv</h3>
          <p>
            Watch on smart TVs. PlayStion, Xbox,
            <br />
            Chromecast, Apple Tv, Blu-ray players and
            <br />
            more.
          </p>
        </div>
        <div className="img">
          <img src="./images/misc/home-tv.jpg" alt="" />
        </div>
      </div>

      {/* download */}
      <div className="widget widget2">
        <div className="img2">
          <img src="./images/misc/home-mobile.jpg" alt="" />
        </div>
        <div className="text">
          <h3>
            Donwload your
            <br />
            programmes to watch
            <br />
            on the go
          </h3>
          <p>
            Save your data and watch all your favourites
            <br />
            offline.
          </p>
        </div>
      </div>

      {/*wathch every where */}
      <div className="widget widget3">
        <div className="text">
          <h3>
            Watch everywhere.
          </h3>
          <p>
            Stream unlimited filmes and Tv programmes on
            <br />
            your phone, tablet, laptap and Tv without
            <br/>
            paying more.
          </p>
        </div>
        <div className="img">
          <img src="./images/misc/home-imac.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainPage1;
