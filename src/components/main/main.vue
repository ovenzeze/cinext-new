<template>
  <div>
    <transition name="fade" appear>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in slideArr" :key="item.title">
        <div class="intro" v-if="!item.noTextIntro">
        <h3 class="post-title">不二</h3>
          <p class="post-desc">
            以平行蒙太奇和交叉蒙太奇的双重表现手法来展现三个少女之间的故事。要离开上海的少女a与赴朋友之约的少女b。</p>
          <a href="//www.baidu.com">
            <el-button plain>立刻观看</el-button>
          </a>
        </div>
        <div class="play">
          <a href="//www.baidu.com">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
          </a>
        </div>
        <img :src='item.url' :alt="item.title">
      </el-carousel-item>
    </el-carousel>
    </transition>
    <h3 class="recom-title">每日推荐</h3>
    <transition name="fade" appear>
    <cinextRecom></cinextRecom>
    </transition>
    <h3 class="recom-title">热门精选</h3>
    <hotList></hotList>
    <!--<div>-->
      <!--<section style="margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); box-sizing: border-box;">-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px; text-align: center; box-sizing: border-box;"><img-->
            <!--class="" data-ratio="1.4140625" data-w="640"-->
            <!--src="https://mmbiz.qlogo.cn/mmbiz_jpg/eicZYFJeshnq3zGykZUib6Un5yLsuk3ydGUkIBct0MU2czOV7xHibLBEArg6CicGXtA9WnZBoRu11x2uRdwWqsrMSw/0?wx_fmt=jpeg"-->
            <!--data-type="jpeg"-->
            <!--style="margin: 0px; padding: 0px; max-width: 100%; height: auto !important; vertical-align: middle; box-sizing: border-box;"/>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box; text-align: center;">-->
              <!--<br style="margin: 0px; padding: 0px;"/><strong-->
              <!--style="margin: 0px; padding: 0px; font-size: 16px; letter-spacing: 3px;">Cine Next青年影展作品混剪</strong></p>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
              <!--style="margin: 0px; padding: 0px;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 2px; border-top: 0.1em solid rgb(0, 0, 0); border-bottom: 0.1em solid rgb(0, 0, 0); line-height: 1.3; letter-spacing: 3px; font-size: 16px; box-sizing: border-box;">-->
              <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
              <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--<span-->
                  <!--style="margin: 0px; padding: 0px; background-color: rgb(255, 202, 0); box-sizing: border-box;"><strong-->
                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">Cine Next青年影展</strong></span></p>-->
              <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--展映第二场</p>-->
              <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--<strong style="margin: 0px; padding: 0px; box-sizing: border-box;">6月2日&nbsp; 星期五</strong></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--<strong style="margin: 0px; padding: 0px; box-sizing: border-box;">14：00-16：30</strong></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--<strong style="margin: 0px; padding: 0px; box-sizing: border-box;">杨浦紫荆卢米埃影城</strong></p>-->
              <!--<p-->
                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                <!--<strong style="margin: 0px; padding: 0px; box-sizing: border-box;">杨浦区控江路1628号紫荆广场5楼</strong></p>-->
              <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
              <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; width: 654px; vertical-align: top; box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; display: inline-block; width: 654px; vertical-align: top; border-width: 4px 1px 1px 4px; border-radius: 0px; border-style: solid; border-color: rgb(255, 202, 0); box-sizing: border-box;">-->
                    <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                             <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                      <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                        <!--<section class=""-->
                                 <!--style="margin: 0px; padding: 0px; text-align: center; line-height: 1.6; letter-spacing: 10px; font-size: 18px; color: rgb(62, 62, 62); box-sizing: border-box;">-->
                          <!--<p-->
                            <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                            <!--<span style="margin: 0px; padding: 0px; box-sizing: border-box;"><strong-->
                              <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">也许时光不会老</strong></span></p>-->
                        <!--</section>-->
                      <!--</section>-->
                    <!--</section>-->
                  <!--</section>-->
                <!--</section>-->
              <!--</section>-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 10px 0px; padding: 0px 3px; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px 0px -2em; padding: 0px 10px 5px; display: inline-block; vertical-align: middle; width: 648px; box-sizing: border-box;">-->
                    <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                             <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                      <!--<section class=""-->
                               <!--style="margin: 10px 0px; padding: 0px; text-align: center; box-sizing: border-box;">-->
                        <!--<section class=""-->
                                 <!--style="margin: 0px; padding: 0px; display: inline-block; vertical-align: middle; box-sizing: border-box;">-->
                          <!--<section-->
                            <!--style="margin: 0px; padding: 0px; border-left: 2px solid rgb(12, 12, 12); border-top: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-right-color: rgb(12, 12, 12); border-bottom-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
                          <!--<section style="margin: -8px 0px; padding: 0px 10px; box-sizing: border-box;">-->
                            <!--<section class=""-->
                                     <!--style="margin: 0px; padding: 0px; font-size: 10px; letter-spacing: 1px; box-sizing: border-box;">-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<br style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">导演:&nbsp;丁楠</strong></span>-->
                              <!--</p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">编剧:&nbsp;丁楠</strong></span>-->
                              <!--</p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">摄影：何浩</strong></span></p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">类型:&nbsp;剧情&nbsp;/&nbsp;爱情<br-->
                                  <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/>片长: &nbsp;24 分钟</strong></span>-->
                              <!--</p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                                <!--<br style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; text-align: left; text-indent: 2em; box-sizing: border-box;">-->
                                <!--<span style="margin: 0px; padding: 0px; font-size: 14px;">“如何让你遇见我，在我最美的时刻”林诺、云南是大学中让人羡慕的一对情侣。徐晟睿和云南从小一起长大，默默喜欢云南。本片，讲述了林诺、云南、徐晟睿之间懵懂又纯洁的爱情故事，相遇、爱情又离开，青春似乎总是围绕这些话题。</span>-->
                              <!--</p>-->
                              <!--<p-->
                                <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; text-align: left; box-sizing: border-box;">-->
                                <!--<br style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p></section>-->
                          <!--</section>-->
                          <!--<section-->
                            <!--style="margin: 0px 0px 0px auto; padding: 0px; border-right: 2px solid rgb(12, 12, 12); border-bottom: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-top-color: rgb(12, 12, 12); border-left-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
                        <!--</section>-->
                      <!--</section>-->
                    <!--</section>-->
                    <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                             <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                      <!--<section class=""-->
                               <!--style="margin: 10px 0px 0px; padding: 0px; text-align: center; box-sizing: border-box;">-->
                        <!--<img class="" data-ratio="0.70625" data-w="640"-->
                             <!--src="https://mmbiz.qlogo.cn/mmbiz_jpg/eicZYFJeshnq3zGykZUib6Un5yLsuk3ydGh2znskHXK9HnbRDqLwCwrsKNC7PrXdw1mwZiaeoADaZURApF5YAH3PA/0?wx_fmt=jpeg"-->
                             <!--width="96%" data-type="jpeg"-->
                             <!--style="margin: 0px; padding: 0px; max-width: 100%; height: auto !important; vertical-align: middle; border-style: double; border-width: 2px; border-radius: 0px; border-color: rgb(245, 235, 220); width: 602.875px; box-sizing: border-box;"/>-->
                      <!--</section>-->
                    <!--</section>-->
                  <!--</section>-->
                  <!--<section class=""-->
                           <!--style="margin: 0px 0px 0px -3px; padding: 0px; width: 6px; height: 6px; float: left; border-radius: 100%; box-sizing: border-box;"></section>-->
                  <!--<section class=""-->
                           <!--style="margin: 0px -3px 0px 0px; padding: 0px; width: 6px; height: 6px; float: right; border-radius: 100%; box-sizing: border-box;"></section>-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; height: 2em; border-left: 1px solid rgb(245, 235, 220); border-bottom: 1px solid rgb(245, 235, 220); border-right: 1px solid rgb(245, 235, 220); border-top-color: rgb(245, 235, 220); box-sizing: border-box;"></section>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
              <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; width: 654px; vertical-align: top; border-width: 4px 1px 1px 4px; border-radius: 0px; border-style: solid; border-color: rgb(255, 202, 0); box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; text-align: center; line-height: 1.6; letter-spacing: 10px; font-size: 18px; color: rgb(62, 62, 62); box-sizing: border-box;">-->
                    <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                      <!--<span style="margin: 0px; padding: 0px; box-sizing: border-box;"><strong-->
                        <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">安然的秘密</strong></span></p></section>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px 3px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px -2em; padding: 0px 10px 5px; display: inline-block; vertical-align: middle; width: 648px; box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 10px 0px; padding: 0px; text-align: center; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; display: inline-block; vertical-align: middle; box-sizing: border-box;">-->
                    <!--<section-->
                      <!--style="margin: 0px; padding: 0px; border-left: 2px solid rgb(12, 12, 12); border-top: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-right-color: rgb(12, 12, 12); border-bottom-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
                    <!--<section style="margin: -8px 0px; padding: 0px 10px; box-sizing: border-box;">-->
                      <!--<section class=""-->
                               <!--style="margin: 0px; padding: 0px; font-size: 10px; letter-spacing: 1px; box-sizing: border-box;">-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                          <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">导演:&nbsp;尤菲<br-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/>编剧: 尤菲</strong></span></p>-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                          <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">摄影：陈博</strong></span></p>-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                          <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">剪辑：尤菲</strong></span></p>-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                          <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">类型：剧情/爱情<br-->
                            <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/>片长:&nbsp;19 分钟</strong></span>-->
                        <!--</p>-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; box-sizing: border-box;">-->
                          <!--<br style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                        <!--<p-->
                          <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: none; text-align: left; text-indent: 2em; box-sizing: border-box;">-->
                          <!--<span style="margin: 0px; padding: 0px; font-size: 14px;">阿宇的生活按部就班井井有条，他开了一家私人发型屋，并且只给长发女人理发。一个偶然的机会，自由摄影师安然经过这里，被店内一排造型独特的假发所吸引。初次相遇的两人一见钟情，但安然内心始终隐瞒着一个秘密——自己是个光头，并且永远长不出头发，她也因此对阿宇的感情躲躲闪闪不敢面对。阿宇意外发现了安然的秘密，一时难以接受现实，愤然离去，之后却发现安然已经改变了自己，最终还是决定寻回安然。</span>-->
                        <!--</p></section>-->
                    <!--</section>-->
                    <!--<section-->
                      <!--style="margin: 0px 0px 0px auto; padding: 0px; border-right: 2px solid rgb(12, 12, 12); border-bottom: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-top-color: rgb(12, 12, 12); border-left-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
                  <!--</section>-->
                <!--</section>-->
              <!--</section>-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class=""-->
                         <!--style="margin: 10px 0px 0px; padding: 0px; text-align: center; box-sizing: border-box;"><img-->
                  <!--class="" data-ratio="0.70625" data-w="640"-->
                  <!--src="https://mmbiz.qlogo.cn/mmbiz_jpg/eicZYFJeshnq3zGykZUib6Un5yLsuk3ydGdJhjg0O1ficjqKRv22sGd02mAe2LQMf4AjfnciaCHJuThhfCyGBHa45g/0?wx_fmt=jpeg"-->
                  <!--width="96%" data-type="jpeg"-->
                  <!--style="margin: 0px; padding: 0px; max-width: 100%; height: auto !important; vertical-align: middle; border-style: double; border-width: 2px; border-radius: 0px; border-color: rgb(245, 235, 220); width: 602.875px; box-sizing: border-box;"/>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px 0px -3px; padding: 0px; width: 6px; height: 6px; float: left; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px -3px 0px 0px; padding: 0px; width: 6px; height: 6px; float: right; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; height: 2em; border-left: 1px solid rgb(245, 235, 220); border-bottom: 1px solid rgb(245, 235, 220); border-right: 1px solid rgb(245, 235, 220); border-top-color: rgb(245, 235, 220); box-sizing: border-box;"></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
              <!--style="margin: 0px; padding: 0px;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; width: 654px; vertical-align: top; border-width: 4px 1px 1px 4px; border-radius: 0px; border-style: solid; border-color: rgb(255, 202, 0); box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; text-align: center; line-height: 1.6; letter-spacing: 10px; font-size: 18px; color: rgb(62, 62, 62); box-sizing: border-box;">-->
                    <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                      <!--<span style="margin: 0px; padding: 0px; box-sizing: border-box;"><strong-->
                        <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">逃生</strong></span></p></section>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px; text-align: center; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; vertical-align: middle; box-sizing: border-box;">-->
              <!--<section-->
                <!--style="margin: 0px; padding: 0px; border-left: 2px solid rgb(12, 12, 12); border-top: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-right-color: rgb(12, 12, 12); border-bottom-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
              <!--<section style="margin: -8px 0px; padding: 0px 10px; box-sizing: border-box;">-->
                <!--<section class=""-->
                         <!--style="margin: 0px; padding: 0px; font-size: 10px; letter-spacing: 1px; text-align: left; box-sizing: border-box;">-->
                  <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                    <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">导演:&nbsp;张诗雨</strong></span></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">编剧:&nbsp;&nbsp;张诗雨</strong></span></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">摄影：马绍磊</strong></span></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">剪辑：张诗雨、裴俊</strong></span></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: center; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">类型:&nbsp;剧情<br-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/>片长: &nbsp;30 分钟</strong></span></p>-->
                  <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                    <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-indent: 2em; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;">警察方宇是一个无法正视病情的抑郁症患者，一场意外失去了独子，他把责任归咎于自己和妻子，活在过去的阴霾中导致抑郁症。发生直播自杀事件时，他第一反应是成全自杀者，最终心底的救赎把自己拉回现实，救下了自杀者陶正。</span>-->
                  <!--</p></section>-->
              <!--</section>-->
              <!--<section-->
                <!--style="margin: 0px 0px 0px auto; padding: 0px; border-right: 2px solid rgb(12, 12, 12); border-bottom: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-top-color: rgb(12, 12, 12); border-left-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px 3px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px -2em; padding: 0px 10px 5px; display: inline-block; vertical-align: middle; width: 648px; box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class=""-->
                         <!--style="margin: 10px 0px 0px; padding: 0px; text-align: center; box-sizing: border-box;"><img-->
                  <!--class="" data-ratio="0.70625" data-w="640"-->
                  <!--src="https://mmbiz.qlogo.cn/mmbiz_jpg/eicZYFJeshnq3zGykZUib6Un5yLsuk3ydGIp9apEib1ExJziacjE0bu7MZiaDOC4JBPUAUAGZo0A7ic965BrC7TTo5QA/0?wx_fmt=jpeg"-->
                  <!--width="96%" data-type="jpeg"-->
                  <!--style="margin: 0px; padding: 0px; max-width: 100%; height: auto !important; vertical-align: middle; border-style: double; border-width: 2px; border-radius: 0px; border-color: rgb(245, 235, 220); width: 602.875px; box-sizing: border-box;"/>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px 0px -3px; padding: 0px; width: 6px; height: 6px; float: left; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px -3px 0px 0px; padding: 0px; width: 6px; height: 6px; float: right; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; height: 2em; border-left: 1px solid rgb(245, 235, 220); border-bottom: 1px solid rgb(245, 235, 220); border-right: 1px solid rgb(245, 235, 220); border-top-color: rgb(245, 235, 220); box-sizing: border-box;"></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;"><p-->
              <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
              <!--style="margin: 0px; padding: 0px;"/></p></section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; width: 654px; vertical-align: top; border-width: 4px 1px 1px 4px; border-radius: 0px; border-style: solid; border-color: rgb(255, 202, 0); box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class="" style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                  <!--<section class=""-->
                           <!--style="margin: 0px; padding: 0px; text-align: center; line-height: 1.6; letter-spacing: 10px; font-size: 18px; color: rgb(62, 62, 62); box-sizing: border-box;">-->
                    <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                      <!--<span style="margin: 0px; padding: 0px; box-sizing: border-box;"><strong-->
                        <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">独脚潘</strong></span></p></section>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px; text-align: center; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; display: inline-block; vertical-align: middle; box-sizing: border-box;">-->
              <!--<section-->
                <!--style="margin: 0px; padding: 0px; border-left: 2px solid rgb(12, 12, 12); border-top: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-right-color: rgb(12, 12, 12); border-bottom-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
              <!--<section style="margin: -8px 0px; padding: 0px 10px; box-sizing: border-box;">-->
                <!--<section class=""-->
                         <!--style="margin: 0px; padding: 0px; font-size: 10px; letter-spacing: 1px; box-sizing: border-box;">-->
                  <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">导演:郑鹏飞、潘博洋</strong></span></p>-->
                  <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;">-->
                    <!--<span style="margin: 0px; padding: 0px; font-size: 14px;"><strong-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">类型:&nbsp;纪录<br-->
                      <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/>片长: 24 分钟</strong></span></p>-->
                  <!--<p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; box-sizing: border-box;"><br-->
                    <!--style="margin: 0px; padding: 0px; box-sizing: border-box;"/></p>-->
                  <!--<p-->
                    <!--style="margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; text-align: left; box-sizing: border-box;">-->
                    <!--&nbsp; &nbsp; &nbsp;<span style="margin: 0px; padding: 0px; font-size: 14px;">&nbsp;“独脚潘”（潘俊帆）无论出现在什么场合都是如此的引人注目——因为他是一位穿戴着假肢的残障者。尽管命运似乎对他显得有些无情，但是他依然接受着现实并且努力地寻求着自我的突破。本片在家庭、工作、徒步、日常生活乃至公益等诸多方面为观众展示着“独脚潘”这样一位奇男子，同时在与人物的交互所体现的内容中，也不乏对于残障等社会问题以及命运等此类永恒主题的探讨。</span>-->
                  <!--</p></section>-->
              <!--</section>-->
              <!--<section-->
                <!--style="margin: 0px 0px 0px auto; padding: 0px; border-right: 2px solid rgb(12, 12, 12); border-bottom: 2px solid rgb(12, 12, 12); width: 12px; height: 12px; border-top-color: rgb(12, 12, 12); border-left-color: rgb(12, 12, 12); box-sizing: border-box;"></section>-->
            <!--</section>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                 <!--style="margin: 0px; padding: 0px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: medium; white-space: normal; box-sizing: border-box;">-->
          <!--<section class="" style="margin: 10px 0px; padding: 0px 3px; box-sizing: border-box;">-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px -2em; padding: 0px 10px 5px; display: inline-block; vertical-align: middle; width: 648px; box-sizing: border-box;">-->
              <!--<section class="Powered-by-XIUMI V5" powered-by="xiumi.us"-->
                       <!--style="margin: 0px; padding: 0px; box-sizing: border-box;">-->
                <!--<section class=""-->
                         <!--style="margin: 10px 0px 0px; padding: 0px; text-align: center; box-sizing: border-box;"><img-->
                  <!--class="" data-ratio="1.4140625" data-w="640"-->
                  <!--src="https://mmbiz.qlogo.cn/mmbiz_jpg/eicZYFJeshnq3zGykZUib6Un5yLsuk3ydGFXbsibH8DKNgLY8ncSgl9q1Zneibxibss8r8SPL4uCuMMlKicXRiaYZW8Vg/0?wx_fmt=jpeg"-->
                  <!--width="96%" data-type="jpeg"-->
                  <!--style="margin: 0px; padding: 0px; max-width: 100%; height: auto !important; vertical-align: middle; border-style: double; border-width: 2px; border-radius: 0px; border-color: rgb(245, 235, 220); width: 602.875px; box-sizing: border-box;"/>-->
                <!--</section>-->
              <!--</section>-->
            <!--</section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px 0px 0px -3px; padding: 0px; width: 6px; height: 6px; float: left; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px -3px 0px 0px; padding: 0px; width: 6px; height: 6px; float: right; border-radius: 100%; box-sizing: border-box;"></section>-->
            <!--<section class=""-->
                     <!--style="margin: 0px; padding: 0px; height: 2em; border-left: 1px solid rgb(245, 235, 220); border-bottom: 1px solid rgb(245, 235, 220); border-right: 1px solid rgb(245, 235, 220); border-top-color: rgb(245, 235, 220); box-sizing: border-box;"></section>-->
          <!--</section>-->
        <!--</section>-->
      <!--</section>-->
    <!--</div>-->
    <span class="scroll-to-top" v-if="currentScroll > 1000" @click="scrollToTop">
                    <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-top"></use>
              </svg>
    </span>
  </div>
