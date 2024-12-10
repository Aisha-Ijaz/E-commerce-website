import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Image from "next/image";


export default function Contact() {
    return (
        <div>
            <Header />
            <div>
                <div>
                <Image src={"/assets/contact.png"} width={1650} height={316} alt='Bg img' />
                </div>
                <div className="pb-10 justify-center text-center pt-10">
                    <h1 className="text-2xl font-bold ">Get In Touch With Us</h1>
                    <p className="w-[644px] h-[48px] text-center ml-[400px] mt-5">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className="ml-40 mt-10 pb-5 flex gap-40">
                <div >
                    <h2 className="font-bold">Address</h2>
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                
                    <h2 className="font-bold">Phone</h2>
                    <p>Mobile: +(84) 546-6789</p>
                    <p>Hotline: +(84) 456-6789</p>
                
                    <h2 className="font-bold">Working Time</h2>
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
                <div>
                    <form action="">
                        <label htmlFor="name">Your name</label><br />
                        <input type="text" name="name" value={"ABC"}  className="border w-[528px] h-[55px] rounded-[10px] text-gray-300 mt-2"/> <br />

                        <label htmlFor="email">Email address</label><br />
                        <input type="text" name="email" value={"Abc@def.com"}  className="border w-[528px] h-[55px] rounded-[10px] text-gray-300 mt-2"/>  <br />

                        <label htmlFor="subject">Subject</label><br/>
                        <input type="text" name="subject" value={"This is an optional"}  className="border w-[528px] h-[55px] rounded-[10px] text-gray-300 mt-2"/> <br />

                        <label htmlFor="message">Message</label><br />
                        <textarea name="message" id="message" value={"Hi! i’d like to ask about"} className="border w-[527px] h-[120px] rounded-[10px] text-gray-300 mt-2"></textarea> <br />

                        <button type="submit" className="border rounded-[5px] w-60 h-12 bg-yellow-600 text-white"> Submit</button>
                    </form>
                </div>
                </div>
                
            
            </div>

            <Frame />
            <Footer/>
        </div>
    )

}