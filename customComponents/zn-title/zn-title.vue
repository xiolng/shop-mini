<template>
	<view class="z-title">
		<slot name="icon">
			<view :class="[icon && icon.length ? 'icon' : '']">{{icon}}</view>
		</slot>
		<slot name="title">
			<view class="title">{{title}}</view>
		</slot>
	</view>
</template>

<script>
	export default {
		name: "znTitle",
		props:{
			icon: {
				type: String,
				default: ''
				},
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.z-title{
	position: relative;
	font-size: 18px;
	padding-left: 20px;
	margin: 10px;
	height: 40px;
	line-height: 40px;
	display: flex;
	align-content: center;
	border-bottom: 1px solid #e0e0e0;
	&:before{
		content: " ";
		background-color: #00BFBF;
		width: 5px;
		height: 20px;
		position: absolute;
		left: 2px;
		top: 10px;
	}
	.icon{
		margin-right: 10rpx;
	}
}
</style>