</template>

<script>
  import cinextRecom from '@/components/cinextRecom/cinextRecom'
  import hotList from '@/components/hotList/hotList'
  export default {
    components: {
      cinextRecom,
      hotList,
    },
    data() {
      return {
        slideArr: [],
        currentScroll: 0,
      }
    },
    methods: {
      scrollToTop: function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let scrollInterval = setInterval( function () {
          if(scrollTop > 0) {
            scrollTop = scrollTop - 100
            scrollTo(0, scrollTop)
            this.currentScroll = scrollTop
          }
          else{
            clearInterval(scrollInterval)
          }
        },10)
      },
      handleScroll: function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.currentScroll = scrollTop
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    async created() {
//      const res = await this.axios.get('//clayz.top:8082/api/get/carousel')
      const res = await this.axios.get('//www.icinext.com:9099/api/get/carousel')
      console.log(res.data)
      if(res.data.code == 0) {
        this.slideArr = res.data.data
      }
      else{
        alert("加载失败")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel .intro{
    width: 350px;
    height: 150px;
    background-color: transparent;
    position: relative;
    top: 150px;
    left: 150px;
  }
  .el-carousel__item h3 {
    color: white;
    font-size: 27px;
    font-weight: 1000;
    margin: 0;
  }
  .el-carousel .post-desc {
    color: white;
    font-size: 20px;
    /*font-weight: 330;*/
    line-height: 35px;
  }
  .el-carousel img{
    width: 100%;
    height: 100%;
  }
  .el-carousel .intro .el-button {
    background-color: transparent;
    color: white;
    border-color: white;
    border-width: 2px;
    font-size: 14px;
    border-radius: 0;
    transition: all 0.5s;
  }
  .el-carousel .intro .el-button:hover{
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
    color: #ffd04b;
    font-size: 15px;
    border-color:#ffd04b;
  }
  .el-carousel .play{
    width: 100px;
    height: 70px;
    text-align: center;
    background-color: transparent;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .el-carousel .play .icon{
    font-size: 70px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;
    color: #d0b8b8;
  }
  .el-carousel .play .icon:hover{
    font-size: 75px;
    color: #ffd04b;
    box-shadow: 2px 2px 3px solid #333;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recom-title{
    text-align: center;
    font-size: 23px;
    text-shadow: 1px 1px 1px white;
  }
  .scroll-to-top{
    cursor: pointer;
    z-index: 1001;
    transition: all 0.6s;
    position: fixed;
    text-align: center;
    bottom: 30px;
    right: 20px;
    width: 35px;
    font-size: 32px;
    background-color: #efdbdb;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
