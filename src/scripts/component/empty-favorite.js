class EmptyFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p id="empty-favorite">Oops... your Favorites List is empty<h2>
  `;
  }
}
customElements.define('empty-favorite', EmptyFavorite);
