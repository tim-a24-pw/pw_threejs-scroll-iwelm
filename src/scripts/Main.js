import Experience from './Experience';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');
    Icons.load();

    new Experience();
  }
}
new Main();
