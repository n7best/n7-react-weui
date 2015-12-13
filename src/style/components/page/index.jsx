import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './page-header';
import classNames from 'classnames';
import style from './style';


class Page extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
      	ptr: {
    		isMoved: false,
    		pullStarted: false,
    		isTouched: false,
    		isScrolling: undefined,
    		wasScrolled: undefined,
    		touchStart: {},
    		touchStartTime: undefined,
    		touchId: undefined,
    		scrollTop: undefined,
    		startTranslate: 0,
    		translate: undefined,
    		triggerDistance: this.props.ptrTriggerDistance,
    		touchesDiff: undefined,
    		refresh: false,
      	},
      };

      this.ptrTouchStart = this.ptrTouchStart.bind(this);
      this.ptrTouchMove = this.ptrTouchMove.bind(this);
      this.ptrTouchEnd = this.ptrTouchEnd.bind(this);
      this.ptrRefresh = this.ptrRefresh.bind(this);
      this.setPtr = this.setPtr.bind(this);
      this.ptrDone = this.ptrDone.bind(this);
      this.ptrDoneEvent = this.ptrDoneEvent.bind(this);
  }

  componentDidMount(){
  	if(this.props.ptr){
  		let container = this.refs.container;
  		container.addEventListener('touchstart', this.ptrTouchStart , false);
    	container.addEventListener('touchmove', this.ptrTouchMove , false);
		  container.addEventListener('touchend', this.ptrTouchEnd , false);
  	}
  }

  componentWillUnmount(){
  	if(this.props.ptr){
  		let container = this.refs.container;
  		container.removeEventListener('touchstart', this.ptrTouchStart , false);
    	container.removeEventListener('touchmove', this.ptrTouchMove , false);
		  container.removeEventListener('touchend', this.ptrTouchEnd , false);
  	}
  }

  ptrTouchStart (e) {
  		let ptr = this.state.ptr;
  		let $container = this.refs.container;

  		if($container.classList.contains('refreshing')) return;

  		this.setPtr({
				isMoved : false,
        pullStarted : false,
        isTouched : true,
        isScrolling : undefined,
        wasScrolled : undefined,
        touchId : e.type === 'touchstart' ? e.targetTouches[0].identifier : undefined,
        touchesStart :{
        	x: e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX,
        	y: e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY,
        },
        touchStartTime: (new Date()).getTime(),
  		});
  }

  ptrTouchMove(e){
  	let ptr = this.state.ptr;
  	let setPtr = this.setPtr;
  	let $container = this.refs.container;

  	if (!ptr.isTouched) return;
  	let pageX, pageY, touch;
  	if (e.type === 'touchmove') {
          if (this.state.ptr.touchId && e.touches) {
              for (var i = 0; i < e.touches.length; i++) {
                  if (e.touches[i].identifier === ptr.touchId) {
                      touch = e.touches[i];
                  }
              }
          }
          if (!touch) touch = e.targetTouches[0];
          pageX = touch.pageX;
          pageY = touch.pageY;
      }
      else {
          pageX = e.pageX;
          pageY = e.pageY;
      }

      //console.log('xy:',pageX,pageY,touch);
      if (!pageX || !pageY) return;

      if (typeof ptr.isScrolling === 'undefined') {
      	setPtr({ isScrolling : !!(ptr.isScrolling || Math.abs(pageY - ptr.touchesStart.y) > Math.abs(pageX - ptr.touchesStart.x)) });
      }

      if (!ptr.isScrolling) {
      	setPtr({isTouched : false});
          return;
      }

      setPtr({ scrollTop : $container.scrollTop});

      if (typeof ptr.wasScrolled === 'undefined' && ptr.scrollTop !== 0) setPtr({wasScrolled : true}); 

      if(!ptr.isMoved){
      	$container.classList.remove('transitioning');
      	if(ptr.scrollTop > $container.offsetHeight){
      		setPtr({isTouched: false});
      		return;
      	}

      	setPtr({startTranslate:$container.classList.contains('refreshing') ? ptr.triggerDistance : 0})

      	if($container.scrollHeight === $container.offsetHeight){
      		setPtr({useTranslate:true});
      	}else{
      		setPtr({useTranslate:false});
      	}
      }

      setPtr({isMoved:true});
      setPtr({touchesDiff: (pageY - ptr.touchesStart.y)});

      if(ptr.touchesDiff > 0 && ptr.scrollTop <= 0 || ptr.scrollTop < 0){
      	// iOS 8 fix
          if (ptr.scrollTop === 0 && !ptr.wasScrolled) setPtr({useTranslate : true});

      	if(ptr.useTranslate){
      		e.preventDefault();
      		setPtr({translate: (Math.pow(ptr.touchesDiff, 0.85) + ptr.startTranslate)});
      		$container.style.transform = 'translate3d(0,' + ptr.translate + 'px,0)';
      		$container.style['-webkit-transform'] = 'translate3d(0,' + ptr.translate + 'px,0)'; 
      	}

      	if((ptr.useTranslate && Math.pow(ptr.touchesDiff, 0.85) > ptr.triggerDistance)){
      		//console.log('trigger pull');
      		setPtr({refresh:true});
      		$container.classList.add('pull-up');
      		$container.classList.remove('pull-down');
      	}else{
      		//console.log('trigger down');
      		setPtr({refresh:false});
      		$container.classList.remove('pull-up');
      		$container.classList.add('pull-down');
      	}

      	if(!ptr.pullStarted){
      		//add pullstart callback
      		setPtr({pullStarted: true});
      		if(this.props.onPullRefreshStart){
      			this.props.onPullRefreshStart(this,e);
      		}
      	}

      	//add pullpull move callback
      	if(this.props.onPullRefreshMove){
      		this.props.onPullRefreshMove(this,e);
      	}

      }else{
      	setPtr({pullStarted: false, refresh: false});
      	$container.classList.remove('pullup');
      	$container.classList.remove('pulldown');
      	return;
      }

  }

  ptrTouchEnd(e){
  	let ptr = this.state.ptr;
  	let setPtr = this.setPtr;
  	let $container = this.refs.container;

  	if (e.type !== 'touchend') return;
  	if (e.type === 'touchend' && e.changedTouches && e.changedTouches.length > 0 && ptr.touchId) {
          if (e.changedTouches[0].identifier !== ptr.touchId) return;
      }

      if( !ptr.isTouched || !ptr.isMoved){
      	setPtr({
      		isTouched:false,
      		isMoved:false,
      	});
      	return;
      }

      if(ptr.translate){
      	$container.classList.add('transitioning');
      	setPtr({translate:0});
      }

      $container.style.transform = '';
      $container.style['-webkit-transform'] = '';

      if( ptr.refresh ){
      	$container.classList.add('refreshing');
      	if(!this.props.onRefresh){
      		this.ptrRefresh();
      	}else{
      		this.props.onRefresh(this);
      	}
      }else{
      	$container.classList.remove('pull-down');
      }

      setPtr({
  		isTouched:false,
  		isMoved:false,
  	});

  	//tirrger end
  	if(ptr.pullStarted && this.props.onPullRefreshEnd){
  		this.props.onPullRefreshEnd(this);
  	}
  }

  ptrRefresh(){
  	//simulate refresh
  	let $container = this.refs.container;
  	//console.log('refreshing');
  	setTimeout(()=>{
		$container.classList.remove('refreshing');
		$container.classList.add('transitioning');
		$container.addEventListener('transitionEnd', this.ptrDoneEvent);
		$container.addEventListener('webkitTransitionEnd', this.ptrDoneEvent);
  	},2000);
  }

  ptrDone(e){
  	let $container = this.refs.container;
  	$container.classList.remove('refreshing');
		$container.classList.add('transitioning');
		$container.addEventListener('transitionEnd', this.ptrDoneEvent);
		$container.addEventListener('webkitTransitionEnd', this.ptrDoneEvent);
  }

  ptrDoneEvent(e){
  	let $container = this.refs.container;
  	$container.removeEventListener('transitionEnd', this.ptrDoneEvent);
  	$container.removeEventListener('webkitTransitionEnd', this.ptrDoneEvent);

  	$container.classList.remove('transitioning');
  	$container.classList.remove('pull-up');
  	$container.classList.remove('pull-down');
  	//trigger finish
  	if(this.props.onRefreshDone){
  		this.props.onRefreshDone(this,e);
  	}
  }

  setPtr(obj,callback){
  	let newptr = Object.assign(this.state.ptr,obj);

  	this.setState({ptr:newptr},()=>{
  		if(typeof callback !== 'undefined') callback(this.state.ptr);
  	});
  }


  renderptr(){
  	if(this.props.ptr){
  		return (
			<div className="pull-to-refresh-layer">
		      <div className="preloader">
		      	<div className="weui_loading_leaf weui_loading_leaf_0"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_1"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_2"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_3"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_4"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_5"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_6"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_7"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_8"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_9"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_10"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_11"></div>
		      </div>
		      <div className="pull-to-refresh-arrow"></div>
		    </div>
  		)
  	}
  }

	render(){
		let className = classNames({
			'page': !this.props.ptr,
			'pull-to-refresh-content':this.props.ptr,
		},this.props.transition);

    let styles = {
      animation: `${this.props.transition} ${this.props.transitionTime} forwards`
    };




		return (
		<div className={className} ref="container" style={ this.props.ptr ? {}: styles}>
			{this.renderptr()}
			<PageHeader title={this.props.title} desc={this.props.desc} />
			{this.props.children}
		</div>
		);
	}
};

Page.propTypes = {
  className: React.PropTypes.string,
	title: React.PropTypes.string,
	desc: React.PropTypes.string,
	ptr: React.PropTypes.bool,
	ptrTriggerDistance: React.PropTypes.number,
	onRefresh: React.PropTypes.func,
	onRefreshDone: React.PropTypes.func,
	onPullRefreshStart: React.PropTypes.func,
	onPullRefreshMove: React.PropTypes.func,
	onPullRefreshEnd: React.PropTypes.func,
  transition: React.PropTypes.string,
  transitionTime: React.PropTypes.string,
};

Page.defaultProps = {
  className: '',
  ptr:false,
  ptrTriggerDistance: 44,
  transition: 'slideIn',
  transitionTime: '.2s'
};

export default Page;