import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem1 from './banners/banner_home_01.png';
import imagem2 from './banners/banner_home_02.png';
import imagem3 from './banners/banner_home_03.png';
import './style.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="HeroWrapper"> {}
      <Slider {...settings}>
        <div>
          <img src={imagem1} alt="Imagem 1" />
        </div>
        <div>
          <img src={imagem2} alt="Imagem 2" />
        </div>
        <div>
          <img src={imagem3} alt="Imagem 3" />
        </div>
      </Slider>
    </div>
  );
}

export { Hero };