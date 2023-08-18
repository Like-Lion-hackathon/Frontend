import React, { useEffect, useState } from 'react'; // Import React and useState
import '../css/Search.css';
import { useNavigate } from 'react-router-dom';
import What from '../img/what.png'

function Search() {
  const handleCompanyChange = (event) => {
    setCompanyValue(event.target.value);
  };
  
  const handleColorChange = (event) => {
    setColorValue(event.target.value);
  };
  
  const handleItemChange = (event) => {
    setItemValue(event.target.value);
  };
  
  const handleLikesChange = (event) => {
    setLikesValue(event.target.value);
  };
  const movePage = useNavigate();

  function goPage (){
    movePage('/Page1')
  }

  function goPage2(){
    movePage('/Page2')
  }

  // Use state to store selected values
  const [companyValue, setCompanyValue] = useState('');
  const [colorValue, setColorValue] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [likesValue, setLikesValue] = useState('');

  const handleSearch = () => {
    // Use state values instead of getting values directly from DOM

    // Compare state values to determine redirection
    if (
      companyValue === '1' &&
      colorValue === '1' &&
      itemValue === '1' &&
      likesValue === '1'
    ) {
      movePage('/Page1');
    } else if (
      companyValue === '2' &&
      colorValue === '2' &&
      itemValue === '2' &&
      likesValue === '2'
    ) {
      movePage('/Page2');
    }else if (
      companyValue === '진로' &&
      colorValue === 'blue' &&
      itemValue === '콘텐츠' &&
      likesValue === "50만 이상"
    ) {
      movePage('/Page2');
    }
  };

       

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
    <form >
    <div className="menu">
      <a className="user">기업 분석</a>
      <select
      id='p-company'
      className="choice"
      onChange={handleCompanyChange}
        >
        <option className="dksdj-1" >기업</option>
        <option className="dksdj-1" key={6} value={"빙그레"}>빙그레</option>
        <option className="dksdj-1" key={7} value={"진로"}>진로</option>
        <option className="dksdj-1" key={8} value={'읏맨'}>읏맨</option>
        <option className="dksdj-1" key={9} value={"이니스프리"}>이니스프리</option>
        <option className="dksdj-1" key={10} value={'다노'}>다노</option>
        <option className="dksdj-1" key={11} value={'나이키'}>나이키</option>
        <option className="dksdj-1" key={12} value={'애플'}>애플</option>
        <option className="dksdj-1" key={29} value={'에르메스'}>에르메스</option>   
        <option className="dksdj-1" key={30} value={'오늘의 집'}>오늘의 집</option>             
         
      </select>
      <select className="choice" onChange={handleColorChange}>
        <option className="tor-1">색</option>
        <option className="tor-1" key={22} value={'red'}> red</option>
        <option className="tor-1" key={23} value={'orange'}>orange</option>
        <option className="tor-1" key={24} value={'yellow'}>yellow</option>
        <option className="tor-1" key={25} value={"green"}> green</option>
        <option className="tor-1" key={26} value={'blue'}>blue</option>
        <option className="tor-1" key={27} value={'indigo'}>indigo</option>
        <option className="tor-1" key={28} value={'purple'}>purple</option>
      </select>
      <select className="choice" onChange={handleItemChange}>
        <option className="dkdlxpa-1" >아이템</option>
        <option className="dkdlxpa-1" key={1} value={"세계관"}>세계관</option>
        <option className="dkdlxpa-1" key={2} value={"캐릭터"}>캐릭터</option>
        <option className="dkdlxpa-1" key={3} value={"컬러이미지"}>컬러이미지</option>
        <option className="dkdlxpa-1" key={4} value={"콘텐츠"}>콘텐츠</option>
        <option className="dkdlxpa-1" key={5} value={"메세지"}>메세지</option>
      </select>
      <select className="choice" onChange={handleLikesChange}>
        <option className="dkdlxpa-1">좋아요 수</option>
        <option className="dkdlxpa-1" key={14} value={"2천 미만"}>2천 미만</option>
        <option className="dkdlxpa-1" key={15} value={"2천 이상"}>2천 이상</option>
        <option className="dkdlxpa-1" key={16} value={"8천 이상"}>8천 이상</option>
        <option className="dkdlxpa-1" key={17} value={"2만 이상"}>2만 이상</option>
        <option className="dkdlxpa-1" key={18} value={"6만 이상"}>6만 이상</option>
        <option className="dkdlxpa-1" key={19} value={"9만 이상"}>9만 이상</option>
        <option className="dkdlxpa-1" key={20} value={"15만 이상"}>15만 이상</option>
        <option className="dkdlxpa-1" key={21} value={"50만 이상"}>50만 이상</option>
        <option className="dkdlxpa-1" key={13} value={"비공개"}>비공개</option> 
      </select>
     <div className='btn'>
     <button className='btn-1'
      onClick={goPage}
      >검색</button>
      <button className='btn-2'onClick={goPage2}
      >하기</button>
     </div>
      </div>
    </form>
    <div className="tag">
          <a className="tagline">
          </a>
          <a  className="tagline">
          </a>
          <a  className="tagline">
          </a>
          <a  className="tagline">
          
          </a>
      </div>
    </section>
    <div className="line">
    </div>
    <div className='maintop'>
        <main className="mainfirst">
        <div className="mainpage">
            <h3 className="kakao">기업</h3>
            <img src={What} alt='물음표' className='img_what'></img>
        </div>
        <div>
            <table>
            <tbody><tr>
              <td>기업 :{companyValue} </td>
            </tr>
            <tr>
              <td>색 :  {colorValue} </td>
            </tr>
            <tr>
              <td>아이템: {itemValue}</td>
            </tr>
            <tr>
              <td>좋아요 수  :  {likesValue}</td>
            </tr>
            </tbody></table>
        </div>
        </main>
    </div>
  </div>
  </div>
);
}

export default Search;
