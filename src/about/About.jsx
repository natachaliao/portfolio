import portrait from '../assets/utils/portrait.png';
import mailImg from '../assets/utils/mail.png'
import './about.css';

const About = (props) => {
  return (
    <div className="about">
      <img className="portrait" alt="portrait" src={portrait}></img>
      <div className="about-desc">
        <p>Actuellement en 2ème année d'école d'ingénieurs dans la formation IMAC (Informatique, Multimédia, Audiovisuel et Communication), j'aime le développement web, le design graphique et le motion design. Je cherche un stage de 2/3 mois à compter du 7 juin au plus tôt jusqu'au 7 septembre au plus tard.</p>
        <span className="about-mail">
          <img alt="mail" src={mailImg}></img>
          <span>natacha-liao@live.fr</span>
        </span>
      </div>
    </div>
  )
}

export { About };