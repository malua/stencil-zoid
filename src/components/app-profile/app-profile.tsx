import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  componentDidLoad() {
    try {
      console.log(window['xprops'].messageToDisplay);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div class="app-profile">
        <p>CHILD COMPONENT</p>
        <p>{window['xprops']?.messageToDisplay}</p>
      </div>
    );
  }
}
