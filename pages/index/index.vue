<template>
	<view class="container">
		<u-navbar :is-back="false" :background="{ background: '#00bfbf' }">
			<u-search placeholder="请输入商品名称" class="u-m-l-20 u-m-r-20" :action-style="{ color: '#fff' }" animation></u-search>
		</u-navbar>
		<u-swiper :list="bannerList" autoplay></u-swiper>
		<zn-title title="热卖专区" />
		<scroll-view class="scroll-hot" scroll-x>
			<view class="hot-list">
				<!-- 商品 -->
				<view class="hot-box">
					<view class="img-box"><image src="../../static/tab/car-active.png"></image></view>
					<view>
						<View class="title">第一个产品</View>
						<View class="price-box">
							￥
							<text class="price-num">44.33</text>
						</View>
						<view class="out-box">
							已售：
							<text class="out-num">333</text>
						</view>
					</view>
				</view>
				<!-- 商品-end -->
				<!-- 商品 -->
				<view class="hot-box">
					<view class="img-box"><image src="../../static/tab/car-active.png"></image></view>
					<view>
						<View class="title">第一个产品</View>
						<View class="price-box">
							￥
							<text class="price-num">44.33</text>
						</View>
						<view class="out-box">
							已售：
							<text class="out-num">333</text>
						</view>
					</view>
				</view>
				<!-- 商品-end -->
				<!-- 商品 -->
				<view class="hot-box">
					<view class="img-box"><image src="../../static/tab/car-active.png"></image></view>
					<view>
						<View class="title">第一个产品</View>
						<View class="price-box">
							￥
							<text class="price-num">44.33</text>
						</View>
						<view class="out-box">
							已售：
							<text class="out-num">333</text>
						</view>
					</view>
				</view>
				<!-- 商品-end -->
				<!-- 商品 -->
				<view class="hot-box">
					<view class="img-box"><image src="../../static/tab/car-active.png"></image></view>
					<view>
						<View class="title">第一个产品</View>
						<View class="price-box">
							￥
							<text class="price-num">44.33</text>
						</View>
						<view class="out-box">
							已售：
							<text class="out-num">333</text>
						</view>
					</view>
				</view>
				<!-- 商品-end -->
				<!-- 商品 -->
				<view class="hot-box">
					<view class="img-box"><image src="../../static/tab/car-active.png"></image></view>
					<view>
						<View class="title">第一个产品</View>
						<View class="price-box">
							￥
							<text class="price-num">44.33</text>
						</View>
						<view class="out-box">
							已售：
							<text class="out-num">333</text>
						</view>
					</view>
				</view>
				<!-- 商品-end -->
			</view>
		</scroll-view>
		<zn-title title="医疗器械" />
		
		
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{ leftList }">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
					<!-- #ifndef MP-WEIXIN -->
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="demo-img-wrap"><image class="demo-image" :src="item.image" mode="widthFix"></image></view>
					<!-- #endif -->
					<view class="demo-title">{{ item.title }}</view>
					<view class="demo-price">{{ item.price }}元</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">自营</view>
						<view class="demo-tag-text">放心购</view>
					</view>
					<view class="demo-shop">{{ item.shop }}</view>
					<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
					<view class="u-close">
						<u-icon name="close-circle-fill" color="#fa3534" size="34" @click="remove(item.id)"></u-icon>
					</view>
				</view>
			</template>
			<template v-slot:right="{ rightList }">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<!-- #ifndef MP-WEIXIN -->
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="demo-img-wrap"><image class="demo-image" :src="item.image" mode="widthFix"></image></view>
					<!-- #endif -->
					<view class="demo-title">{{ item.title }}</view>
					<view class="demo-price">{{ item.price }}元</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">自营</view>
						<view class="demo-tag-text">放心购</view>
					</view>
					<view class="demo-shop">{{ item.shop }}</view>
					<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
					<view class="u-close">
						<u-icon name="close-circle-fill" color="#fa3534" size="34" @click="remove(item.id)"></u-icon>
					</view>
				</view>
			</template>
		</u-waterfall>
	</view>
