export default class Taskbar {
  constructor(target) {
    this.$target = target;
    this.render();
  }

  render() {
    const start = document.createElement('button');
    start.textContent = '시작';
    start.className = 'startButton';

    this.$target.appendChild(start);

    console.log('Taskbar rendering - !');
  }
}
