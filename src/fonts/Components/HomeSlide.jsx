"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Bell, Star, ShoppingCart } from "lucide-react"
import img1 from "../../image/galaxy-z.png"
const HomeSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample slide data
  const slides = [
    {
      id: 1,
      title: "ជូនដំណឹងសំខាន់ !!",
      subtitle: "បាតុភូតនេះ សូមអតិថិជនដែលបានទិញទំនិញតាមរយៈហ្វេសប៊ុកពេលខ្លះ ហាងមិនមែនជា Sokly Phone Shop ដែលបានចុះបញ្ជី Follower 353K✅",
      buttonText: "សូមអានដំណឹងនេះ!!!",
      image:img1,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-100",
    },
    {
      id: 2,
      title: "Special Offers",
      subtitle: "Get the best deals on premium smartphones and accessories. Limited time offers available now!",
      buttonText: "Shop Now",
      image: img1,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-100",
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Discover the latest smartphones and cutting-edge technology. Be the first to experience innovation!",
      buttonText: "Explore",
      image:img1,
      bgColor: "bg-gradient-to-r from-purple-50 to-violet-100",
    },
  ]

  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Samsung", logo: "📱", color: "bg-blue-600" },
    { name: "Sony", logo: "🎵" },
    { name: "Xiaomi", logo: "📲", color: "bg-orange-500" },
    { name: "Huawei", logo: "📶" },
    { name: "Oppo", logo: "📱", color: "bg-green-600" },
    { name: "Google", logo: "🔍" },
    { name: "OnePlus", logo: "1️⃣", color: "bg-red-600" },
    { name: "Asus", logo: "💻" },
    { name: "HMD", logo: "📞" },
    { name: "Infinix", logo: "♾️" },
    { name: "Tecno", logo: "🔧" },
    { name: "Nothing", logo: "⚪" },
    { name: "ZTE", logo: "📡" },
    { name: "Nokia", logo: "📱", color: "bg-blue-700" },
    { name: "Honor", logo: "🏆" },
    { name: "Vivo", logo: "📱", color: "bg-blue-500" },
    { name: "Microsoft", logo: "🪟" },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, slides.length])

  // Initialize AOS
  useEffect(() => {
    // Simulate AOS initialization
    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("aos-animate")
      }, index * 100)
    })
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-[80%] items-center  m-auto">
      {/* Hero Slider Section */}
      <div className="relative items-center  overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className={`w-full flex-shrink-0 ${slide.bgColor} min-h-[500px]`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-5">
                    <div
                      data-aos="fade-right"
                      className="space-y-6 aos-init"
                      style={{
                        opacity: currentSlide === index ? 1 : 0,
                        transform: currentSlide === index ? "translateX(0)" : "translateX(-50px)",
                        transition: "all 0.8s ease-in-out",
                      }}
                    >
                      <div className="flex items-center space-x-2 text-orange-500">
                        <Bell className="w-6 h-6 animate-bounce" />
                        <Bell className="w-5 h-5 animate-bounce" style={{ animationDelay: "0.2s" }} />
                      </div>

                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-lg text-gray-600 leading-relaxed">{slide.subtitle}</p>

                      <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        {slide.buttonText}
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Center/Right Content */}
                  <div className="lg:col-span-7">
                    <div
                      data-aos="fade-left"
                      className="relative aos-init"
                      style={{
                        opacity: currentSlide === index ? 1 : 0,
                        transform: currentSlide === index ? "translateX(0)" : "translateX(50px)",
                        transition: "all 0.8s ease-in-out",
                      }}
                    >
                      {/* Fake Warning Display (for first slide) */}
                      {index === 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            >
                              <img
                                src={img1}
                                alt="Product warning"
                                className="w-full h-32 object-cover"
                              />
                              <div className="absolute inset-0 bg-red-500 bg-opacity-20 flex items-center justify-center">
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm transform rotate-12">
                                  <img src={img1} alt="" />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Product Showcase (for other slides) */}
                      {index !== 0 && (
                        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                          <img
                            src={slide.image || "/placeholder.svg"}
                            alt="Featured Product"
                            className="w-full h-64 object-cover rounded-lg mb-6"
                          />
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">Featured Product</h3>
                              <div className="flex items-center space-x-1 mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-blue-600 w-8" : "bg-white bg-opacity-60 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      </div>

     
      {/* <div className=" w-[40%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2"></div>

     
          <div
            data-aos="fade-up"
            className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-6 text-white relative overflow-hidden aos-init"
            style={{
              opacity: 0,
              transform: "translateY(50px)",
              animation: "fadeInUp 1s ease-out 0.5s forwards",
            }}
          >
            <div className="relative z-10">
              <div className="text-sm font-semibold mb-2">ទូរស័ព្ទដែលមានតម្លៃសមរម្យបំផុត</div>
              <h3 className="text-2xl font-bold mb-4">HMD Skyline 5G</h3>

              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt="HMD Skyline 5G"
                  className="w-32 h-40 object-cover rounded-lg mx-auto"
                />
              </div>

              <div className="text-center">
                <div className="text-lg line-through opacity-75">$99</div>
                <div className="text-3xl font-bold">$449</div>
                <div className="text-sm mt-2">*ការធានាលក់ដាច់/24ខែ</div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
          </div>
        </div>
      </div> */}

      {/* Popular Brands Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-gray-900 text-center mb-12 aos-init"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
            }}
          >
            POPULAR BRANDS
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                data-aos="zoom-in"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer aos-init"
                style={{
                  opacity: 0,
                  transform: "scale(0.8)",
                  animation: `zoomIn 0.6s ease-out ${0.1 * index}s forwards`,
                }}
              >
                <div
                  className={`w-12 h-12 ${brand.color || "bg-gray-100"} rounded-lg flex items-center justify-center mx-auto mb-2`}
                >
                  <span className="text-2xl">{brand.logo}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .aos-init {
          transition-property: opacity, transform;
        }
        
        .aos-animate {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
      `}</style>
    </div>
  )
}

export default HomeSlide
