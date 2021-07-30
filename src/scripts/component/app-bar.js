class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>  
      <header class="appBar">
            <div class="appBarMenu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="appBarBrand">
              <h1> Resto <span>Kuan</span></h1>
            </div>
            <nav id="navigationDrawer" class="appBarNavigation">
                <ul>
                    <li><a href="#/list-restaurant">Restaurant</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a target="_blank" href="https://github.com/pekeleku/" class="link-nav">About Us</a></li>
                </ul>
            </nav>
        </header>
        `;
  }
}
customElements.define('app-bar', AppBar);
