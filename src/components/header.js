import '../style/header.css'
import '../style/index.css'


function Header() {    
  return (
    <div id="header">
		<h1><a href="/#">Margaret He</a></h1>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        <nav>
            <a href="/#about">About</a>
            <a href="/portfolio#portfolio">Portfolio</a>
            <a href="/contact#contact">Contact</a>
		</nav>
	</div>
  );
}

export default Header;