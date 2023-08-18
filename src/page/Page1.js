import React, { useState, useEffect } from 'react'; // React 및 useState, useEffect 라이브러리 임포트
import '../css/page1.css';
import img1 from '../img/innisfree1.png';
import img2 from '../img/innisfree2.png';
import img3 from '../img/innisfree3.png';
import img4 from '../img/innisfree4.png';
import axios from 'axios';

function Page1() {
  // 상태 변수 및 설정 함수 선언
  const [s1, setS1] = useState('이니스프리'); // 회사 선택 상태
  const [s2, setS2] = useState('green');
  const [s3, setS3] = useState('컬러이미지');
  const [s4, setS4] = useState('비공개');
  const [imageURL, setImageURL] = useState('img1');

  const handleS1 = (e) => {
    setS1(e.target.value);
  };

  const handleS2 = (e) => {
    setS2(e.target.value);
  };

  const handleS3 = (e) => {
    setS3(e.target.value);
  };

  const handleS4 = (e) => {
    setS4(e.target.value);
  };

  // 서버로부터 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`/postData?${s1},${s2},${s3},${s4}`);
      console.log(response.data); // 서버 응답 로그

      // 이미지 URL 생성 예시
    const imageFilename = response.data.imageFilename; // 이미지 파일명
    const imageSrc = `http://localhost:8080/image/${img1}.png`; // 이미지 경로
    setImageURL(imageSrc); // 이미지 URL 상태 업데이트
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트되면 fetchData 함수 호출
  }, [s1, s2, s3, s4]); // company, s2, s3, s4 값이 변경될 때마다 useEffect 실행




    return (
      <div className='big'>
        <div>
        <header>
          <div className="first">
            <h1 className="title">Trust#</h1>
          </div>
          <div className="second">
            <div className="title2">사용자 분석</div>
          </div>
        </header>
        <section>
            {/* selec부분  */}
        <form onSubmit={fetchData}>
        <div className="menu">
          <a className="user">기업 분석</a>
          <select
          id='p-company'
          className="choice"
          onChange={handleS1}
          value={'이니스프리'}
            >
            <option className="dksdj-1" key={9} value={'이니스프리'}>이니스프리</option>
          </select>
          <select className="choice" onChange={handleS2} value={'green'}>
            <option className="tor-1" key={25} value={'green'}> green</option>
          </select>
          <select className="choice" onChange={handleS3} value={'컬러이미지'}>
            <option className="dkdlxpa-1" key={3} value={"컬러이미지"}>컬러이미지</option>
          </select>
          <select className="choice" onChange={handleS4} value={'비공개'}>
            <option className="dkdlxpa-1" key={15} value={"비공개"}>비공개</option>
          </select>
          </div>
        </form>
        <div className="tag">
              <a className="tagline">
                  {s1}
              </a>
              <a  className="tagline">
              {s2}
              </a>
              <a  className="tagline">
              {s3}
              </a>
              <a  className="tagline">
              {s4}
              </a>
          </div>
        </section>
        <div className="line">
        </div>
        <div className='maintop'>
            <main className="mainfirst">
            <div className="mainpage">
                <h3 className="kakao">INNISFREE</h3>
                <div className='innisfreeimg'>
                <div className='images'>
                {imageURL && <img src={img1} className='imgs_1' alt="inni1" />}
                {imageURL && <img src={img2} className='imgs_1' alt="inni2" />}
                </div>
                <div className='images2'>
                {imageURL && <img src={img3} className='imgs_1' alt="inni3" />}
                {imageURL && <img src={img4} className='imgs_1' alt="inni4" />}
                </div>
                </div>
            </div>    
            <div>
                <table>
                <tbody><tr>
                  <td>기업 : {s1} </td>
                </tr>
                <tr>
                  <td>색 : {s2} </td>
                </tr>
                <tr>
                  <td>아이템: {s3} </td>
                </tr>
                <tr>
                  <td>좋아요 수  : {s4}</td>
                </tr>
                </tbody></table>
            </div>
            </main>
        </div>
      </div>
      </div>
    );
  };

export default Page1; 