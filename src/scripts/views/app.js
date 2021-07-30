import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this.newButton = button;
    this.newDrawer = drawer;
    this.newHero = hero;
    this.newContent = content;

    this.initialAppshell();
  }

  initialAppshell() {
    DrawerInitiator.init({
      button: this.newButton,
      drawer: this.newDrawer,
      hero: this.newHero,
      content: this.newContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.newContent.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;
