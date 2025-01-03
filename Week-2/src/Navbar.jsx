  export default function MyApp() {
    return (
    <div>
        <div className="top">Mebius</div>
            <div className="link">
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                </ul> 
                <ul>
                    <li>
                    <a href="#">Shop</a>
                    </li>
                </ul>
            </div>
            <div className="shoppingCart"> 0
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvN1DEvBVEQhuHnRjRaiehEzQ9QqTQKnUKjFjQq8Rf0yC1UGlHoFBqFSvQUao1Eo1FJsEd2k83N3j1nd62YZoszM+9855uzAz3HoOf+/hTwlat5xyn2fkNdWUEBKPqu4KYrpOqK9nGIK6z1AZjGCyYwh+cukHEmn2GzQ+MLbIT6cYAl3HUAPGKxDhDOHrDQEnKQ+1j7DrYwbAH4zOpm8RpTMJUnhW+TuMZqURB7yUcZZLdJ99zcYPJPxADBg+BFarxhBh+pgJB3i+VEQvBsu5wbUxBywz6fJwLCet83BUziCfMRyGV2neujOSkKEoevTksFHGMnM/CkYqvqzqJbVIxV/pWPDlV3lgzoXUFrH1I9+L+Ab1GOKRnFFj/fAAAAAElFTkSuQmCC"/>      Cart
            </div>
    </div>
    );
  }

function Say() {
    const name = "John";

return (
    <div>
        <p>Hi {name} </p>
    </div>
    );
}
// export default Say;

//   import Say from "./main";
  