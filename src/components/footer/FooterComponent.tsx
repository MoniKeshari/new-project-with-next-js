import React from 'react'
import Image from "next/image";
import style from "../../styles/footer.module.scss";
function FooterComponent() {
    return (
        <div className={`${style.containerfluid} container-fluid`}>
            <div className={`${style.containerdiv} row`}>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-center'>
                    <ul>
                        <li>

                            <Image src="/scrap-logo-removebg-preview.png" width={135} height={135} alt="img" />

                        </li>
                        <li className={style.paragraph}>
                            <p>
                                The Scrapbuddy platform, as a waste management company, is a safe and secure online tool that enables users to easily schedule pick-up calls for any type of scrap they wish to sell, making recycling a hassle-free process. So, continue to recycle with pride using Scrapbuddy, your trusted waste management company in Delhi


                            </p>

                        </li>


                    </ul>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-end'>
                    <div className={style.list_first_ul}>
                        <ul>
                            <li className={style.list_head}>
                                <span> Services</span>

                            </li>
                            <li>
                                <span> Scrap Collection</span>

                            </li>
                            <li>
                                <span>  Paper's Shredding</span>

                            </li>
                            <li>
                                <span> Vehicle Scrapping</span>

                            </li>

                        </ul>
                        <ul>
                            <li className={style.list_head}>
                                <span>  Quick Links</span>

                            </li>
                            <li>
                                <span>  Home</span>

                            </li>
                            <li>
                                <span>  Why Us?</span>

                            </li>
                            <li>
                                <span> Scrap Rates</span>

                            </li>

                        </ul>
                        <ul>
                            <li className={style.list_head}>
                                <span> Support & Legal</span>

                            </li>
                            <li>
                                <span>  Privacy Policy</span>

                            </li>
                            <li>
                                <span> Terms & Condition</span>

                            </li>
                            <li>
                                <span>  Contact</span>

                            </li>

                        </ul>
                    </div>

                </div>

            </div>
            <div className={`${style.second_footer} row`}>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-end'>
                    <div className={style.firts_div}>
                        <p>
                            Scrap Buddy © 2023 Copyright, All Right Reserved
                        </p>
                    </div>

                </div>
                <div className='col-md-6  d-flex align-items-center justify-content-end'>

                    <div className={style.second_div}>
                        <p>Follow us : </p>
                        <div className={style.ul_list}>
                            <ul>
                                <li>
                                    <Image src="/facebook.svg" width={30} height={30} alt="img" />
                                </li>
                                <li>
                                    <Image src="/innsta.svg" width={30} height={30} alt="img" />
                                </li>
                                <li>
                                    <Image src="/linkedin.svg" width={30} height={30} alt="img" />
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FooterComponent