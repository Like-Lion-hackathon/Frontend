import '../css/Start.css';
import logo from '../img/logo.png'
import {useNavigate} from 'react-router-dom'

function Start(){
    const movePage =useNavigate();

    function gomain(){
      movePage('/main')
    }
   

    return(
        <body>
          <div className='bg_box'>
          <div className='sm_box'> 
            <div className='box_img'>
              <img className='box_img_src' src={logo}></img>
            </div>
            <div className='box_text'>
              기업 인증하기
            </div>
            <div >
              <input className='box_input' type='text' placeholder='사업자 번호 입력'
              // //  onKeyPress={'return CheckNumber(event)'}
              //       value={text}
              //       onChange={(e)=>setText(e.target.value)}
              />
            </div>
            <div className='box_btn'>
              <button className='btn' type='button'  
              // onClick={navigateToPurchase}
              onClick={gomain}
              >
                시작
              </button>
            </div>
          </div>
          </div>
        </body>
      );
};

export default Start;