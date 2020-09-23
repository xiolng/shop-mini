<template>
	<view class="shipment-info-detail">
		<view class="item-box">
			<u-field label="名称:" :value="2222" disabled></u-field>
			<u-field label="数量:" :value="2222" disabled></u-field>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(option) {
		console.log(333, option, this.$u);
	},
	mounted() {
		const routers = getCurrentPages();
		console.log(2222, routers);
	}
};
</script>

<style lang="scss"></style>
