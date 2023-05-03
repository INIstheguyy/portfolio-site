import styles from "./style";
import { Navbar,Stats,Business,Billing,Testimonials,Clients,CTA,Footer,Hero} from "./components";
function App() {
  return (
    <div className=" bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
          </div>
          <div className={`${styles.paddingX}`} >
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Business/>
              <Billing/>
              <Testimonials/>
              <Clients/>
              <CTA/>
              <Footer/>
            </div>
          </div>
    </div>
  );
}

export default App;
