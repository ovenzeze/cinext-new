<template>
    <el-container class="inner-box-top">
      <transition name="list" appear>
      <div class="main">
        <div class="article">
          <img class="article-image" src="https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w"
               alt="">
          <div class="article-info">
            <h3 class="title">这是文章的标题</h3>
            <div class="info-item">
              <span>作者:</span>
              <span>Cinext</span>
            </div>
            <div class="info-item">
              <span>阅读:</span>
              <span>355次</span>
            </div>
            <div class="info-item">
              <span>评论:</span>
              <span>20条</span>
            </div>
            <div class="info-item">
              <span>发布日期:</span>
              <span>2018-6-22</span>
            </div>
          </div>
          <div class="article-text" v-html="articleText"></div>
        </div>
          <div class="comments-container">
            <p class="comments-title-text">{{comments.length}}条评论</p>
            <div v-if="comments.length !== 0" class="comments-box">
              <div v-for="item in comments" :key="item.commentId" class="comment-item">
                <div class="author-avator">
                  <img :src="item.userAvator"></img>
                </div>
                <div class="comment-info">
                  <div class="user-info">
                    <span>{{item.userName}}</span>
                    &nbsp
                    &nbsp
                    <span style="color: #ccc">{{item.createdTime}}</span>
                    <transition name="fade" mode="out-in">
              <span v-if="userLiked.indexOf(item.commentId) == -1" key="liked" @click="confirmLike(item.commentId)">
                <svg class="icon like-icon" aria-hidden="true">
                   <use xlink:href="#icon-zan"></use>
                </svg>
                <span style="color: #ccc">&nbsp赞</span>
              </span>
                      <span v-else key="like" @click="cancelLike(item.commentId)">
                <svg class="icon liked-icon" aria-hidden="true">
                   <use xlink:href="#icon-zan"></use>
                </svg>
                <span>&nbsp已赞</span>
              </span>
                    </transition>
                    <span v-if="item.likeCount" class="like-num-text">{{item.likeCount}}赞</span>
                    <span v-else class="like-num-text">快来第一个点赞吧</span>
                  </div>
                  <div class="comment-text" style="-webkit-box-orient:vertical;
">{{item.commentText}}
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="comments-box">
              <div class="comment-item no-comment-text">
                暂时还没有评论哦，快来畅所欲言吧！
              </div>
            </div>
          </div>

      </div>
      </transition>

      <div class="aside">
      </div>
      <transition name="list" appear>
      <div class="fixed-aside" :style="{top: fixedAsideTop}">
        <div class="info-container">
          <div class="author-info">
            <img class="author-avator" src="https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64"
                 alt="">
            <br>
            <span class="author-name">Cinext</span>
          </div>
          <div class="reading-info">
            <div class="article-num">
              <span class="title">文章总数</span>
              <br>
              <span class="num">13</span>
            </div>
            <div class="reading-count">
              <span class="title">阅读次数</span>
              <br>
              <span class="num">3456</span>
            </div>
          </div>
        </div>
        <div class="recom-container">
          <span class="recom-title">相关推荐</span>
          <div v-for="item in newsListRecom" :key="item.articleId" class="recom-item">
            <a :href='item.articleId' target="_blank" class="url">
              <img class="recom-cover" :src="item.coverUrl"
                   alt="">
            </a>
            <div class="recom-info-container">
              <a :href='item.articleId' target="_blank" class="url"><p class="info-text">{{item.title}}</p></a>
            </div>
          </div>
        </div>
      </div>
      </transition>

    </el-container>
</template>

