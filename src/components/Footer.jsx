import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import cross from '../assets/cross.png'

const Footer = () => {
    return (
        <header className="flex justify-between items-center px-8 bg-black text-white">
            <div className="flex items-center px-2 py-2">
                <p className="text-3xl font-bold text-rose-300 text-left">Logo</p>
            </div>


            <div className="flex items-center space-x-4">
                <span className="text-sm text-white">
                    Contact@00000000.tech
                </span>

                <div className="flex space-x-1 text-gray-400">
                    <span className="hover:text-white cursor-pointer">
                        <img
                            src={twitter}
                            className="h-7 w-10 object-contain mr-1"
                        />
                    </span>
                    <span className="hover:text-white cursor-pointer">
                        <img
                            src={insta}
                            className="h-7 w-10 object-contain mr-1"
                        />
                    </span>
                    <span className="hover:text-white cursor-pointer">
                        <img
                            src={cross}
                            className="h-7 w-10 object-contain mr-1"
                        />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Footer;
