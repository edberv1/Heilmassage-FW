import { useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useRef } from 'react';

const Scroll = () =>{

    const showTopRef = useRef(null);

    useEffect(() => {
        const showTopFunc = () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 100) {
                showTopRef.current.classList.add('showTop');
            } else {
                showTopRef.current.classList.remove('showTop');
            }
        }
        window.addEventListener('scroll', showTopFunc);
        return () => {
            window.removeEventListener('scroll', showTopFunc);
        };
    }, []);

    return(
        <button ref={showTopRef} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="showT">
        <FaChevronUp></FaChevronUp>
      </button>
    )



}
export default Scroll