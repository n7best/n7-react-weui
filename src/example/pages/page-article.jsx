import React from 'react';
import Article from '../../style/components/article';
import Page from '../../style/components/page';
import MobileDetect from '../../style/components/utils/mobiledetect';

class PageArticle extends React.Component {
    constructor(props) {
        super(props);
        console.log(MobileDetect);
    }

    render() {
        return (
        	<Page title="Article" className="article">
		        <Article>
		        	<h1>大标题</h1>
		            <section>
		                <h2>章标题</h2>
		                <section>
		                    <h3>1.1 节标题</h3>
		                    <p>是不是iOS : {MobileDetect.isIOS ? '是' : '不是'}，是不是IOS8: {MobileDetect.isIOS8 ? '是' : '不是'}, 是不是IOS9: {MobileDetect.isIOS9 ? '是' : '不是'}</p>
                        <p>是不是Android : {MobileDetect.isAndroid ? '是' : '不是'}</p>
                        <p>是不是Window移动设备 : {MobileDetect.isWindow ? '是' : '不是'}</p>
                        <p>是不是移动设备 : {MobileDetect.isMobile ? '是' : '不是'}</p>
                        <p>是不是微信内置浏览器 : {MobileDetect.isWechat ? '是' : '不是'}</p>
		                </section>
		                <section>
		                    <h3>1.2 节标题</h3>
		                    <p>iOS版本: {MobileDetect.iOSVer}, 安卓版本:{MobileDetect.androidVer}, 微信版本:{MobileDetect.wechatVer}</p>
		                </section>
		            </section>
		        </Article>
	        </Page>
		);
    }
}


export default PageArticle;