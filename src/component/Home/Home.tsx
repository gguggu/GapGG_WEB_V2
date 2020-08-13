import React from 'react'
import Loader from 'component/common/Loader';
import InputForm from 'component/common/InputForm';
import LOGO from 'assets/images/logos/Gap.GG Logo_White.png';
import './Home.scss';

interface Props {
  isPending: boolean;
}

const Home = ({ isPending }: Props) : JSX.Element => {
  return (
    <>
      {
        isPending ? <Loader/>
          : 
          <div className="Home">
            <div className="Home-logoWrap">
              <img src={LOGO}/>
            </div>
            <div className="Home-inputWrap">
              <InputForm clickFunc={() => {}} changeFunc={() => {}} placeHolder='조회할 소환사명'/>
            </div>
            <div className="Home-contentBox">
              <div className="Home-contentBox-title">금주의 로테이션</div>
            </div>
          </div>
      }
    </>
  );
};

export default Home;
