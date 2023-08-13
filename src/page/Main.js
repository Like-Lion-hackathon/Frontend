import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import '../css/Main.css';
import {useNavigate} from 'react-router-dom'

// import {useNavigate} from 'react-router-dom'

// const start = ()=> {
//     const navigate = useNavigate();

//     const goToMain =()=> {
//         navigate("/Main");
//     }
// }

function Main(){
    const movePage =useNavigate();

    function gosearch(){
      movePage('/search')
    }
   

    // const [isShowMore , setIsShowMore] = 
    
    return(
        <body>
            <div className=' bg_box'>
                <div className='sm_box'>
                    <div className='smm_box'>
                        <div className='ac1'>
                            <div className='top'> Trust#</div>
                            <div className='sc1'> 다른 기업들의 홍보 방식을 <br></br>
                                단어, 영상, 색 다양한 방식으로 <span className='a'> #분석  </span>
                                <br></br>
                                {/* 더보기 펼쳐지도록 하얀 작은 박스를 스크롤 할 수 있도록 */}
                                {/* 더보기 생략 부분 */}
                                {/* 연령별 분석을 통해 사용자의 소비를 <br></br>
                                <span className='a'> # 분석</span>하여 제공한다  */}
                                {/* 더보기 추가되는 부분 */}
                                {/* <input type='checkbox' className='sc1_more_btn'></input> */}
                            </div>
                            <div>
                                {/* <button className='sc1_btn' type='button'> 더 보기 </button> */}
                                <input className='btn1' type='button' value={"더 보기"}
                                onClick={gosearch}
                                ></input>
                            </div>
                        </div>
                        <div className='ac2'>
                            <div className='sc2'> 사용자의 <span className='a'>
                                #분석  </span></div>
                                {/* sc4 */}
                            <div className='bt_box'>
                                {/* flex로 정렬 */}
                                {/* 여기가 한 블럭  */}
                                <div className='box1'>
                                    <div className='text'># 1 </div>
                                    <div className='text_top'> 연령별 분석 보기</div>
                                    <div className='text_bot'>연령별 소비를 분석하여 <br></br>제공합니다. </div>
                                    <div className='text_inner'>
                                        <div>더 보기 </div>
                                        <div> <FontAwesomeIcon icon={faArrowRightToBracket} 
                                       
                                        /></div>
                                    </div>
                                </div>

                                {/* 두번째 블럭 */}
                                <div className='box2' >
                                    <div className='text'># 2 </div>
                                    <div className='text_top'> 전체 분석 보기</div>
                                    <div className='text_bot'>전체적인 소비를 분석하여 <br></br>제공합니다. </div>
                                    <div className='text_inner'>
                                        <div>더 보기 </div>
                                        <div> <FontAwesomeIcon icon={faArrowRightToBracket} /></div>
                                    </div>
                                </div>

                                {/* 세번째 블럭 */}

                                <div className='box3'>
                                    <div className='text'># 3 </div>
                                    <div className='text_top'>요즘 뜨는 아이템</div>
                                    <div className='text_bot'>소비를 분석하여 유행하는 <br></br>아이템 정보를 제공합니다. </div>
                                    <div className='text_inner' >
                                        <div>더 보기 </div>
                                        <div> <FontAwesomeIcon icon={faArrowRightToBracket} /></div>
                                    </div>
                                </div>

                                {/* 네번쨰 블럭 */}

                                <div className='box4'>
                                    <div className='text'># 4 </div>
                                    <div className='text_top'> 요즘 뜨는 장소</div>
                                    <div className='text_bot'>소비를 분석하여 유행하는  <br></br> 장소를 제공합니다. </div>
                                    <div className='text_inner'>
                                        <div>더 보기 </div>
                                        <div> <FontAwesomeIcon icon={faArrowRightToBracket} /></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div > 
                                <input className='btn2' type='button' value={"더 보기"} onClick={gosearch}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default Main;