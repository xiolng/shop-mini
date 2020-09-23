<template>
	<view class="ranking">
		<u-cell-group title="业绩排行">
			<scroll-view style="height: calc(100vh - 70px);" scroll-y>
				<u-cell-item :arrow="false">
					<view slot="title">
						<u-icon size="32" name="level"></u-icon>
						<text>1：xiolng</text>
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
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
