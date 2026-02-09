import React, { useEffect, useState } from 'react'
import Highlighted from '../components/homepage/core/highlighted'
import photo1 from "../image/aboutus1.webp"
import photo2 from "../image/aboutus2.webp"
import photo3 from "../image/aboutus3.webp"
import Navbar from '../components/common/navbar'
import aboutphoto from "../image/FoundingStory.png"
import Learning from '../components/about/learning'
import Contactform from '../components/common/contactform'
import Modal from '../components/common/modal'

function Aboutus() {
  const [openmodal, setmodal] = useState(false)

  // ✅ Fix mobile scroll lock when modal opens/closes
  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"   // iOS Safari fix
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = "auto"
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [openmodal])

  return (
    <div className="relative overflow-x-hidden">
      <Navbar setmodal={setmodal} />

      {/* ✅ Modal (rendered only when open) */}
      {openmodal && (
        <div className="fixed inset-0 z-[100]">
          <Modal setmodal={setmodal} />
        </div>
      )}

      <div>
        {/* Section 1 */}
        <div className="flex flex-col gap-5 relative bg-richblack-800 w-11/12 mx-auto items-center pt-10 md:min-h-[430px]">
          <p className="text-richblack-300">About us</p>

          <h1 className="text-2xl md:text-4xl text-white font-bold w-[90%] md:w-[55%] text-center">
            Driving Innovation in Online Education for a <Highlighted text=" Brighter Future" />
          </h1>

          <p className="text-richblack-300 w-[90%] md:w-[55%] font-bold text-center mb-20 md:text-base text-xs">
            Brooftechie is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
          </p>

          <div className="flex flex-row gap-5 md:absolute -bottom-10 md:-bottom-40 mx-auto w-[95%] md:w-11/12 justify-around">
            <img src={photo1} alt="pic" className="w-[28%] rounded-3xl" />
            <img src={photo2} alt="pic" className="w-[28%] rounded-3xl" />
            <img src={photo3} alt="pic" className="w-[28%] rounded-3xl" />
          </div>
        </div>

        <div className="w-11/12 mx-auto justify-center flex items-end min-h-[350px]">
          <h1 className="text-[24px] md:text-4xl text-center text-richblack-300 w-[85%]">
            " We are passionate about revolutionizing the way we learn. Our innovative platform <span className="text-cyan-400">combines technology</span>, <span className="text-orange-500">expertise</span>, and community to create an <span className="text-orange-400">unparalleled educational experience</span> "
          </h1>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-11/12 flex flex-col mt-40 mx-auto gap-24 mb-20">
        <div className="flex flex-col md:flex-row justify-around w-full items-center">
          <div className="flex flex-col gap-2 md:w-[40%] w-[90%]">
            <h1 className="text-3xl text-center font-bold text-transparent bg-gradient-to-br from-red-900 to-red-600 w-fit bg-clip-text">
              Our Founding Story
            </h1>
            <p className="text-richblack-300 font-inter text-base text-justify">
              As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries.
            </p>
          </div>
          <img src={aboutphoto} alt="pic" />
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around w-full items-center">
          <div className="flex flex-col gap-2 md:w-[40%] w-[90%]">
            <h1 className="text-3xl text-center font-bold text-transparent bg-gradient-to-br from-orange-900 to-orange-400 w-fit bg-clip-text">
              Our Vision
            </h1>
            <p className="text-richblack-300 font-inter text-base text-justify">
              Our vision is to revolutionize the way people learn by building a robust, intuitive platform combining technology with engaging content.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:w-[40%] w-[90%]">
            <h1 className="text-3xl text-center font-bold text-transparent bg-gradient-to-br from-cyan-900 to-cyan-400 w-fit bg-clip-text">
              Our Mission
            </h1>
            <p className="text-richblack-300 font-inter text-base text-justify">
              Our mission is to build a vibrant learning community where individuals connect, collaborate, and grow together.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-richblack-800 w-full min-h-[150px] mx-auto flex items-center justify-around">
        <div className="flex flex-row w-11/12 items-center justify-around">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white font-bold">50k</p>
            <p className="text-richblack-500">Active Students</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white font-bold">10+</p>
            <p className="text-richblack-500">Mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white font-bold">200+</p>
            <p className="text-richblack-500">Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white font-bold">50+</p>
            <p className="text-richblack-500">Awards</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col">
        <Learning />

        <div className="min-h-[300px] md:min-h-screen flex flex-col w-11/12 md:w-6/12 mx-auto">
          <div className="flex flex-col justify-end items-center mt-16">
            <h1 className="text-3xl text-white font-bold">Get in Touch</h1>
            <p className="text-richblack-400">We’d love to hear from you. Please fill out this form.</p>
          </div>
          <Contactform />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
