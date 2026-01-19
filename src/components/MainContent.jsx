
import digitalComics from '../assets/buy-comics-digital-comics.png';
import merchComics from '../assets/buy-comics-merchandise.png';
import comicShop from '../assets/buy-comics-shop-locator.png'
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
            
                </ul>
            </div>
        </>
    )
}

export default MainContent