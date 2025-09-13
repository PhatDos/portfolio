import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const items = [ "Trang chủ", "Giới thiệu", "Liên hệ" ];
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ underlineStyle, setUnderlineStyle ] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentLink = navRef.current?.children[ activeIndex ] as HTMLElement;
        if (currentLink) {
            setUnderlineStyle({
                left: currentLink.offsetLeft,
                width: currentLink.offsetWidth,
            });
        }
    }, [ activeIndex ]);

    const handleMouseEnter = (index: number) => {
        const currentLink = navRef.current?.children[ index ] as HTMLElement;
        if (currentLink) {
            setUnderlineStyle({
                left: currentLink.offsetLeft,
                width: currentLink.offsetWidth,
            });
        }
    };

    const handleMouseLeave = () => {
        const currentLink = navRef.current?.children[ activeIndex ] as HTMLElement;
        if (currentLink) {
            setUnderlineStyle({
                left: currentLink.offsetLeft,
                width: currentLink.offsetWidth,
            });
        }
    };

    return (
        <nav className="relative flex items-center gap-10 bg-[#e9cfac] rounded-full px-12 py-2 text-md font-bold" ref={navRef}>
            {items.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className="relative z-10 px-2"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setActiveIndex(index)}
                >
                    {item}
                </a>
            ))}
            {/* Thanh underline */}
            <span
                className="absolute bottom-[5px] h-1 bg-[var(--main-red)] rounded transition-all duration-700 ease-out"
                style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
        </nav>
    );
};

export default Navbar;