<script>
  export default {
    data() {
      return {
        articleText: '<section powered-by="xiumi.us" style="font-size: medium; white-space: normal; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif;"><section><section><section powered-by="xiumi.us"><section><section><h2 style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">第三届 汇创青春</span></h2></section></section></section><section powered-by="xiumi.us"><section><section><h2 style="text-align: center;"><span style="font-size: 16px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">上海大学生文化创意作品展示季</span>(综合类-影视作品)</span></h2><p style="text-align: center;"><img src="http://pic.icinext.com:8000/rich/1522160301098011617.jpg" title="1522160301098011617.jpg" alt="1522160301098011617.jpg" width="314.7" height="477.5" border="0" vspace="0" style="width: 314.7px; height: 477.5px;"/></p></section></section></section></section></section></section><p style="font-size: medium; white-space: normal; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif;"><br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p><p></p><section powered-by="xiumi.us" style="white-space: normal;"><section><section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><br/></span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">第三届“汇创青春”上海大学生文化创意作品展（综合类-影视作品）由中共上海市教育卫生工作委员会、上海市教育委员会主办，上海大学上海电影学院承办，光唯文化合作支持，打造“Cine Next青年影展”，希望能够服务于青年电影人，同时也为青年电影人提供更好的展示平台：</span></p><h2 style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">让每一颗电影的种子都能发芽!</span></h2></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><p><br style="margin: 0px; padding: 0px;"/></p></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><section data-mpa-template-id="509" data-mpa-color="#ffffff" data-mpa-category="title"><section><section><h1><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·影展时间·</span></h1></section></section></section></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><section powered-by="xiumi.us"><section><section><section data-mpa-template-id="901" data-mpa-color="#ffffff" data-mpa-category="body"><section><section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、参展作品征集：3月——5月1日；</span><br/></p><section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、评审团筛选后，入围40部作品，展映25部；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、作品展映： 5月下旬至6月上旬（高校&amp;影院大荧幕展映）；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">4、颁奖典礼于作品展映期间举行；</span></p><p><br style="margin: 0px; padding: 0px;"/></p><h1><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·影展对象·</span></h1></section></section></section></section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、上海市在校大学生：专科生、本科生、研究生、博士生、留学生；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、欢迎毕业生积极参与，我们有毕业生邀请专场展映；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、本次影展将邀请长三角地区相关专业的学校参与，选出优秀作品参加影展。<span style="background-color: rgb(255, 192, 0);">（长三角地区学校不参加评奖）</span></span></p><p><br/></p><h1><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·奖项设置·</span><br/></h1><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、“十佳奖”</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、“优秀奖”</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、“入围奖”</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">4、“校园创意奖”<span style="background-color: rgb(255, 192, 0);">（针对非专业院校学生作品）</span></span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">5、“剧本奖”<span style="background-color: rgb(255, 192, 0);">（视投稿情况待定）</span></span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; background-color: rgb(255, 192, 0);">*2018年的奖项均设有奖金！</span></p><p><br/></p><h1><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·参展作品要求·</span></h1><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、参展作品题目可自拟。内容健康，不能与中华人民共和国法律相抵触。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、参展者报名表根据要求提供真实有效的个人资料，如果不填写或者填写不全者、填写内容虚假者将被取消参展资格。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;3、参展作品类别：电影短片、纪录片、实验片、动画片（包括以手工绘制为主的传统动画片和以计算机为主的电脑动画片）、剧本（剧本只评奖不参展）、以及在形式和内容上创新的实验影像。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 4、作品完成时限要求：2018年6月前完成的原创作品，参赛者应确认拥有其作品的完整著作权。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 5、所有参展作品将不予退还，请参赛者自留备份。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 6、所有参展作品版权归作者本人所有，建议在递交作品参展之前或同时注册版权。主办方不承担包括名誉权、隐私权、著作权、商标权等纠纷而产生的法律责任，其法律责任由参展者本人承担。但主办方拥有媒体宣传使用权。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 7、参展作品版权和著作权由作者享有；对于获奖作品，除非特别申明，组委会有权无偿在媒体上展示、展出、结集出版，或用于与艺术教育相关的活动。主办方享有将获奖作品用于影视教育和知识产权宣传等非商业性活动的展出和使用权。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;&nbsp;8、影展组委会不承担参赛作品在邮寄过程中的丢失、毁损责任及其他由不可抗拒因素造成的任何参赛资料的遗失、错误或毁损责任。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 9、影展组委将会向获奖者发出获奖通知，若获奖通知发出后两周内无人确认与领取，则视其为自动放弃。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; 10、本细则一旦发生变动，将会在网站上提示修改内容。若参展者不接受修改条款，有权退出此次影展。如果参展者在公告发出七个工作日后仍未通知组委会放弃参赛，则视参展者为接受所有变动内容。</span></p><p><br style="margin: 0px; padding: 0px;"/></p><h1><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·报名表下载·</span><br/></h1><section></section><h3 style="text-align: center;"><span style="font-size: 14px; background-color: rgb(255, 192, 0);">首先，关注“Cinext青年电影”公众号</span><br/><br/></h3><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、Cinext青年电影公众号菜单栏——点击“作品报名”，下载“2018汇创青春Cine Next青年影展作品类报名表”；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><br/></span></p><p style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><img src="http://pic.icinext.com:8000/rich/1522161457338080852.jpg" title="1522161457338080852.jpg" alt="1522161457338080852.jpg" width="300" height="250" border="0" vspace="0" style="width: 300px; height: 250px;"/></span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><br/></span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、Cinext青年电影公众号菜单栏——点击“剧本报名”，下载“2018汇创青春Cine Next青年影展剧本类报名表”；</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><br/></span></p><p style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://pic.icinext.com:8000/rich/1522161527610039918.jpg" title="1522161527610039918.jpg" alt="1522161527610039918.jpg" width="300" height="250" border="0" vspace="0" style="width: 300px; height: 250px;"/></span></p><h2><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">·提交材料·</span><br/></h2><section></section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、必须提供项：</span><br/></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; （1）《报名表》一份</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; （2）导演个人照片一张（可提供多张，组委会将随机抽取展示）；作品宣传海报一张；作品剧照三张。（不同画面的剧照JPG格式 1024*768以上）</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; （3）需提交完整作品视频（作品分辨率不小于1920×1080像素，尽量采用H.264压缩编码的MP4格式）、不超过两分钟的作品预告片、故事梗概（100字左右）缺一不可。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; （4）将作品刻录在数据光盘上，光盘上应用记号笔标明作品名称、影视类作品类别、时长等信息。附一份“2018汇创青春上海大学生文化创意展—Cine Next青年影展报名表” 。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp; （5）若提交剧本（未拍摄），需提交剧本、剧本类报名表、及作者照片一张（可提供多张，组委会将随机抽取展示）。剧本格式要求，题目三号黑体，小标题四号黑体，正文小四宋体，单倍行距，篇尾请注明姓名、联系方式、就读高校院系或毕业院校、专业和通讯地址。</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、建议提供项：</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;（1）导演（作者）阐述</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;（2）不超过两分钟的团队宣传片</span></p><p><br style="margin: 0px; padding: 0px;"/></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; background-color: rgb(255, 192, 0);">备注：网络方式（网站、邮箱、网盘）提交作品材料均为电子版。</span></p><p><br style="margin: 0px; padding: 0px;"/></p><h2><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">·作品提交方式·（三选一）</span><br/></h2><section></section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、邮寄地址：（请将打印文件和光盘文件投寄以下地址）</span><br/></p></section><p><br/></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">上海市静安区广中路788号上海大学行健楼434</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">汇创青春Cine Next青年影展组委会（收）</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">邮编：200072</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">电话：+86 17521134972（工作时间）</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、网站投递：</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">www.icinext.com</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、电子邮箱：</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">tougao@icinext.com</span></p><section data-mpa-template-id="709" data-mpa-color="#ffffff" data-mpa-category="title"><section><section><section><section data-mpa-template-id="709" data-mpa-color="#ffffff" data-mpa-category="title"><section><section><section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（请将数据文件通过邮件附件和网盘形式发送到以下邮箱，</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">来件格式：影展_姓名_片名，请标明毕业与否）</span></p></section></section></section></section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><br style="margin: 0px; padding: 0px;"/></span></p></section></section></section></section><h2><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">·组委会联系（咨询）方式·</span><br/></h2><section><section></section><section></section><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">地址：上海市静安区广中路788号上海大学行健楼434室&nbsp; &nbsp;</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">汇创青春Cine Next青年影展组委会</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">邮编：200072</span></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">咨询邮箱：cinext@icinext.com&nbsp;</span><br/></p><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">电话：+86 17521134972（工作时间）</span><br/></p><p><br style="margin: 0px; padding: 0px;"/></p></section></section></section></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><section powered-by="xiumi.us"><section><section><p><br style="margin: 0px; padding: 0px;"/></p></section></section></section></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><p><br style="margin: 0px; padding: 0px;"/></p><p style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">「投稿不一定会回复」邮箱：cinext@icinext.com</span></p><p style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">想跟我们聊聊也可以后台留言，没关系，别害羞</span></p></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><p><br style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p></section></section></section><section powered-by="xiumi.us" style="white-space: normal;"><section><section><p style="text-align: center;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">活动更多信息发布，请关注↓</span></p></section></section></section><p></p><p style="white-space: normal;"><br/></p><p style="white-space: normal; text-align: center;"><img src="http://pic.icinext.com:8000/rich/1522161375017006979.gif" title="1522161375017006979.gif" alt="111111.gif"/></p><p><br/></p>',
        comments: [
          {
            userName: "肆无忌惮",
            userId: '221',
            userAvator: '',
            createdTime: '2018-6-3 11:20:20',
            likeCount: 1531,
            commentId: 'C001',
            commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
          },
          {
            userName: "Cinext",
            userId: '222',
            userAvator: '',
            createdTime: '2018-6-3 11:20:20',
            likeCount: 31,
            commentId: 'C002',
            commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
          },
          {
            userName: "Clay",
            userId: '223',
            userAvator: '',
            createdTime: '2018-6-3 11:20:20',
            likeCount: 151,
            commentId: 'C003',
            commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
          },
          {
            userName: "Endy",
            userId: '224',
            userAvator: '',
            createdTime: '2018-6-3 11:20:20',
            likeCount: 11,
            commentId: 'C004',
            commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
          },
        ],
        userLiked: ['C001', 'C002'],
        fixedAsideTop: '80px',
        stopScrollTop: 0,
        newsListRecom: [],
      }
    },
    async mounted() {
      window.addEventListener('scroll', this.handleScroll)
      const recomResult = await this.axios.get(`//www.icinext.com:9099/api/get/newsListRecom`)
      if (recomResult.data.code === 0) {
        this.newsListRecom = recomResult.data.data
      }
      console.log("newsListRecom",this.newsListRecom)
      // console.log("clientHeight", this.clientHeight)
      // console.log("stopScrollTop", this.stopScrollTop)

    },
    methods: {
      formatDevices(arr) {
        let devicesStr = ''
        if (arr && arr.length !== 0) {
          arr.forEach((item) => {
            devicesStr += `${item}; `
          })
        }
        else {
          devicesStr = '暂无设备信息'
        }
        return devicesStr
      },
      formatDuration(seconds) {
        let sed = seconds % 60;
        let minutes = (seconds - sed) / 60;
        return `${minutes}分${sed}秒`
      },
      cancelLike(id) {
        let index = this.userLiked.indexOf(id)
        this.userLiked.splice(index, 1)
      },
      confirmLike(id) {
        this.userLiked.push(id)
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.stopScrollTop = document.body.clientHeight - 381 - 30 - 80 - 700
        // console.log("scrollTop = ", scrollTop)
        if (scrollTop < this.stopScrollTop) {
          this.fixedAsideTop = `${scrollTop + 80}px`
        }
      },
    },
    async created() {
      const resComments = await this.axios.get(`//www.icinext.com:9099/api/get/comments/${this.currentVid}`)
      if(resComments.data.code === 0) {
        console.log(resComments.data)
        this.comments = resComments.data.data
      }
    },
  }
