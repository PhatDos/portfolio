import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons'

import ImageSlider from '../components/imageSlider'
import Navbar from '../components/navbar';

function App() {
    return (
        <div className="min-h-screen text-gray-900 bg-gradient-to-r from-[#ece2d6] to-[#efdfcb]">
            {/* Header */}
            <header className="flex items-center justify-between py-10 px-[var(--margin-main)]">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-27 w-[8.37vw] bg-transparent"
                    />
                    <div className="flex flex-col justify-center items-center font-extrabold text-xl select-none">
                        <span>INTELLIGENT </span>
                        <span className="text-amber-600">PARKING SYSTEM</span>
                    </div>
                </div>

                {/* Nav */}
                <Navbar />

                {/* Actions */}
                <div className="flex items-center gap-7">
                    <button aria-label="search" className='pointer'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" />
                    </button>
                    <button className="relative pointer" aria-label="cart">
                        <FontAwesomeIcon icon={faBell} className="text-3xl" />
                        <span
                            className="absolute -top-2 -right-3 
             flex items-center justify-center
             w-5 h-5 rounded-full 
             bg-[var(--main-red)] text-white text-xs font-bold"
                        >
                            2
                        </span>

                    </button>
                    <button className="border border-[var(--main-red)] text-[var(--main-red)] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[var(--main-red)] hover:text-[#f2e8e6] transition duration-350 cursor-pointer">
                        ĐĂNG NHẬP
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="grid md:grid-cols-2 gap-8 py-10 items-center px-[var(--margin-main)]">
                {/* Left content */}
                <div className='mr-35'>
                    <p className="font-semibold text-[var(--main-red)] mb-2">
                        📍 VỊ TRÍ CỦA BẠN: CẨM LỆ, DA NANG, VIETNAM
                    </p>

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                        HỆ THỐNG ĐỖ XE THÔNG MINH
                    </h1>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Hệ thống giúp người dùng nhanh chóng tìm kiếm chỗ trống, đặt chỗ trước, đồng thời hỗ trợ chủ bãi xe giám sát tình trạng hoạt động theo thời gian thực.
                        Từ việc tối ưu không gian, giảm ùn tắc, đến nâng cao trải nghiệm cho khách hàng, chúng tôi mang đến một nền tảng quản lý thông minh, tiện lợi và hiệu quả.
                    </p>

                    <div className="flex items-center gap-8">
                        <button
                            className="bg-[var(--main-red)] text-white px-3 py-2 rounded-lg 
                                hover:bg-[#a73a2b] pointer
                                active:translate-y-[4px] transition-all duration-150 font-bold"
                            style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.4)' }}
                            onMouseDown={(e) => (e.currentTarget.style.boxShadow = 'none')}
                            onMouseUp={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.4)')}
                        >
                            Chi tiết thêm
                        </button>

                        <button className="flex items-center text-[var(--main-red)] px-2.5 py-3 bg-[#eac2b1] rounded-full pointer">
                            <FontAwesomeIcon icon={faPlay} className="text-lg" />
                        </button>

                        <span className="underline pointer">Xem bản đồ</span>
                    </div>
                </div>

                {/* Right images */}
                <ImageSlider />
            </main>
        </div>
    );
}

export default App;
