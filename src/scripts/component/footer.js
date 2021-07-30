class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p>Copyright © 2021 - Resto Kuan</p>
      </footer>`;
  }
}
customElements.define('footer-element', Footer);
