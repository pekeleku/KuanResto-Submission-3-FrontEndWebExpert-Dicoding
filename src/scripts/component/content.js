class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent"></main>
        `;
  }
}
customElements.define('content-element', Content);
