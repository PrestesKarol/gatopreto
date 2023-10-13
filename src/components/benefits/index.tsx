import imagem1 from './icons_benefits/benefit_01.png';
import imagem2 from './icons_benefits/benefit_02.png';
import imagem3 from './icons_benefits/benefit_03.png';
import './style.css';

const Benefits = () => {

    return (
        <div className="benefits-container">
<div className="benefit-item">
        <img src={imagem1} alt="Benefício 1" />
        <h3>Entrega para todo o Brasil</h3>
      </div>
      <div className="benefit-item">
        <img src={imagem2} alt="Benefício 2" />
        <h3>Produtos feito com amor</h3>
      </div>
      <div className="benefit-item">
        <img src={imagem3} alt="Benefício 3" />
        <h3>Compre no site e retire em nossa loja</h3>
      </div>
        </div>
    )
}

export { Benefits };