import React, { useState, useEffect } from 'react'; // React 및 useState, useEffect 라이브러리 임포트
import '../css/Search.css';
import axios from 'axios';

function Search() {
  // 상태 변수 및 설정 함수 선언
  const [s1, setS1] = useState(''); // 회사 선택 상태
  const [s2, setS2] = useState('');
  const [s3, setS3] = useState('');
  const [s4, setS4] = useState('');
  const [imageURL, setImageURL] = useState('');

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
      const imageSrc = `http://localhost:8080/images/${response.data.imageFilename}`;
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
            >
            <option className="dksdj-1" >기업</option>
            <option className="dksdj-1" key={6} value={'빙그레'}>빙그레</option>
            <option className="dksdj-1" key={7} value={"진로"}>진로</option>
            <option className="dksdj-1" key={8} value={'읏맨'}>읏맨</option>
            <option className="dksdj-1" key={9} value={'이니스프리'}>이니스프리</option>
            <option className="dksdj-1" key={10} value={'다노'}>다노</option>
            <option className="dksdj-1" key={11} value={'나이키'}>나이키</option>
            <option className="dksdj-1" key={12} value={'애플'}>애플</option>
            <option className="dksdj-1" key={29} value={'에르메스'}>에르메스</option>   
            <option className="dksdj-1" key={30} value={'오늘의 집'}>오늘의 집</option>             
            <option className="dksdj-1" key={13} value={'비공개'}>비공개</option>  
          </select>
          <select className="choice" onChange={handleS2}>
            <option className="tor-1">색</option>
            <option className="tor-1" key={22} value={'red'}> red</option>
            <option className="tor-1" key={23} value={'orange'}>orange</option>
            <option className="tor-1" key={24} value={'yellow'}>yellow</option>
            <option className="tor-1" key={25} value={'green'}> green</option>
            <option className="tor-1" key={26} value={'blue'}>blue</option>
            <option className="tor-1" key={27} value={'indigo'}>indigo</option>
            <option className="tor-1" key={28} value={'purple'}>purple</option>
          </select>
          <select className="choice" onChange={handleS3}>
            <option className="dkdlxpa-1" >아이템</option>
            <option className="dkdlxpa-1" key={1} value={'세계관'}>세계관</option>
            <option className="dkdlxpa-1" key={2} value={"캐릭터"}>캐릭터</option>
            <option className="dkdlxpa-1" key={3} value={"컬러이미지"}>컬러이미지</option>
            <option className="dkdlxpa-1" key={4} value={"콘텐츠"}>콘텐츠</option>
            <option className="dkdlxpa-1" key={5} value={"메세지"}>메세지</option>
          </select>
          <select className="choice" onChange={handleS4}>
            <option className="dkdlxpa-1">좋아요 수</option>
            <option className="dkdlxpa-1" key={14} value={"2천 미만"}>2천 미만</option>
            <option className="dkdlxpa-1" key={15} value={"2천 이상"}>2천 이상</option>
            <option className="dkdlxpa-1" key={16} value={"8천 이상"}>8천 이상</option>
            <option className="dkdlxpa-1" key={17} value={"2만 이상"}>2만 이상</option>
            <option className="dkdlxpa-1" key={18} value={"6만 이상"}>6만 이상</option>
            <option className="dkdlxpa-1" key={19} value={"9만 이상"}>9만 이상</option>
            <option className="dkdlxpa-1" key={20} value={"15만 이상"}>15만 이상</option>
            <option className="dkdlxpa-1" key={21} value={"50만 이상"}>50만 이상</option>
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
                <h3 className="kakao">KAKAO</h3>
                {imageURL && <img src={imageURL} alt="KAKAO" />}
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

export default Search; 