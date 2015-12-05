import React from 'react';
import Article from '../../style/components/article';
import Page from '../../style/components/page';


class PageArticle extends React.Component {
    constructor(props) {
        super(props);
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
		                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		                        consequat. Duis aute</p>
		                </section>
		                <section>
		                    <h3>1.2 节标题</h3>
		                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		                </section>
		            </section>
		        </Article>
	        </Page>
		);
    }
}


export default PageArticle;