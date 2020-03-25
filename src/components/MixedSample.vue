<template>
  <div class="sample">
    <div class="content-wrapper">
      <div class="content">
        <div class="box normal"></div>
        <div class="box before multiply"><div class="box-content"></div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  box-sizing: border-box;
}
.sample {
  width: 100%;
  height: 100vh;
  background: url(./bluepaint.jpg);
  background-size: cover;
}
.content-wrapper {
  width: 700px;
  height: 800px;
  position: absolute;
  left: calc(50% - 350px);
  top: calc(50vh - 400px);
}
.content-wrapper::before {
  content: ' ';
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background-image: linear-gradient( rgb(17, 114, 131), rgb(6, 30, 61));
  filter: blur(80px);
  transform: translateY(10px);
  mix-blend-mode: multiply;
}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  /* background: url(./bluepaint.jpg); */
  backdrop-filter: brightness(1.7) blur(30px);
  /* background: linear-gradient( rgb(231, 245, 247), rgb(135, 169, 185)); */
  border-radius: 20px;
  padding: 30px;
}

.box {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: rgb(217, 242, 247);
  margin: 10px;
}

.normal {
  box-shadow: 0 15px 25px 0 rgb(14, 61, 100);
}
.box.before::before {
  content: ' ';
  position: absolute;
  display: block;
  z-index: 0;
  width: 120px;
  height: 120px;
  background-image: linear-gradient( rgb(17, 114, 131), rgb(6, 30, 61));
  filter: blur(30px);
}
.box-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: rgb(217, 242, 247);
}
.box.before.multiply::before {
  mix-blend-mode:screen;
}
</style>
