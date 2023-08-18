import { useNavigate } from "react-router-dom";
import "../css/Start.css";
import logo from "../img/logo.png";



function Start() {
    
    


    const movepage = useNavigate();
    function goMain (){
        movepage('/main')
    }
    
    return (
        <div>
            <div className="bg_box">
                <div className="sm_box">
                    <div className="box_img">
                        <img className="box_img_src" src={logo} alt="logo" />
                    </div>
                    <div className="box_text">기업 인증하기</div>
                    <div>
                        <form>
                            <input
                                className="box_input"
                                type="text"
                                placeholder="사업자 번호 입력"
                                maxLength={10}
                                min={5}
                                
                            />
                            <br></br>
                            <button className="btn" type="button" onClick={goMain}>
                                시작
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;