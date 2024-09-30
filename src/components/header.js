import '../style/header.css'
import '../style/index.css'


function Header() {    
  return (
    <div id="header">
		<h1><a href="/margarethe">Margaret He</a></h1>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        <nav>
            <a href="/margarethe">About</a>
            <a href="/margarethe/#portfolio">Portfolio</a>
            <a href="/margarethe#contact">Contact</a>
		</nav>
	</div>
  );
}

export default Header;