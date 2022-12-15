import { combineRgb } from '@companion-module/base'

export function getFeedbacks() {
	const feedbacks = {}

	const ColorWhite = combineRgb(255, 255, 255)
	const ColorBlack = combineRgb(0, 0, 0)
	const ColorRed = combineRgb(200, 0, 0)
	const ColorGreen = combineRgb(0, 200, 0)
	const ColorOrange = combineRgb(255, 102, 0)

	feedbacks['record_bg'] = {
		type: 'boolean',
		name: 'Record Status',
		description: 'If the record state specified is in use, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorRed,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Status',
				id: 'record',
				default: 1,
				choices: this.RECORD,
			},
		],
		callback: (feedback) => {
			if (this.states['record_bg'] === parseInt(feedback.options.record)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_a_bg'] = {
		type: 'boolean',
		name: 'Primary RTMP Stream A Status',
		description: 'If Primary RTMP Stream A is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_a_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_b_bg'] = {
		type: 'boolean',
		name: 'Primary RTMP Stream B Status',
		description: 'If Primary RTMP Stream B is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_b_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_ca_bg'] = {
		type: 'boolean',
		name: 'Primary RTMP Stream Confidence A Status',
		description: 'If Primary RTMP Stream Confidence A is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_ca_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_a2_bg'] = {
		type: 'boolean',
		name: 'Backup RTMP Stream A Status',
		description: 'If Backup RTMP Stream A is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_a2_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_b2_bg'] = {
		type: 'boolean',
		name: 'Backup RTMP Stream B Status',
		description: 'If Backup RTMP Stream B is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_b2_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['rtmpStatus_ca2_bg'] = {
		type: 'boolean',
		name: 'RTMP Stream Confidence A Status',
		description: 'If Backup RTMP Stream Confidence A is Live, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['rtmpStatus_ca2_bg'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	feedbacks['encoder_mode_dual'] = {
		type: 'boolean',
		name: 'Dual Channel Encoder Mode',
		description: 'Record a separate video file for each channel (LinkLicense required)',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorOrange,
		},
		options: [
			{
				type: 'dropdown',
				label: 'On/Off',
				id: 'onoff',
				default: 0,
				choices: this.ONOFF,
			},
		],
		callback: (feedback) => {
			if (this.states['encoder_mode_dual'] === parseInt(feedback.options.onoff)) {
				return true
			}
		},
	}

	return feedbacks
}