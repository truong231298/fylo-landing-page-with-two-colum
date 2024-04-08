import avavtar from "/images/avatar-testimonial.jpg"
import iconarrow from "/images/icon-arrow.svg"
import iconemail from "/images/icon-email.svg"
import iconphone from "/images/icon-phone.svg"
import iconquotes from "/images/icon-quotes.svg"
import logo from "/images/logo.svg"
import images1 from "/images/illustration-1.svg"
import images2 from "/images/illustration-2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function App() {
  return (
    <main className="min-h-screen bg-LightGrayishBlue">
      <section className="flex flex-col gap-4">
        {/* header */}
        <div className="header p-8">
          {/* navbar */}
          <nav className="flex justify-between items-center">
            <img src={logo} alt="" />
            <ul className="flex flex-row gap-4">
              <li><a href="#">Features</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </nav>
          {/* content */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="sm:w-1/2 flex flex-col gap-4 text-center sm:text-start sm:mt-20">
              <h1 className="text-2xl font-medium">All your files in one secure location, accessible anywhere.</h1>
              <p className="font-medium ">Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with friends,
                family, and co-workers.</p>
              <span className="flex flex-col sm:flex-row gap-2">
                <input type="text" className="border-2 p-2 ring-1 ring-VeryDarkBlue" placeholder="Enter your email" />
                <button className="border-2 rounded-lg bg-BrightBlue px-4 py-2 text-white">Get Started</button>
              </span>
            </div>
            <div className="sm:w-1/2">
              <img src={images1} alt="" className="sm:h-[90%]" />
            </div>
          </div>
        </div>
        {/* body */}
        <div className="body flex flex-col gap-4 mt-10">
          {/* part 1 */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 p-4">
            <div className="flex flex-col gap-2">
              <h1>Stay productive, wherever you are</h1>
              <p>Never let location be an issue when accessing your files. Fylo has you
                covered for all of your file storage needs.</p>
              <p>Securely share files and folders with friends, family and colleagues for
                live collaboration. No email attachments required!</p>
              <a href="" className="inline-flex text-ModerateCyan underline items-center justify-center sm:justify-normal">See how Fylo works<img src={iconarrow} alt="" /></a>
              {/* box */}
              <div className="sm:w-96 rounded-lg border-2 p-4 flex flex-col gap-2 mx-10 sm:mx-0">
                <img src={iconquotes} alt="" className="w-10" />
                <p>Fylo has improved our team productivity by an order of magnitude. Since
                  making the switch our team has become a well-oiled collaboration machine.</p>
                <span className="flex flex-row items-center gap-2">
                  <img src={avavtar} alt="" className="w-10 rounded-full" />
                  <span>
                    <h1>Kyle Burton</h1>
                    <p>Founder & CEO, Huddle</p>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <img src={images2} alt="" className="sm:h-[80%]" />
            </div>

          </div>
          {/* part 2 */}
          <div className="flex flex-col sm:flex-row text-center sm:text-start justify-center items-center sm:gap-20 bg-DesaturatedBlue p-4">
            <span className="flex flex-col gap-4 sm:w-1/3">
              <h2 className="text-xl text-white">Get early access today</h2>
              <p>It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help you.</p>
            </span>
            <span className="flex flex-col gap-2 sm:w-1/2 w-2/3 mt-5 sm:mt-0">
              <input type="text" className="sm:w-96 py-2 rounded-sm " />
              <button className="rounded-lg bg-BrightBlue px-4 py-2 text-white sm:w-48">Get Started For Free</button>
            </span>
          </div>
        </div>

        {/* footer */}
        <div className="footer flex flex-col  gap-4  bg-VeryDarkBlue p-4">
          <img src={logo} alt="" className="w-40" />
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className=" text-white items-center">
              <span className="flex flex-row gap-2 my-2">
                <img src={iconphone} alt="" />
                <h2>Phone: +1-543-123-4567</h2>
              </span>
              <span className="flex flex-row gap-2">
                <img src={iconemail} alt="" />
                <h2>example@fylo.com</h2>
              </span>
            </div>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
            <span className="flex flex-row justify-center sm:justify-start gap-2 text-white">
              <FontAwesomeIcon icon={faFacebook} className="border-2 border-white rounded-full p-1 cursor-pointer hover:text-ModerateCyan"/>
              <FontAwesomeIcon icon={faTwitter} className="border-2 border-white rounded-full p-1 cursor-pointer hover:text-ModerateCyan"/>
              <FontAwesomeIcon icon={faInstagram} className="border-2 border-white rounded-full p-1 cursor-pointer hover:text-ModerateCyan"/>
            </span>
          </div>

        </div>
      </section>
    </main>
  )
}