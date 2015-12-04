import React from 'react';
import Swiper from '../../style/components/swiper';
import SwiperItem from '../../style/components/swiper/item';
import Page from '../components/page';

const PageSwiper = (props) => {

	return (
		<Page title="Swiper" className="pageswiper">
			<Swiper id="swipertest">
					<SwiperItem>
						<img src="images/swipe1.jpg" width="100%" />
					</SwiperItem>
					<SwiperItem>
						<img src="images/swipe2.jpg" width="100%" />
					</SwiperItem>
					<SwiperItem>
						<img src="images/swipe3.jpg" width="100%" />
					</SwiperItem>
					<SwiperItem>
						<img src="images/swipe1.jpg" width="100%" />
					</SwiperItem>
					<SwiperItem>
						<img src="images/swipe2.jpg" width="100%" />
					</SwiperItem>
					<SwiperItem>
						<img src="images/swipe3.jpg" width="100%" />
					</SwiperItem>
			</Swiper>
		</Page>
		);
};


export default PageSwiper;