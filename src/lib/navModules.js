export default {
	basicList: [
		{ index: 'syncTask', className: 'el-icon-document',name: '用户列表', subMenu: false },
        { index: 'editForm', className: 'el-icon-plus',name: '添加用户', subMenu: false },
        { index: 'basicList', className: 'el-icon-message',name: '基本', subMenu: true, children: [
            { index: 'layout',name: '布局' },
            { index: 'color',name: '色彩' },
            { index: 'typography',name: '字体' },
            { index: 'icon',name: '图标' },
            { index: 'button',name: '按钮' },
        ]},
        { index: 'formList', className: 'el-icon-setting',name: '表单', subMenu: true, children: [
	        { index: 'radio',name: '单选框' },
	        { index: 'checkbox',name: '多选框' },
	        { index: 'input',name: '输入框' },
	        { index: 'inputNumber',name: '计数器' },
	        { index: 'select',name: '选择器' },
	        { index: 'cascader',name: '级联选择器' },
	        { index: 'switch',name: '开关' },
	        { index: 'slider',name: '滑块' },
	        { index: 'timePicker',name: '时间选择器' },
	        { index: 'datePicker',name: '日期选择器' },
	        { index: 'dateTimePicker',name: '日期时间选择器' },
	        { index: 'upload',name: '上传' },
	        { index: 'rate',name: '评分' },
	        { index: 'colorPicker',name: '颜色选择器' },
	        { index: 'form',name: '表单' },
	    ]},
	    { index: 'dataList', className: 'el-icon-message',name: '数据', subMenu: true, children: [
            { index: 'table',name: '表格' },
            { index: 'tag',name: '标签' },
            { index: 'progress',name: '进度条' },
            { index: 'tree',name: '树形控件' },
            { index: 'pagination',name: '分页' },
            { index: 'badge',name: '标记' },
        ]},
        { index: 'noticeList', className: 'el-icon-message',name: 'Notice', subMenu: true, children: [
            { index: 'alert',name: '警告' },
            { index: 'loading',name: 'loading' },
            { index: 'message',name: '消息提示' },
            { index: 'messageBox',name: '弹框' },
            { index: 'notification',name: '通知' },
            { index: 'badge',name: '标记' },
        ]},
        { index: 'vChartsList', className: 'el-icon-message',name: 'vCharts', subMenu: true, children: [
            { index: 'veLine',name: '折线图' },
        ]}
	],
	lodash: [
		{ index: 'lodash', className: 'el-icon-document',name: 'lodash', subMenu: false }
	]
}