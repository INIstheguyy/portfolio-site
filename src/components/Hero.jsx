import styles from "../style";
import { discount, robot } from "../assets";
import Getstarted from './Getstarted'

function Hero  ()  {
    return ( 
        <section id="home" className={` flex md: flex-row  ${styles.paddingY}`}>
            <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className=" flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-[10px] mb-2 ">
                    <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className=" text-white">20%
                        </span>
                        <span className=""> 
                        Discount for {""}
                            <span className="text-white">1 Month</span>
                        </span>
                     </p>   
                </div>
                <div className=" flex flex-row justify-between items-center w-full">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px]">
                        The Next <br className=" sm:block hidden"/>{''}
                        <span className=" bg-clip-text text-transparent bg-gradient-to-br from-teal-600 to-teal-300
                        ">Generation</span><br/>
                    </h1> 
                    <div className=" ss:flex  hidden md:mr-4 mr-0">
                            <Getstarted/>
                        </div>
                </div>  
                <h1 className=" text-white flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px]"> Payment Method.</h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.</p>
            </div>
            <div>
                <img src={robot} alt="Billing" className=" w-[100%] h-[100%] relative z-index[5]" />
                <div className="absolute z-index[0] w-[40%] h-[35%] pink__gradient top-0"></div>
                <div className="absolute z-index[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"></div>
                <div className="absolute z-index[0] w-[50%] h-[50%] blue__gradient right-20 bottom-20"></div>
            </div>
        </section>
     );
}
 
export default Hero;