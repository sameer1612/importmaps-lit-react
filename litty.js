import { LitElement, html } from "lit-element";
import numberToWords from "number-to-words";
import lodash from "lodash";

class MyElement extends LitElement {
  render() {
    return html`
      <style>
        .msg {
          color: #e91e63;
          font-size: 5em;
          font-weight: bold;
          margin-top: 4em;
          text-align: center;
        }
      </style>

      <div class="msg">
        ♥ Lit's lucky number is:
        <span style="color: orange;">
          ${lodash.upperFirst(numberToWords.toWords(Math.random() * 10))}
        </span>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
