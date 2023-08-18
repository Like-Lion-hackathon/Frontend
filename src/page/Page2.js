import React, { useState, useEffect } from 'react'; // React 및 useState, useEffect 라이브러리 임포트
import '../css/Page2.css';
import image1 from '../img/hermes1.png';
import image2 from '../img/hermes2.png';
import axios from 'axios';

function Page2() {
  // 상태 변수 및 설정 함수 선언
  const [s1, setS1] = useState('에르메스'); // 회사 선택 상태
  const [s2, setS2] = useState('blue');
  const [s3, setS3] = useState('컬러이미지');
  const [s4, setS4] = useState('2만 이상');
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
    const imageSrc = `http://localhost:8080/image/${image1}.png`; // 이미지 경로
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
          value={'에르메스'}
            >
            <option className="dksdj-1" key={29} value={'에르메스'}>에르메스</option>
          </select>
          <select className="choice" onChange={handleS2} value={'blue'}>
          <option className="tor-1" key={26} value={'blue'}>blue</option>
          </select>
          <select className="choice" onChange={handleS3} value={'컬러이미지'}>
            <option className="dkdlxpa-1" key={3} value={"컬러이미지"}>컬러이미지</option>
          </select>
          <select className="choice" onChange={handleS4} value={'2만 이상'}>
          <option className="dkdlxpa-1" key={17} value={"2만 이상"}>2만 이상</option>

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
                <h3 className="kakao">HEREMES</h3>
                  <div className='imgfirst'>
                   {imageURL && <img src={image1} className='imgs_2' alt="her1" />}
                   {imageURL && <img src={image2} className='imgs_2' alt="her2" />}
                  </div>
            </div>    
            <div>
                <table className='table_1'>
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

export default Page2;