<template>
  <div>
    高德地图
    <div id="container" />
  </div>
</template>
<script>
export default {

  // 初始化地图
  mounted () {
    window.onLoad = function () {
      // eslint-disable-next-line no-undef
      const map = new AMap.Map('container', {
        center: [102.52, 24.35],
        zoom: 9
      })

      // eslint-disable-next-line no-undef
      const toolbar = new AMap.ToolBar()
      map.addControl(toolbar)

      // 添加地图标点
      // eslint-disable-next-line no-undef
      const maker = new AMap.Marker({
        // eslint-disable-next-line no-undef
        position: new AMap.LngLat(102.52, 24.35),
        // content: '1',
        title: '家乡'
      })

      map.add(maker)
    }

    const key = '388587267bf750fe3339eca5d4995f85'
    const url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad&plugin=AMap.ToolBar`
    const jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  }
}
</script>

<style scoped>
#container {
  width:600px;
  height:600px;
}
</style>
