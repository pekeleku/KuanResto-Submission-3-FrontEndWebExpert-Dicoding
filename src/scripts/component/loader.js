/* eslint-disable no-tabs */
import loaderMp4 from '../../public/loading/loader.mp4';
import loaderWebm from '../../public/loading/loader.webm';

class LoaderIndikator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="loading">
          <video autoplay loop muted playsinline>
            <source src="${loaderWebm}" type="video/webm">
            <source src="${loaderMp4}" type="video/mp4">
          </video>
        </div>`;
  }
}
customElements.define('loader-element', LoaderIndikator);
