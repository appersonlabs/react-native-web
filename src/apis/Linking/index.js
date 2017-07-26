const Linking = {
  addEventListener() {},
  removeEventListener() {},
  canOpenURL() {
    return Promise.resolve(true);
  },
  getInitialURL() {
    return Promise.resolve('');
  },
  openURL(url) {
    try {
      iframeOpen(url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};

/**
 * Tabs opened using JavaScript may redirect the parent tab using
 * `window.opener.location`, ignoring cross-origin restrictions and enabling
 * phishing attacks.
 *
 * Safari requires that we open the url by injecting a hidden iframe that calls
 * window.open(), then removes the iframe from the DOM.
 *
 * https://mathiasbynens.github.io/rel-noopener/
 */
const iframeOpen = url => {
  const noOpener = url.indexOf('mailto:') !== 0;
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const script = iframeDoc.createElement('script');
  const mailToExpression = noOpener === false ? '_top' : '';
  script.text = `
    window.parent = null; window.top = null; window.frameElement = null;
    var child = window.open("${url}", "${mailToExpression}"); ${noOpener && 'child.opener = null'};
  `;
  iframeDoc.body.appendChild(script);
  document.body.removeChild(iframe);
};

module.exports = Linking;
