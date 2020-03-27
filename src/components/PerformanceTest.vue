<template>
  <div class="shadow-test1">
    <h4>影のパフォーマンス<br />drop-shadowを大量に適用すると重くなりやすい（特にChrome）</h4>
    <div class="cont">
      <button @click="addBars">100個追加</button>
      <button @click="reset">リセット</button>
      現在の要素数： {{ bars.length }} |
      影の付け方：<select v-model="type">
        <option value="box">box-shadow</option>
        <option value="drop-each">drop-shadow（個々に適用）</option>
        <option value="drop-one">drop-shadow（まとめて適用）</option>
      </select>
    </div>
    <div class="stage stage1">
      <div class="bars" :class="`type-${type}`">
        <div class="bar" v-for="(bar, index) in bars" :key="index"
          :style="{
            left: `${bar.x * 100}%`,
            top: `${bar.y * 100}%`
          }"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      bars: [],
      type: 'box'
    }
  },
  methods: {
    addBars () {
      const ADDCOUNT = 100
      const bars = Array(ADDCOUNT).fill(0).map(() => ({ x: Math.random(), y: Math.random() }))
      this.$data.bars.push(...bars)
    },
    reset () {
      this.$data.bars = []
    }
  },
  mounted () {
    this.addBars()
  }
}
</script>

<style lang="scss" scoped>
.stage {
  width: 90%;
  height: 600px;
  margin: 10px 5%;
  position: relative;
  border: 1px solid #2c3e50;
  box-sizing: border-box;
  overflow: hidden;
}
.bars {
  position: relative;
  width: 100%;
  height: 100%;
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 50px;
  background-color: rgb(236, 221, 132);
  animation: rotate 1s linear 0s infinite;
}
.bars.type-box .bar {
  box-shadow: 0 0 10px 0 rgb(34, 31, 28, .6);
}
.bars.type-drop-each .bar {
  filter: drop-shadow(0 0 10px rgb(34, 31, 28, .6));
}
.bars.type-drop-one {
  filter: drop-shadow(0 0 10px rgb(34, 31, 28, .6));
}
@keyframes rotate {
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
}
</style>
