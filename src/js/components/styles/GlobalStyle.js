
// emotion
import { injectGlobal } from 'react-emotion';

// local webfonts
import proximaSoftRegularEot from 'webfonts/ProximaSoft-Regular.eot';
import proximaSoftRegularWoff2 from 'webfonts/ProximaSoft-Regular.woff2';
import proximaSoftRegularWoff from 'webfonts/ProximaSoft-Regular.woff';
import proximaSoftRegularTtf from 'webfonts/ProximaSoft-Regular.ttf';

export default injectGlobal`
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

  @font-face {
    font-family: "ProximaSoft-Regular";
    font-display: swap;
    src: url(${proximaSoftRegularEot});
    src: url(${proximaSoftRegularEot}) format("embedded-opentype"),
    url(${proximaSoftRegularWoff2}) format("woff2"),
    url(${proximaSoftRegularWoff}) format("woff"),
    url(${proximaSoftRegularTtf}) format("truetype");
  }

  html, body, #root {
    font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
  }
`;
