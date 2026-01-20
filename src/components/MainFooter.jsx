
import digitalComics from '../assets/buy-comics-digital-comics.png';
import merchComics from '../assets/buy-comics-merchandise.png';
import comicSub from '../assets/buy-comics-subscriptions.png';
import comicShop from '../assets/buy-comics-shop-locator.png';
import buyVisa from '../assets/buy-dc-power-visa.svg';
import logoBg from '../assets/dc-logo-bg.png';
import facebook from '../assets/footer-facebook.png';
import periscope from '../assets/footer-periscope.png';
import pinterest from '../assets/footer-pinterest.png';
import twitter from '../assets/footer-twitter.png';
import youtube from '../assets/footer-youtube.png';


function MainFooter() {
  return (
    <>
      <div className="links">
        <ul>
          <li>
            <img src={digitalComics} alt="" />
            <a href="#">DIGITAL COMICS</a>
          </li>
          <li>
            <img src={merchComics} alt="" />
            <a href="#">DC MERCHANDISE</a>
          </li>
          <li>
            <img src={comicSub} alt="" />
            <a href="#">SUBSCRIPTION</a>
          </li>
          <li>
            <img src={comicShop} alt="" />
            <a href="#">COMIC SHOP LOCATOR</a>
          </li>
          <li>
            <img src={buyVisa} alt="" />
            <a href="#">DC POWER VISA</a>
          </li>
        </ul>
      </div>
      <div className="info-footer">
        <ul>
          <li><h3>DC COMICS</h3></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Comics</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">News</a></li>
          <li><h3>SHOP</h3></li>
          <li><a href="#">Shop DC</a></li>
          <li><a href="#">Shop DC Collectibles</a></li>
        </ul>
        <ul>
          <li><h3>DC </h3></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy policy (New)</a></li>
          <li><a href="#">Ad Choices</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#">Talent Workshops</a></li>
          <li><a href="#">CPSC Certificates</a></li>
          <li><a href="#">Ratings</a></li>
          <li><a href="#">Shop Help</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul>
          <li><h3>SITES</h3></li>
          <li><a href="#">DC</a></li>
          <li><a href="#">MAD Magazine</a></li>
          <li><a href="#">DC Kids</a></li>
          <li><a href="#">DC Universe</a></li>
          <li><a href="#">DC Power Visa</a></li>
        </ul>

        <img src={logoBg} alt="" />
      </div >
      <footer>
        <button>SIGN-UP NOW!</button>
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <a href="#"><img src={facebook} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={youtube} alt="" /></a>
          <a href="#"><img src={pinterest} alt="" /></a>
          <a href="#"><img src={periscope} alt="" /></a>
        </div>
      </footer>
    </>
  );
}


export default MainFooter;