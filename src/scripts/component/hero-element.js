class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <div class="hero__inner" >
                <h1 class="hero__title">We are big on customer trust and we have a vision to expand our products overseas.</h1>
                <p class="hero__tagline" >Confused about looking for a super hygienic hit drink today? Preservative free and practical? We are the solution</p>
          </div>
        </div>`;
  }
}

customElements.define('hero-element', heroElement);
