import { Link } from "react-router-dom";

export default function Slider(){
    return(<>
    <div className="flex justify-center">
    <div id="carouselExampleIndicators" className="carousel slide mt-2 w-[92%]" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded-lg">
    <Link className="carousel-item rounded-lg active " data-bs-interval="500">
      <img src="/gif1.jpeg" className="d-block w-100 rounded-lg" alt="..."/>
    </Link>
    <Link className="carousel-item rounded-lg" data-bs-interval="500">
      <img src="/gif2.jpeg" className="d-block w-100 rounded-lg" alt="..."/>
    </Link>
    <Link className="carousel-item rounded-lg" data-bs-interval="500">
      <img src="/gif3.jpeg" className="d-block w-100 rounded-lg" alt="..."/>
    </Link>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>)
}