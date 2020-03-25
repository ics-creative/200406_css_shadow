<template>
  <div class="anim-performance-root">
    <h3>影のスムーズなアニメーション</h3>
    <div class="part">
      <div class="note">NG: Shadowのサイズを動的にアニメーションするとガタつきが目立つ（特にSafari）</div>
      <div class="box box1"></div>
    </div>
    <div class="part">
      <div class="note">OK: サイズではなく透明度を動的に変えた方が滑らかに見える</div>
      <div class="box box2"></div>
    </div>

    <h3>アニメーションのトラブル</h3>
    <div class="note">※これらのサンプルは2020/3/25時点のChrome, Safari, Firefoxで表示を確認しています。不具合やブラウザの制限はバージョンで変わる可能性があるため、最新の環境でご確認ください</div>

    <h4>hoverで影を大きくすると見切れる（Mac Safari）</h4>
    <div class="trouble1">
      <div class="part">
        <div class="note">NG: hoverで影を大きくすると切れる</div>
        <div class="outer">
          <div class="ng"><div class="img-tama"></div></div>
        </div>
      </div>
      <div class="part">
        <div class="note">OK: 十分なpaddingを与えるとOK</div>
        <div class="outer">
          <div class="ok"><div class="img-tama"></div></div>
        </div>
      </div>
    </div>

    <h4>影がアニメーションされない（Mac Safari）</h4>
    <div class="trouble2">
      <div class="part">
        <div class="note">css transition（NG）</div>
        <div class="outer">
          <div class="ng"><div class="img-tama"></div></div>
        </div>
      </div>
      <div class="part">
        <div class="note">css animation（一見良さそうに見えるが...）</div>
        <div class="outer">
          <div class="ok"><div class="img-tama"></div></div>
        </div>
      </div>
    </div>

    <h4>アニメーション中に影が消える（Mac Safari）</h4>
    <div class="part">
      <div class="note">NG: 複数のdrop-shadowを適用</div>
      <div class="menu-icon-outer ng">
        <div class="menu-icon">
          <div class="bar bar-1" />
          <div class="bar bar-2" />
          <div class="bar bar-3" />
        </div>
      </div>
    </div>
    <div class="part">
      <div class="note">OK: 一つだけならOK</div>
      <div class="menu-icon-outer ok">
        <div class="menu-icon">
          <div class="bar bar-1" />
          <div class="bar bar-2" />
          <div class="bar bar-3" />
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.anim-performance-root {
  padding: 50px 30px;
}

.box {
  display: inline-block;
  padding: 30%;
  border: 1px solid rgb(220, 220, 220);
  background-color: rgb(240, 240, 240);
  margin-bottom: 50px;
}

.box1{
  transition: box-shadow 2s ease-out;
  &:hover {
    box-shadow: 0 15px 20px 5px rgb(0, 0, 0, .9);
  }
}

.box2{
  transition: box-shadow 2s ease-out;
  box-shadow: 0 15px 20px 5px rgb(0, 0, 0, 0);
  &:hover {
    box-shadow: 0 15px 20px 5px rgb(0, 0, 0, .9);
  }
}

.img-tama {
 position: relative;
  display: inline-block;
  width: 156px;
  height: 300px;
  background-image: url(./tama.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px dashed gray;
}
.part {
  display: inline-block;
  width: 40%;
  margin: 5%;
}
.outer {
  border: 1px dashed silver;
}

.trouble1 {
  .ng {
    display: inline-block;
    font-size: 0;
    filter: drop-shadow(0 0px 3px rgb(0, 0, 0, .5));
    &:hover {
      filter: drop-shadow(0 10px 50px rgb(0, 0, 0, .9));
    }
  }
  .ok {
    display: inline-block;
    font-size: 0;
    padding: 100px;
    filter: blur(0) drop-shadow(0 0px 3px rgb(0, 0, 0, .9));
    &:hover {
      filter: drop-shadow(0 10px 60px rgb(0, 0, 0, .9));
    }
  }
}

@keyframes shadow {
  0% { filter: drop-shadow(0 0px 3px rgb(0, 0, 0, .9)); }
  100% { filter: drop-shadow(0 10px 60px rgb(0, 0, 0, .9)); }
}

@keyframes rbordered {
  0% { rotate: 0; }
  100% { rotate: 30deg }
}
.trouble2 {
  .ng {
    display: inline-block;
    font-size: 0;
    padding: 100px;
    transition: filter 1s ease-out;
    filter: drop-shadow(0 0px 3px rgb(0, 0, 0, .5));
    &:hover {
      filter: drop-shadow(0 10px 60px rgb(0, 0, 0, .9));
    }
  }
  .ok {
    display: inline-block;
    font-size: 0;
    padding: 100px;
    &:hover {
      animation: shadow 1s both;
    }
  }
}

.menu-icon-outer {
  margin-top: 100px;
  padding: 50px;
}
.menu-icon-outer.ng {
  filter: drop-shadow(0 3px 6px rgba(48, 29, 17, 0.5)) drop-shadow(0 6px 12px rgba(241, 205, 128, 0.5));
}
.menu-icon-outer.ok {
  filter: drop-shadow(0 3px 6px rgba(48, 29, 17, 0.5));
}
.menu-icon {
  position: relative;
  width: 70px;
  height: 70px;
  padding: 50px;
  .bar {
    position: absolute;
    width: 70px;
    height: 10px;
    background-color: rgb(255, 216, 89);
    left: 0;
    transition: transform 0.5s;
  }
  .bar-1 {
    top: -5px;
    transform-origin: left center;
  }
  .bar-2 {
    top: 30px;
  }
  .bar-3 {
    top: 65px;
    transform-origin: left center;
  }
}
.menu-icon:hover {
  .bar-1 {
    transform: rotate(45deg) scaleX(1.414);
  }
  .bar-2 {
    transform: scaleX(0);
  }
  .bar-3 {
    transform: rotate(-45deg) scaleX(1.414);
  }
}

</style>
