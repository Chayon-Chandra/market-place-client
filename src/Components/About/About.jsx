import React from "react";
import aboutImg from "../../assets/popularImage/51262.jpg";
import Container from "../Container/Container";

const About = () => {
  return (
    <div className="bg-black py-10">
      <Container>
         <div className="text-center py-5">
            <h1 className="latoBold text-3xl text-center text-white  border-b-2 border-white-500 inline-block pb-1.5">About</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 px-3">
          <div className="">
            <img className="w-[700px] rounded-xl" src={aboutImg} />
          </div>
          <div className="">
            <h2 className="card-title LatoSemibold text-2xl text-white">About Our Freelancing Platform</h2>
            <p className="LatoRegular text-xl text-white">We are a modern freelancing marketplace that connects skilled professionals with businesses worldwide. Our platform makes it easy to find trusted freelancers and get quality work done efficiently.</p>

            <h2 className="LatoSemibold text-2xl text-white py-5">Why Choose Us</h2>
            <div>
                <ul>
                    <li className="LatoRegular text-xl text-white">✅ Hire verified and skilled freelancers</li>
                    <li className="LatoRegular text-xl text-white">✅ Wide range of services in one platform</li>
                    <li className="LatoRegular text-xl text-white">✅ Secure payments and smooth communication</li>
                    <li className="LatoRegular text-xl text-white">✅ Fast project delivery and reliable support</li>
                </ul>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
