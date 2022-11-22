import Taskbar from './Taskbar';

export default class App {
  taskbar;

  constructor() {
    this.taskbar = new Taskbar(document.getElementById('taskbar'));
  }
}
