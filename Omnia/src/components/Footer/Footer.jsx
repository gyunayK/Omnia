import {AiOutlineInstagram} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'

function Footer() {
  return (
    <div
      className="h-full w-full "
      style={{
        backgroundImage:
          "linear-gradient(200deg, rgba(75,163,233,1) 0%, rgba(255,136,220,1) 100%)",
      }}
    >
      <img
        src="https://uploads-ssl.webflow.com/63e2796784a816a089006bb0/641f2e6022b667285198ff8a_Wave_off-white_flipped.svg"
        loading="lazy"
        alt=""
        className="w-full h-20 object-cover"
      />

      <div className="p-5 max-w-6xl mx-auto font-Archivo flex  items-center justify-between">
        <img
          src="https://ik.imagekit.io/riviaa/Omnia/A_letter_tech_logo_2.png?updatedAt=1691831497528"
          alt="footer_Logo"
          className="w-40 h-40 "
        />

        <div className="text-white flex flex-col gap-3">
          <h1 className="font-bold tracking-wider text-lg">SOCIALS</h1>
          <a href="#" className="text-lg">
            Legal Notice
          </a>
          <a href="#" className="text-lg">
            Privacy policy
          </a>
          <div className="flex gap-3">
            <a href="#" className="text-4xl">
              <CiTwitter/>
            </a>
            <a href="#" className="text-3xl">
             <AiOutlineInstagram/>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-50">
        <div className="p-5 max-w-6xl mx-auto font-Archivo">
          <p className="text-white text-lg text-center">
            © 2021 Omnia. All rights reserved.
          </p>
          
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
