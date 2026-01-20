
import digitalComics from '../assets/buy-comics-digital-comics.png';
import merchComics from '../assets/buy-comics-merchandise.png';
import comicSub from '../assets/buy-comics-subscriptions.png';
import comicShop from '../assets/buy-comics-shop-locator.png';
import buyVisa from '../assets/buy-dc-power-visa.svg';
function MainContent() {

    return (
        <>
            <main>
                <h2>-- CONTENT GOES HERE --</h2>
            </main>
            <div className="jumbo">
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
        </>
    )
}

export default MainContent