import { uuid } from "@example/utils";

import '../styles/square.css';

export default class Square {
  private readonly backgroundColor: string;
  private squareEle: HTMLDivElement;

  public constructor(config) {
    this.backgroundColor = config.backgroundColor;
  }

  public render() {
    this.squareEle = document.createElement('div');
    this.squareEle.setAttribute('class', 'square');
    this.squareEle.setAttribute('style', `background-color:${this.backgroundColor}`);
    this.squareEle.dataset.id = uuid();
    document.body.appendChild(this.squareEle);
  }

  public remove() {
    document.body.removeChild(this.squareEle);
  }
}
