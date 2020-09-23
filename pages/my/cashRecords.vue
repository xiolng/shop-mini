<template>
	<view class="cash-records">
		<u-cell-group title="兑现列表">
			<scroll-view style="height: calc(100vh - 70px);" scroll-y>
				<u-cell-item value="￥333.33" :arrow="false">
					<view slot="title">
						<u-icon size="32" name="calendar"></u-icon>
						<text>日期：2020-06-06</text>
					</view>
				</u-cell-item>
			</scroll-view>
		</u-cell-group>
		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '点击或上拉加载更多',
					loading: '努力加载中',
					nomore: '已加载全部'
				},
			};
		}
	}
</script>

<style lang="scss">

</style>
