import "./Banner.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export default function Banner(){
    return(
        <section className="banner-section">
            <div className="banner-container">
                <div className="banner-images"></div>
                <div className="banner-arrows">
                            <button className="icon-arrown-services"><IoIosArrowBack /></button>
                            
                            <button className="icon-arrown-services"><IoIosArrowForward /></button>
                          </div>
            </div>
        </section>
    )
}