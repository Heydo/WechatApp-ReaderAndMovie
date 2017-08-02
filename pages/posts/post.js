// post.js

//引入数据， 必须相对路径
var postsData = require('../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        posts_key: postsData.postList
      });
    // this.data.postList = postsData.postList
  },

})
