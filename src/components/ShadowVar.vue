<template>
  <div class="shadow-var-root">
    <h3>box-shadowによる基本の影</h3>
    <div class="bg">

      <h4>単純なbox-shadow</h4>
      <div class="group">
        <div class="box shadow1"></div>
        <div class="circle shadow1"></div>
      </div>

      <h4>複数の影を重ねる(Layer-Shadow)</h4>
      <div class="group layershadow">
        <div class="box shadow1"></div>
        <div class="circle shadow1"></div>
      </div>

    </div>

    <h3>filter: bulrやCSSグラデーションを使った様々な影</h3>
    <div class="bg">
      <h4>色付きの影<span class="note">背景にかかわらず影に見せる</span></h4>
      <div class="group colorshadow">
        <div class="box box-shadow">NG: box-shadow</div>
        <div class="box multiply">OK: filter: bulr + 乗算</div>
      </div>

      <h4>グラデーション</h4>
      <div class="group gradientshadow">
        <div class="box"></div>
        <div class="circle"></div>
      </div>

      <h4>覆い焼きで発光</h4>
      <div class="group dodgeshadow">
        <div class="box"></div>
        <div class="circle"></div>
      </div>
    </div>

    <h3>filter: drop-shadowで自由な形の影をつける</h3>
    <div class="bg">

      <h4>box-shadowとdrop-shadowの違い</h4>
      <div class="group spinner">
        <div class="box-shadow">
          <span class="dot dot1" />
          <span class="dot dot2" />
          <span class="dot dot3" />
          <span class="dot dot4" />
          <span class="dot dot5" />
          <span class="dot dot6" />
          <span class="dot dot7" />
          <span class="dot dot8" />
        </div>
      </div>
      <div class="group spinner">
        <div class="drop-shadow">
          <span class="dot dot1" />
          <span class="dot dot2" />
          <span class="dot dot3" />
          <span class="dot dot4" />
          <span class="dot dot5" />
          <span class="dot dot6" />
          <span class="dot dot7" />
          <span class="dot dot8" />
        </div>
      </div>

      <h4>透明色や画像を使った不定形の影</h4>
      <div class="group stamp">
        <div class="box"><div class="content"></div></div>
      </div>
    </div>

    <h3>流行のあの表現</h3>
    <div class="bg">
      <h4>ロングシャドウ（XX年ごろ）</h4>
      <div class="group longshadow">
        <div class="box"></div>
        <div class="circle"></div>
      </div>

      <h4>ネオモーフィズム（2020年?）</h4>
      <div class="group neumorphism">
        <div class="box"></div>
        <div class="circle"></div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.shadow-var-root {
  position: relative;
  z-index: 1;
}

.bg {
  background-image: url(./bgcheck.svg);
  position: relative;
  z-index: -2;
}

h4 {
  color: rgb(28, 30, 32);
  background-color: #ffffff;
  margin: 0;
  padding: 10px 0;
  width: 100%;
  .note {
    display: block;
    font-size: 0.6em;
  }
}
.group {
  padding: 30px 20px 60px 30px;
  display: flex;
  justify-content: space-around;
  div {
    position: relative;
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.box {
  display: inline-block;
  width: 150px;
  height: 150px;
  background-color: #fff;
}
.circle {
  display: inline-block;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
}

.shadow1 {
  box-shadow: 0 10px 25px 0 rgb(0, 0, 0, .5);
}

.colorshadow {
  .box-shadow {
    box-shadow: 0 10px 25px 0 rgba(42, 159, 226, 0.9);
  }
  .multiply {
    &::after{
      background-color: rgba(42, 159, 226);
      filter: blur(20px);
      transform: translateY(10px);
      mix-blend-mode: multiply;
    }
  }
}

.layershadow {
  .box, .circle {
    box-shadow:
      0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076),
      0 10.1px 11.4px rgba(0, 0, 0, 0.086),
      0 19.2px 19.8px rgba(0, 0, 0, 0.092),
      0 38.4px 34.8px rgba(0, 0, 0, 0.1),
      0 101px 74px rgba(0, 0, 0, 0.13);
  }
}

.gradientshadow {
  .box, .circle {
    &::after{
      background-image: linear-gradient(  rgb(88, 195, 214), rgb(12, 75, 156) );
      filter: blur(20px);
      transform: translateY(10px);
      mix-blend-mode: multiply;
    }
  }
}

.dodgeshadow {
  .box, .circle {
    &::after{
      background-image: linear-gradient(  rgb(88, 195, 214), rgb(8, 42, 87) );
      filter: blur(20px);
      transform: translateY(10px);
      mix-blend-mode: color-dodge;
    }
  }
}

.longshadow {
  padding-bottom: 100px;;
  .box::after{
    background-image: linear-gradient(to bottom, rgb(0, 0, 0, .65), rgb(0, 0, 0, 0) );
    transform-origin: 50% 0;
    transform: translateY(50%) skewY(-45deg) skewX(25deg) scaleY(1.4);
  }
  .circle::after{
    background-image: linear-gradient(to bottom, rgb(0, 0, 0, .65), rgb(0, 0, 0, 0) );
    transform-origin: 50% 0;
    transform: translateY(50%) rotate(-45deg);
  }
}

.spinner {
  display: inline-block;
  width: 35%;
  height: 100px;
  .dot {
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 100px;
    animation: spin 2.1s cubic-bezier(.64,.01,.29,1) 0s infinite normal none running;
    &:after {
      content: ' ';
      display: block;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 20px;
    }
  }
  .dot1 { animation-delay: 200ms; }
  .dot2 { animation-delay: 400ms; }
  .dot3 { animation-delay: 600ms; }
  .dot4 { animation-delay: 800ms; }
  .dot5 { animation-delay: 1000ms; }
  .dot6 { animation-delay: 1200ms; }
  .dot7 { animation-delay: 1400ms; }
  .dot8 { animation-delay: 1600ms; }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner .box-shadow .dot:after {
  box-shadow: 0 10px 10px 0 rgb(0, 0, 0, .7);
}
.spinner .drop-shadow {
  filter: drop-shadow(0 10px 10px rgb(0, 0, 0, .9));
}

.stamp {
  .box {
    padding: 15px;
    background-color: transparent;
    &:after {
      background: radial-gradient(at center, transparent, transparent 10px, #fff 10px);
      background-size: 30px 30px;
      background-position: -15px -15px;
      filter: drop-shadow(0 0 6px rgba(12, 28, 32, 0.767));
    }
    .content {
      background-color: turquoise;
      width: 150px;
      height: 150px;
    }
  }
}

.neumorphism {
  $np-base: rgb(190, 205, 214);
  $np-dark: rgba(18, 47, 61, 0.5);
  $np-light: rgba(248, 253, 255, 0.9);
  $np-dark-tp: rgba(18, 47, 61, 0);
  $np-light-tp: rgba(248, 253, 255, 0);
  background-color: $np-base;
  padding: 50px;
  .box, .circle {
    background-color: $np-base;
    transition: box-shadow 0.5s;
    box-shadow:
      10px 10px 30px $np-dark,
      -10px -10px 30px $np-light,
      inset 10px 10px 30px transparent,
      inset -10px -10px 30px transparent;
    &:hover {
    box-shadow:
      10px 10px 30px transparent,
      -10px -10px 30px transparent,
      inset 10px 10px 30px $np-dark,
      inset -10px -10px 30px $np-light;
    }
  }
  .box {
    border-radius: 10px;
  }
}
</style>
