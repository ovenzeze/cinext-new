<template>
  <div class="comments-container">
    <p class="comments-title-text">{{comments.length === 0 ? '暂时还没有评论' : comments.length + '条评论'}}</p>
    <div v-if="comments.length !== 0" class="comments-box">
      <div v-for="item in comments" :key="item.commentId" class="comment-item">
        <div class="author-avator">
          <img :src="item.userAvator"/>
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
    <!--<div v-else class="comments-box">-->
    <!--<div class="comment-item no-comment-text">-->
    <!--暂时还没有评论哦，快来畅所欲言吧！-->
    <!--</div>-->
    <!--</div>-->
    <div class="comment-input-box">
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5}"
        placeholder="你有什么想说的，写在这里吧！注意不要超过300字噢！"
        v-model="commentInputText">
      </el-input>
      <el-row type="flex" justify="end">
        <el-button type="primary" size="small" style="margin-top: 10px;" @click="addComment">发送评论</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // comments: [
        //   {
        //     userName: "肆无忌惮",
        //     userId: '221',
        //     userAvator: 'https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64',
        //     createdTime: '2018-6-3 11:20:20',
        //     likeCount: 1531,
        //     commentId: 'C001',
        //     commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
        //   },
        //   {
        //     userName: "Cinext",
        //     userId: '222',
        //     userAvator: 'https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64',
        //     createdTime: '2018-6-3 11:20:20',
        //     likeCount: 31,
        //     commentId: 'C002',
        //     commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
        //   },
        //   {
        //     userName: "Clay",
        //     userId: '223',
        //     userAvator: 'https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64',
        //     createdTime: '2018-6-3 11:20:20',
        //     likeCount: 151,
        //     commentId: 'C003',
        //     commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
        //   },
        //   {
        //     userName: "Endy",
        //     userId: '224',
        //     userAvator: 'https://sfault-avatar.b0.upaiyun.com/236/471/2364719857-5b1509b01f946_big64',
        //     createdTime: '2018-6-3 11:20:20',
        //     likeCount: 11,
        //     commentId: 'C004',
        //     commentText: '这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,150字。这是一条评论,最多显示三行,1这是一条评论,最多显示三行,'
        //   },
        // ],
        comments: [],
        userLiked: ['C001', 'C002'],
        commentInputText: ''
      }
    },
    methods: {
      cancelLike(id) {
        const index = this.userLiked.indexOf(id)
        this.userLiked.splice(index, 1)
      },
      confirmLike(id) {
        this.userLiked.push(id)
      },
      async addComment() {
        const commentText = this.commentInputText,
          userId = 'Z001',
          type = 1,
          id = this.currentVid
        const addCommentRes = await this.axios.post(`//www.icinext.com:9099/api/get/comments/${this.currentVid}`)

      }
    },
    async created() {
      const resComments = await this.axios.get(`//www.icinext.com:9099/api/get/comments/${this.currentVid}`)
      if (resComments.data.code === 0) {
        console.log(resComments.data)
        this.comments = resComments.data.data
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    font-size: 17px;
    /*padding-left: 20px;*/
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
    flex: 12;
    padding-right: 15px;
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

  .comment-input-box {
    margin-top: 15px;
  }

  /*comments-container styles end*/
</style>
