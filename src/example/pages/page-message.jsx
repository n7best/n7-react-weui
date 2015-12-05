import React from 'react';
import Message from '../../style/components/message';
import Page from '../../style/components/page';
import Actionsheet from '../../style/components/actionsheet';


class PageMessage extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
    	let actions = [
    		{label:"确定",type:"primary"},
			{label:"取消"},
    	];

        return (
	        <Page className="actionsheet">
				<Message
				icon={<i className="weui_icon_success weui_icon_msg"></i>}
				title="操作成功"
				extra={<a href="">查看详情</a>}
				actions={actions}
				>
				内容详情，可根据实际需要安排
				</Message>
			</Page>
		);
    }
}


export default PageMessage;