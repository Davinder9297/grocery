import { Link } from "react-router-dom";

export default function Footer(){
    return(<>
    <div className="bg-orange-100 mt-5">
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer-heading">Magento</h4>
                        <div className="footer-underline"></div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Quick Links</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Home</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">About Us</Link></div>

                        <div className="mb-2"><Link href="" className="text-gray-600">Contact Us</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Blogs</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Sitemaps</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Shop Now</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Collections</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Trending Products</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">New Arrivals Products</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Featured Products</Link></div>
                        <div className="mb-2"><Link href="" className="text-gray-600">Cart</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Reach Us</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2">
                            <p>
                                #444, some main road, some area, some street, bangalore, india - 560077
                            </p>
                        </div>
                        <div className="mb-2">
                            <Link href="" className="text-gray-600">
                                 +91 888-XXX-XXXX
                            </Link>
                        </div>
                        <div className="mb-2">
                            <Link href="" className="text-gray-600">
                                xyz@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>)
}