</script>

<style scoped>
  .outer-box {
    flex-direction: column;
    position: relative;
  }

  .inner-box-top {
    flex-direction: row;
    /*height: 1000px;*/
    margin-top: 60px;
    background-color: rgba(23, 247, 226, 0.35);
  }

  .inner-box-bottom {
    background-color: rgba(23, 247, 226, 0.35);
  }

  /*main style*/
  .main {
    flex: 9;
    height: 100%;
    padding: 20px 0 0px 20px;
  }

  .article {
    height: auto;
    background-color: white;
  }

  .article-image {
    width: 100%;
    height: 400px;
  }

  .article-info {
    padding-left: 20px;
  }

  .article-info .title {
    font-size: 22px;
  }

  .info-item {
    display: inline-block;
    margin-right: 35px;
    color: #a7a5a1c9;
  }

  /*main style end*/
  /*fixed aside style*/
  .fixed-aside{
    position: absolute;
    right: 20px;
    width: 17.5%;
    height: 720px;
    overflow: scroll;
  }
  /*fixed aside style end*/
  /*aside style*/
  .aside {
    flex: 2;
    height: 100%;
    padding: 20px;
  }

  .info-container {
    height: auto;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .author-info {
    flex: 1;
    text-align: center;
  }

  .author-info .author-avator {
    border-radius: 50%;
  }

  .author-name {
    display: inline-block;
    margin: 15px;
    font-size: 18px;

  }

  .reading-info {
    flex: 1;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .reading-info .title {
    display: inline-block;
    color: #d5d5d8b0;
    font-size: 15px;
    margin-bottom: 10px;
  }

  .reading-info .num {
    font-size: 18px;
    font-weight: bold;
  }

  .article-num {
    flex: 1;
  }

  .reading-count {
    flex: 1;
  }

  .recom-container {
    height: auto;
    padding: 20px 0px;
    margin-top: 10px;
    text-align: center;
  }

  .recom-item {
    margin-bottom: 15px;
    position: relative;
    border-radius: 5%;
    cursor: pointer;
  }

  .recom-title {
    display: inline-block;
    margin-bottom: 20px;
  }

  .recom-cover {
    width: 100%;
    height: 130px;
    opacity: 0.9;
    transition: all 0.5s;
  }

  .recom-cover:hover {
    opacity: 1;
  }

  .recom-info-container {
    position: absolute;
    bottom: 2px;
    height: 28px;
    background-color: rgba(144, 138, 138, 0.43);
    width: 100%;
    text-align: left;
  }

  .recom-info-container .info-text:hover {
    color: rgba(249, 244, 244, 1);
    font-size: 15px;
  }

  .recom-info-container .info-text {
    overflow: hidden;
    color: rgba(249, 244, 244, 0.74);
    font-size: 14px;
    line-height: 28px;
    margin: 0;
    margin-left: 5px;
    transition: all 0.8s;
  }

  /*aside style end*/
  .article-text {
    padding: 30px;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(5px);
  }

  /*comments-container styles*/
  .comments-container {
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: white;
    min-height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }

  .comments-title-text {
    font-size: 20px;
    padding-left: 20px;
    /*color: #d7d9dc;*/
  }

  .comments-box {
    border-top: 1px solid #ccc;
    padding-bottom: 20px;
    /*max-height: 500px;*/
    /*overflow: scroll;*/
  }

  .comment-item {
    max-height: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }

  .no-comment-text {
    padding: 20px;
    font-size: 18px;
    color: #bcc3b4;
  }

  .author-avator {
    flex: 1;
    text-align: center;
    padding-top: 10px;
  }

  .author-avator img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .comment-info {
    flex: 9;
  }

  .user-info {
    margin-bottom: 10px;
    color: #51bb65;
    font-size: 15px;
    /*width: 80%;*/
  }

  .comment-text {
    font-size: 15px;
    color: #8c8585d9;
    /*width: 80%;*/
    display: -webkit-box;
    line-height: 28px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .like-num-text {
    float: right;
  }

  .like-icon {
    margin-left: 18px;
    font-size: 18px;
    cursor: pointer;
    color: #ccc;
  }

  .liked-icon {
    margin-left: 18px;
    font-size: 17px;
    cursor: pointer;
  }
  /*comments-container styles end*/
  /*news recom style*/
  .recom-container .url{
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }
  .recom-container .url:hover{
    color: #45bd82;
    text-decoration: dotted;
  }
  /*news recom style end*/
  /*list-transition*/
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  /*list-transition end*/
</style>
