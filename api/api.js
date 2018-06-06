// host: www.icinext.com
// api-format: host/type/action/name(主机/请求类型/请求动作/路由名称)
// eg: www.icinext.com/api/get/carousel
// 错误码(前端不关心具体是什么原因导致的错误，只需要成功/失败两个状态就可以)
// code = {
//   0: "success",
//   -1: "error"
// }


// path: api/get/carousel
// desc: '获取首页轮播图信息'
// introInfo = {
//   videoName: Required|String,//视频的标题
//   IntroText: Required|String,//视频的推介语
// }
// picItem: {
//   url: Required|String,// 图片地址
//   title: Required|String,// 图片标题(图片加载失败的提示语)
//   vid: Required|String,//视频的唯一ID
//   noTextIntro: Optional|boolean,// 是否存在文字描述，可选参数， 默认为false(存在文字描述)
//   introInfo: Optional|introInfo //文字描述信息，默认需要填写，如果没有需要设置noTextIntro为true
// }
// response: {
//   code: Required|int,
//   data: Required|Array|picItem
// }


// path: api/get/cirecom
// desc: '每日推荐视频'
// response: {
//     code: Required|int,
//     coverUrl: Required|String, //图片地址
//     videoId: Required|String, //视频唯一ID
//     title: Required|String, //视频标题
//     desc: Required|String, //视频描述
//     author: Required|String, //视频作者
//     videoDuration: Required|int, //视频时长，单位 秒
//     devices: Required|Array, //视频拍摄设备，数组，至多可以有三个 eg: ['SONY ILCE-7R','Canon EOS-1D Mark III']
//     playTimes: Required|int, //视频播放次数
//     tags: Required|Array //视频TAG信息，数组，至多可以有三个 eg: tags: ['青春','校园']
// }


// path: api/get/hotList/sequence
// desc: '热门精选视频推荐'
// intro: 每次获取9条热门精选视频，sequence参数代表获取次数，对于同一个用户(session)需要保证不同sequence推出来的视频没有重复
// hotItem: {
// coverUrl: Required|int,
// videoId: Required|String, //视频唯一ID
// title: Required|String, //视频标题
// desc: Required|String, //视频描述
// videoDuration: Required|int, //视频时长，单位 分钟
// playTimes: Required|int, //视频播放次数
// tags: Required|Array //视频TAG信息，数组，至多可以有三个 eg: tags: ['青春','校园']
// }
// response: {
//     code: Required|int,
//     data: Required|Array|hotItem
// }


// path: api/get/newsList/sequence
// desc: '图文内容推荐'
// intro: 每次获取10条图文内容，sequence参数代表获取次数，对于同一个用户(session)需要保证不同sequence推出来的内容没有重复，同时sequence最大值为5（即用户最多可加载更多内容5次）
// commentInfo = {
//   userId: Required|String, 用户唯一Id
//   userName: Required|String,'庄深沉', 用户昵称
//   comment: Required|String, 用户评论
//   likeCount: Required|int, 用户评论点赞数
// }
// newsItem= {
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
//   createTime: Required|String, 内容发布日期，只需要精确到天 eg: '2017-08-22'
//   commentNum: Required|int, 评论数
//   tags: Required|Array|String, 标签，最多支持三个标签 eg: ['电影节', '资讯', '赫尔佐格']
//   author: Required|String, 图文内容的作者
//   intro: Required|String, 图文内容的导语，最多140字
//   hasHotComment: Required|Boolean, 默认为false,无热门评论
//   hotComment: Optional|Object|commentInfo, 当有热门评论时，需要携带commentInfo信息
// }
// response: {
//     code: Required|int,
//     data: Required|Array|newsItem
// }



// path: api/get/newsListRecom/
// desc: '热门图文内容推荐'
// intro: 每次获取10条图文内容
// newsItem= {
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
//   createTime: Required|String, 内容发布日期，只需要精确到天 eg: '2017-08-22'
//   commentNum: Required|int, 评论数
//   tags: Required|Array|String, 标签，最多支持三个标签 eg: ['电影节', '资讯', '赫尔佐格']
//   author: Required|String, 图文内容的作者
//   intro: Required|String, 图文内容的导语，最多140字
// }
// response: {
//     code: Required|int,
//     data: Required|Array|newsItem
// }


// path: api/get/newsListBanner/
// desc: '热门图文内容Banner'
// intro: 三条热门/编辑推荐图文内容（一主两次）[主要图文会有大图Banner,次要的是小图Banner]，置于图文页最上方
// newsItem= {
//   position: 0, 标识图文主次，主要图文[大图Banner]position为0，次要[小图Banner]为1
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
// }
// response: {
//     code: Required|int,
//     data: Required|Array|newsItem
// }
