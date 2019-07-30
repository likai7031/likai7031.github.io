const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
    autoplay: true,
	listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
	 loop: 'all',
    audio: [
      {
        name: '爱错',
        artist: '王力宏',
        url: 'http://www.ytmp3.cn/down/43576.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '心动',
        artist: '陈洁仪',
        url: 'http://www.ytmp3.cn/down/31368.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '左右收',
        artist: '陈洁仪',
        url: 'http://www.ytmp3.cn/down/31592.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '消愁',
        artist: '李晓东',
        url: 'http://stor.cloudmusics.cn/mp3/2019/07/35dc30672ed859aa3bd8803854869909.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '九万字',
        artist: '黄诗扶',
        url: 'http://www.ytmp3.cn/down/60258.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '梦',
        artist: '柴田淳',
        url: 'http://www.ytmp3.cn/down/37165.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      }
    ]
});