</template>

<script>
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
			bannerList: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			loadStatus: 'loadmore',
			flowList: [
				{
					price: 35,
					title: '北国风光，千里冰封，万里雪飘',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
				},
				{
					price: 75,
					title: '望长城内外，惟余莽莽',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
				},
				{
					price: 385,
					title: '大河上下，顿失滔滔',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
				},
				{
					price: 784,
					title: '欲与天公试比高',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
				},
				{
					price: 7891,
					title: '须晴日，看红装素裹，分外妖娆',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
				},
				{
					price: 2341,
					shop: '李白杜甫白居易旗舰店',
					title: '江山如此多娇，引无数英雄竞折腰',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
				},
				{
					price: 661,
					shop: '李白杜甫白居易旗舰店',
					title: '惜秦皇汉武，略输文采',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
				},
				{
					price: 1654,
					title: '唐宗宋祖，稍逊风骚',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 1678,
					title: '一代天骄，成吉思汗',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 924,
					title: '只识弯弓射大雕',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 8243,
					title: '俱往矣，数风流人物，还看今朝',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				}
			]
		};
	},
	onLoad() {
	},
	onReachBottom() {
		this.loadStatus = 'loading';
	},
	mounted() {
		console.log(222, this.$refs);
	},
	methods: {
	}
};
</script>

<style lang="scss">
.container {
	font-size: 14px;
	line-height: 24px;
	// 搜索
	.search-box {
		background-color: #00bfbf;
		padding: 20px;
	}
	// 热卖专区
	.scroll-hot {
		width: auto;
		padding: 10px;
		margin: 10px;
		background: #f9f9f9;
		.hot-list {
			width: auto;
			max-width: 9999px;
			display: flex;
			flex-direction: row;
			padding: 4px;
		}
	}
	.hot-box {
		width: calc((100vw / 1.5) - 5%);
		background: #fff;
		padding: 1%;
		margin: 0 2%;
		display: flex;
		flex-grow: 1;
		flex-shrink: 0;
		box-shadow: 0px 0px 5px rgba(#ccc, .5);
		box-sizing: border-box;
		.img-box {
			width: 80px;
			border-right: 1px solid #efefef;
			margin-right: 20px;
			image {
				width: 100%;
				max-height: 80px;
			}
		}
		.title {
			font-size: 16px;
		}
		.price-box {
			color: #dd524d;
			font-size: 16px;
			.price-num {
				font-size: 12px;
			}
		}
		.out-box {
			font-size: 12px;
			color: #999;
			.out-num {
				color: #555;
			}
		}
	}
}

.demo-warter {
	border-radius: 8px;
	margin: 5px;
	background-color: #ffffff;
	padding: 8px;
	position: relative;
	box-shadow: 0 0 10px rgba(#ccc, .5);
}

.u-close {
	position: absolute;
	top: 32rpx;
	right: 32rpx;
}

.demo-img-wrap {
}

.demo-image {
	width: 100%;
	border-radius: 4px;
}

.demo-title {
	font-size: 30rpx;
	margin-top: 5px;
	color: $u-main-color;
}

.demo-tag {
	display: flex;
	margin-top: 5px;
}

.demo-tag-owner {
	background-color: $u-type-error;
	color: #ffffff;
	display: flex;
	align-items: center;
	padding: 4rpx 14rpx;
	border-radius: 50rpx;
	font-size: 20rpx;
	line-height: 1;
}

.demo-tag-text {
	border: 1px solid $u-type-primary;
	color: $u-type-primary;
	margin-left: 10px;
	border-radius: 50rpx;
	line-height: 1;
	padding: 4rpx 14rpx;
	display: flex;
	align-items: center;
	border-radius: 50rpx;
	font-size: 20rpx;
}

.demo-price {
	font-size: 30rpx;
	color: $u-type-error;
	margin-top: 5px;
}

.demo-shop {
	font-size: 22rpx;
	color: $u-tips-color;
	margin-top: 5px;
}
</style>
