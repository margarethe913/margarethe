import './style/portfolio.css'
import './style/index.css'
import Header from './components/header'
import lucysListings from './assets/lucyslistings.jpg'
import rePark from './assets/repark.jpg'
import dynamoDB from './assets/dynamodb.jpg'
import DLT from './assets/dlt.png'


function Portfolio() {    
  return (
    <>
    <Header />
    <section id="portfolio">
        <h1 class="major">Portfolio</h1>
        <h2>Some projects I've worked on!</h2>
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
            <article>
            <a href='https://www.youtube.com/embed/IuK4m5yqFUk' target="_blank" class="image"><iframe src="https://www.youtube.com/embed/IuK4m5yqFUk"></iframe></a>
                <h3 class="major">Noted</h3>
                <p>Created for 15-112 Fundamentals of Programming and Computer Science: a note-taking, MS Paint, and file navigation app designed to enhance productivity.Designed a fully functional interactive notetaking and design user interface modeled after Microsoft Paint, Word, and File Explorer, complete with advanced search and pixel-based flood fill algorithms.</p>
                <a href="https://www.youtube.com/embed/IuK4m5yqFUk" class="special">Learn more</a>
            </article>
            <article>
            <a href='https://aws.amazon.com/dynamodb/global-tables/' target="_blank" class="image"><img src={dynamoDB} alt="" /></a>
                <h3 class="major">AWS DynamoDB Global Tables (AL2 migration project)</h3>
                <p>Spearheaded the migration of six native AWS services to the AL2 operating system, utilizing flexible fleets for enhanced scalability, efficiency, and cost optimization.</p>
                <a href="https://aws.amazon.com/dynamodb/global-tables/" class="special">Learn more</a>
            </article>
            <article>
            <a href='https://www.databricks.com/product/delta-live-tables' target="_blank" class="image"><img src={DLT} alt="" /></a>
                <h3 class="major">Databricks Delta Live Tables (Timeline view project)</h3>
                <p>Designed and developed a dynamic Gantt chart timeline view using React and CSS for pipeline visualization. Engineered custom, reusable React components for an expandable chart, optimizing developer efficiency and ensuring a consistent, scalable UI </p>
                <a href="https://www.databricks.com/product/delta-live-tables" class="special">Learn more</a>
            </article>
        </section>
        </section>
        </>
  );
}

export default Portfolio;
