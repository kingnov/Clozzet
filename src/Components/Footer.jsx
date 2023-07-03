import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <div className=" bg-gray-200 mt-5">
      <h5 className="items-center gap-3 flex justify-center text-4xl mt-10 mb-4">
        Subscribe & get up to 30% OFF
      </h5>
      <div className="flex justify-center">
        <input
          className=" p-4 border-1  text-2xl rounded-full "
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="bg-[#45C9A1] rounded-full my-1 p-5 shadow-lg py-4 px-[6em]">
          Submit
        </button>
      </div>
      <div className="flex justify-center gap-8">
        <div className="w-70">
          <li>
            <img src="{logo}" className="w-40" alt="logo" />
          </li>
          <p className="text-2xl">
            Offering a unique and stylish perspective on fashion is our number
            one priority. Confuse your mirror by our trendy outfits.
          </p>
        </div>
        <div>
          <h4 className=" font-bold">Store</h4>
          <ul className="text-1xl">
            <li>Women’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Store Sale</li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-bold">Help</h4>
          <ul className="text-1xl">
            <li>Customer Support</li>
            <li>Terms& Conditions</li>
            <li>Privacy Policy</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-bold">Contact Us</h4>
          
            <div className="gap-3">
            <div className="flex">
              <img className="w-9" src={email} />
              <p className="text-1xl mt-1 mb-1">contact@dozzet.com</p>
            </div>
            <div className="flex">
              <img className="w-9" src={phone} />
              <p className="text-1xl">254-700-333-333</p>
            </div>
            
          </div>
          <h5>Follow Us</h5>
          <div className="flex gap-3">
          <img className="w-9" src={facebook} />
          <img className="w-9" src={instagram} />
          <img className="w-9" src={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
