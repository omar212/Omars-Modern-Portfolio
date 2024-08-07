// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../app/styles/swiper.css'
import { jobs } from '@/app/about/jobs';
import Image from 'next/image';

const JobSwiper = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {jobs?.map((job, index) => (
        <SwiperSlide key={index}>
            <h2 className="job-title">{job.jobTitle}</h2>
            <div className='company-info'>
            {
              job?.jobUrl ? (
                <a className="job-company" href={job?.jobUrl} target="_blank">{job.jobCompany}</a>
              ) : (
                <h3 className="job-company">{job.jobCompany}</h3>
              )
            }
            {job.jobIcon && <Image className='job-logo' src={job.jobIcon} alt={`${job.jobCompany} logo`} width={32} height={32} />}
            </div>
            <p className="job-date">{job.jobDate}</p>
            <p className="job-location">{job.jobLocation}</p>
            <ul className="job-description">
              {job.jobDesc?.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JobSwiper;