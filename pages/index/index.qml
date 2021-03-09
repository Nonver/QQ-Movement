<view class="container">
  <view class="userinfo">
    <image bindtap="bindViewTap" class="userinfo-avatar" src="https://thirdqq.qlogo.cn/g?b=sdk&k=V1bIOKodwGvcJ6DhJpWickg&s=100&t=1614087597" mode="cover"></image>
  </view>
  <view class="content">
    <view class="txt" style="{{set}}" bindtap="query">QQ查询</view>
    <view class="txtr" style="{{setr}}" bindtap="instructions">小米运动</view>
  </view>
  <view class="min">
    <view class="min-view" wx:if="{{is == 1}}">
      <input class="weui-input" placeholder="授权码" placeholder-style="color:#999" value="{{valr}}" bindinput="messageChang"/>
      <input class="weui-input" placeholder="QQ" placeholder-style="color:#999" value="{{val}}" bindinput="valChang"/>
      <view class="section">
          <textarea class="weui-input area" value="{{arr[0].mobile}}{{arr[1].mobile}}"/>
      </view>
      <view class="an" bindtap="The">查询</view>
    </view>
    <view class="min-view" wx:elif="{{is > 1}}">
      <input class="weui-input" placeholder="小米账号" placeholder-style="color:#999" value="{{name}}" bindinput="name"/>
      <input class="weui-input" type="password" placeholder="小米密码" placeholder-style="color:#999" value="{{password}}" bindinput="password"/>
      <input class="weui-input" placeholder="步数" placeholder-style="color:#999" value="{{bushu}}" bindinput="bushu"/>
      <view class="an" bindtap="Ther">查询</view>
      <view class="isr">
        <view class="is">0、作者1900537337</view>
        <view class="is">1、下载小米运动APP</view>
        <view class="is">2、注册小米运动账号</view>
        <view class="is">3、登录小米运动，在我的里面绑定微信支付宝</view>
        <view class="is">4、输入账号密码和步数并且提交</view>
        <view class="is">5、提交成功即可，请在微信运动查看</view>
      </view>
    </view>
  </view>
</view>
