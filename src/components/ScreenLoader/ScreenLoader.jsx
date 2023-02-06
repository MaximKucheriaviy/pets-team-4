import Lottie from 'react-lottie';
import * as pawLoading from './pawLoading.json';
import{Overlay} from './ScreenLoader.styled';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: pawLoading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}


export default function Loader () {
return (
  <>
   <Overlay>
      <Lottie options={defaultOptions}
          height={200}
          width={200}/>
    </Overlay>
  </>
)}