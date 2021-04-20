import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  componentDidLoad() {
    const zoid = window['zoid'];
    const webshop = zoid.create({
      tag: 'ec-sidebar',
      url: new URL('inner.html', window.location.href).href,
      dimensions: {
        width: '200px',
        height: '200px',
      },
      props: {
        messageToDisplay: {
          type: 'string',
        },
      },
    });

    webshop({
      messageToDisplay: 'Hello From Parent',
    }).render('#zoid-container');
  }

  render() {
    return (
      <div class="app-home">
        <p>Child Component should be renderend below:</p>

        <div id="zoid-container"></div>
      </div>
    );
  }
}
