"use client"

import { useState, useEffect } from "react"
import { Bubbles, ChevronRight, Clock } from "lucide-react"
import { Button } from "antd";
import {ShoppingCartOutlined} from '@ant-design/icons';
import img1 from "../../image/mac.png"
const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 7,
    minutes: 47,
    seconds: 20,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const specialOffers = [
    {
      id: 1,
      name: "(Pre-Order) Galaxy Z Fold7",
      image: img1,
      discount: "$100 Off",
      currentPrice: "$1,899.00",
      originalPrice: "$1,999.00",
      monthlyPrice: "$169.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-blue-900 to-blue-700",
    },
    {
      id: 2,
      name: "(Pre-Order) Galaxy Z Flip7",
      image: img1,
      discount: "$100 Off",
      currentPrice: "$1,299.00",
      originalPrice: "$1,399.00",
      monthlyPrice: "$116.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-orange-400 to-pink-500",
    },
    {
      id: 3,
      name: "Garmin Forerunner® 165 43mm Amoled...",
      image: img1,
      discount: "$81 Off",
      currentPrice: "$199.00",
      originalPrice: "$280.00",
      monthlyPrice: "$18.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-600",
    },
    {
      id: 4,
      name: 'MacBook Air 13" M4 2025 8C',
      image: img1,
      discount: "$80 Off",
      currentPrice: "$1,069.00",
      originalPrice: "$1,149.00",
      monthlyPrice: "$95.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      id: 5,
      name: 'MacBook Air 13" M4 2025 10C',
      image: img1,
      discount: "$80 Off",
      currentPrice: "$1,299.00",
      originalPrice: "$1,379.00",
      monthlyPrice: "$116.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-teal-400 to-blue-500",
    },
    {
      id: 6,
      name: 'MacBook Air 15" M4 2025 10C',
      image: img1,
      discount: "$130 Off",
      currentPrice: "$1,479.00",
      originalPrice: "$1,609.00",
      monthlyPrice: "$132.00/mo.",
      duration: "for 12 mo.",
      isNew: true,
      hasAward: true,
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
  ]

  const formatTime = (time) => {
    return time.toString().padStart(2, "0")
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">SPECIAL OFFER</h2>
          <button className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm">
            View all
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialOffers.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              {/* Product Image Container */}
              <div className="relative">
                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    NEW
                  </div>
                )}

                {/* Award Badge */}
                {product.hasAward && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-500">
                      <span className="text-yellow-800 font-bold text-xs">1</span>
                    </div>
                  </div>
                )}

                {/* Product Image with Background */}
                <div className={`h-48 ${product.bgColor} flex items-center justify-center `}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] leading-tight">
                  {product.name}
                </h3>

                {/* Discount Badge */}
                <div className="flex justify-center">
                  <span className="bg-blue-100 float-right text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                    {product.discount}
                  </span>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-bold text-red-600">{product.currentPrice}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  <div className="text-xs text-gray-600">
                    Or {product.monthlyPrice} {product.duration}
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="flex items-center space-x-1 text-sm text-gray-600 pt-2 border-t border-gray-100">
                  <Clock className="w-3   h-3" />
                  <span>Deal ends in</span>
                </div>
                  <span className="font-mono flex justify-center font-semibold text-blue-600">
                    {timeLeft.days}d {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                    {formatTime(timeLeft.seconds)}
                  </span>
               <Button type="primary" style={{textAlign:"center", magin:"auto" ,justifyContent:"center" }} ><ShoppingCartOutlined /> Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center lg:hidden">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            View All Special Offers
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default SpecialOffer
