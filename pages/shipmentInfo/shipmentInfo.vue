<template>
	<view class="shipment-info">
		<u-cell-group title="出货列表">
			<scroll-view style="height: calc(100vh - 70px);" scroll-y>
				<u-cell-item value="￥333.33" :arrow="false" @click="$u.route({url: `/pages/shipmentInfo/shipmentInfoDetail`, params: {id: 11}})">
					<view slot="title">
						<u-icon size="32" name="bookmark"></u-icon>
						<text>商品名称：xiolng</text>
					</view>
					<view slot="label">
						<u-icon size="32" name="plus"></u-icon>
						<text>数量：22</text>
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
