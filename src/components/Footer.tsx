import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
                {/* About Us */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4 tracking-wide">About Us</h2>
                    <p className="mb-4 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Music School</span> is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4 tracking-wide">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Courses</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Follow Us */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4 tracking-wide">Follow Us</h2>
                    <div className="flex space-x-5 mt-2">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500 text-lg transition-colors duration-200">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-lg transition-colors duration-200">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-400 text-lg transition-colors duration-200">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                {/* Contact Us */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4 tracking-wide">Contact Us</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <span>Karachi, Pakistan</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-blue-400" />
                            <a href="mailto:info@musicschool.com" className="hover:text-blue-400 transition-colors duration-200">
                                info@musicschool.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-blue-400" />
                            <a href="tel:+921234567890" className="hover:text-blue-400 transition-colors duration-200">
                                +92 123 456 7890
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6">
                <p className="text-center text-xl text-gray-500 ">
                    © 2024 <span className="font-semibold text-white">Music School</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
