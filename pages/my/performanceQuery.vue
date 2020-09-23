<template>
	<view class="performance-query">
		<view class="select-date"><u-field label="选择日期" placeholder="请选择查询日期" :value="dates" @click="show = !show" disabled /></view>
		<u-cell-group title="业绩列表">
			<scroll-view style="height: calc(100vh - 110px);" scroll-y>
				<u-cell-item value="￥333.33" :arrow="false">
					<view slot="title">
						<u-icon size="32" name="bookmark"></u-icon>
						<text>名称：xiolng</text>
					</view>
					<view slot="label">
						<u-icon size="32" name="coupon"></u-icon>
						<text>积分：22</text>
					</view>
				</u-cell-item>
			</scroll-view>
		</u-cell-group>
		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-picker v-model="show" mode="time" @confirm="getDates" title="选择查询时间" @cancel="getCancel"></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			dates: '',
			status: 'loadmore',
			iconType: 'flower',
			loadText: {
				loadmore: '点击或上拉加载更多',
				loading: '努力加载中',
				nomore: '已加载全部'
			},
		};
	},
	methods: {
		getDates(value) {
			this.dates = `${value.year}-${value.month}-${value.day}`;
		},
		getCancel() {
			this.dates = '';
		}
	}
};
</script>

<style></style>
