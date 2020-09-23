<template>
	<view class="user-info">
		<view class="item-box">
			<text class="label">名称：</text>
			<text class="values">xiolng</text>
		</view>
		<view class="item-box">
			<text class="label">手机号：</text>
			<text class="values">13344443333</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.user-info{
	.item-box{
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.label{
			color: #999;
			margin-right: 10px;
		}
	}
}
</style>
