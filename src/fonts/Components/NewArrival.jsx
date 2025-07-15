// "use client"

import img1 from "../../image/watch.png"
import { useState, useEffect } from "react"
import { Clock, ShoppingCart } from "lucide-react"
import { Col, Divider, Row } from 'antd';
const NewArrival = () => {
  const [cart, setCart] = useState([])
  const [addingToCart, setAddingToCart] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 18,
    minutes: 19,
    seconds: 45,
  })

  const categories = ["All", "Mobile Phone", "Tablet", "Smart Watch", "Laptop", "Accessories"]

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

  const newArrivals = [
    {
      id: 1,
      name: "(Pre-Order) Galaxy Z Flip7",
      image:img1,
      category: "Mobile Phone",
      currentPrice: "$1,299.00",
      originalPrice: "$1,399.00",
      discount: "$100 Off",
      monthlyPrice: "$116.00/mo for 12 mo.",
      hasCountdown: true,
      isNew: true,
      hasAward: true,
    },
    {
      id: 2,
      name: "(Pre-Order) Galaxy Z Fold7",
      image:img1,
      category: "Mobile Phone",
      currentPrice: "$1,899.00",
      originalPrice: "$1,999.00",
      discount: "$100 Off",
      monthlyPrice: "$169.00/mo for 12 mo.",
      hasCountdown: true,
      isNew: true,
      hasAward: true,
    },
    {
      id: 3,
      name: "Mac Studio M4 Max",
      image:img1,
      category: "Laptop",
      currentPrice: "$3,159.00",
      monthlyPrice: "",
      isNew: true,
      hasAward: true,
    },
    {
      id: 4,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      image:img1,
      category: "Accessories",
      currentPrice: "$799.00",
      monthlyPrice: "Or $71.00/mo for 12 mo.",
      isNew: true,
      hasAward: true,
    },
    {
      id: 5,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      image:img1,
      category: "Accessories",
      currentPrice: "$279.00",
      monthlyPrice: "Or $25.00/mo for 12 mo.",
      isNew: true,
      hasAward: true,
    },
    {
      id: 6,
      name: "(Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      image:img1,
      category: "Accessories",
      currentPrice: "$179.00",
      monthlyPrice: "Or $16.00/mo for 12 mo.",
      isNew: true,
      hasAward: true,
    },
    {
      id: 7,
      name: "Xiaomi Redmi Pad 2 4G",
      image:img1,
      category: "Tablet",
      currentPrice: "$199.00",
      monthlyPrice: "Or $18.00/mo for 12 mo.",
      isNew: true,
      hasAward: true,
    },
    {
      id: 8,
      name: "Xiaomi Redmi Pad 2",
      image:img1,
      category: "Tablet",
      currentPrice: "$169.00",
      monthlyPrice: "Or $15.00/mo for 12 mo.",
      isNew: true,
      hasAward: true,
    },
  ]

  const filteredProducts =
    activeCategory === "All" ? newArrivals : newArrivals.filter((product) => product.category === activeCategory)

  const formatTime = (time) => {
    return time.toString().padStart(2, "0")
  }

  const addToCart = async (product) => {
    setAddingToCart(product.id)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })

    setAddingToCart(null)
  }

  const getCartItemCount = (productId) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Row>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">NEW ARRIVAL</h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {categories.map((category, index) => (
              <div key={category} className="flex items-center">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`font-medium transition-colors ${
                    activeCategory === category ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
                {index < categories.length - 1 && <span className="ml-4 text-gray-400">|</span>}
              </div>
            ))}
          </div>
        </div>
          </Row>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer relative"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              {/* Product Image Container */}
              <div className="relative p-4">
                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    NEW
                  </div>
                )}

                {/* Award Badge */}
                {product.hasAward && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-sm">
                      <span className="text-yellow-800 font-bold text-xs">1</span>
                    </div>
                  </div>
                )}

                {/* Cart Count Badge */}
                {getCartItemCount(product.id) > 0 && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {getCartItemCount(product.id)} in cart
                  </div>
                )}

                {/* Product Image */}
                <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] leading-tight">
                    {product.name}
                  </h3>

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="flex justify-center">
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                        {product.discount}
                      </span>
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg font-bold text-red-600">{product.currentPrice}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>

                    {product.monthlyPrice && (
                      <div className="text-xs text-gray-600 text-center">{product.monthlyPrice}</div>
                    )}
                  </div>

                  {/* Add to Cart Button - Shows on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={addingToCart === product.id}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 text-sm"
                    >
                      {addingToCart === product.id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Adding...</span>
                        </>
                      ) : getCartItemCount(product.id) > 0 ? (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add More ({getCartItemCount(product.id)})</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>🛒 Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Mobile Add to Cart Button - Always Visible */}
                  {/* <div className="lg:hidden">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={addingToCart === product.id}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 text-sm"
                    >
                      {addingToCart === product.id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Adding...</span>
                        </>
                      ) : getCartItemCount(product.id) > 0 ? (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add More ({getCartItemCount(product.id)})</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>🛒 Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div> */}

                  {/* Countdown Timer */}
                  {product.hasCountdown && (
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-600 pt-2 border-t border-gray-100">
                      <Clock className="w-3 h-3" />
                      <span>Deal ends in</span>
                      <span className="font-mono font-semibold text-blue-600">
                        {timeLeft.days}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-green-800 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
              </h3>
              <button onClick={() => setCart([])} className="text-sm text-red-600 hover:text-red-800 font-medium">
                Clear Cart
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-contain rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-red-600">{item.currentPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center pt-4 border-t border-green-200">
              <div className="text-lg font-semibold text-green-800">
                Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Show message if no products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
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

export default NewArrival
