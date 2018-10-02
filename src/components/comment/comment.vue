<template>
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
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
