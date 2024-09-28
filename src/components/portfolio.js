import '../style/portfolio.css'
import '../style/index.css'
import lucysListings from '../assets/lucyslistings.jpg'
import rePark from '../assets/repark.jpg'



function Portfolio() {    
  return (
    <section id="portfolio-preview">
		<section id="four" class="wrapper alt style1">
            <div class="inner">
            <div class="content">
                <h2 class="major">Portfolio</h2>
                <h3>Some projects I've worked on!</h3>
                <section class="features">
                    <article>
                        <a href='http://eringgao.github.io/lucy_listings/index.html' target="_blank" class="image"><img src={lucysListings} alt="" /></a>
                        <h3 class="major">Lucy's Listings (TartanHacks project)</h3>
                        <p>Created a website to compile housing options for CMU students utilizing PyZillow and the Geocoder and OSRM APIs to aggregate real estate listings and geographical data.</p>
                        <a href="http://eringgao.github.io/lucy_listings/index.html" class="special">Learn more</a>
                    </article>
                    <article>
                    <a href='https://drive.google.com/drive/folders/1CvqR0yzv9DMbbKvfcXAieH05yxn0jqKC' target="_blank" class="image"><img src={rePark} alt="" /></a>
                        <h3 class="major">rePark</h3>
                        <p>Created a digital service to provide parallel parking assistance to teenage drivers with older cars. Received $2,000,000 of investment from VC's.</p>
                        <a href="https://drive.google.com/drive/folders/1CvqR0yzv9DMbbKvfcXAieH05yxn0jqKC" class="special">Learn more</a>
                    </article>
                </section>
                    <a href="/margarethe/portfolio" class="button">Browse All</a>
            </div>
            </div>
        </section>
	</section>
  );
}

export default Portfolio;
