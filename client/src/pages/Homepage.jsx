import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../redux/Store';
import warrantyImg from '../assets/warranty.png';
import PriceTagImg from '../assets/price.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () =>{
    const IsMobileView = useSelector(state=>state.MobileView);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        ConfigureView();
        window.addEventListener('resize',ConfigureView);
    });
    const ConfigureView = () =>{
        if(window.innerWidth<=500){
            dispatch(Actions.setMobileView(true));
        }else{
            dispatch(Actions.setMobileView(false));
        }
    }
    return(
        <div className='row'>
            <Header/>
            <div className="col-12">
                <div className="row mainCon">
                    <div className={IsMobileView ? 'col-md-5 col-10 hmeLeft-mb' : 'col-md-5 col-10 hmeLeft'}>
                        <h1>Bring home beautiful interiors that fit your <span style={{color:"yellow"}}>budget!</span></h1>
                    </div>
                    <div className="col-md-3 hmeRight col-10">
                        {/* <div style={{display:'flex',flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                            <img src={ServiceImg} alt="in" width="40px" height="40px" className='mt-3'/>
                            <h3 className='text-center mt-4 pacifico serv'>Our Services</h3>
                        </div> */}
                        {/* <hr/> */}
                        <ul className='hme-ul'>
                            <li onClick={()=>{
                                navigate('/kitchen');
                            }}>Modular Kitchen</li>
                            <li onClick={()=>{
                                navigate('/bedroom')
                            }}>Bedroom Wardrobes</li>
                            <li onClick={()=>{
                                navigate('/tv');
                            }}>TV Unit</li>
                            <li onClick={()=>{
                                navigate('/wall')
                            }}>Wall Partitions</li>
                            <li onClick={()=>{
                                navigate('/crockery')
                            }}>Crockey Units</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 members">
                        <h1 className='mt-3'>Dream homes begin with dream designs.</h1>
                            <div className="hme-serCon mt-4">
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://super.homelane.com/designGallery/kitchen-165709021533316c963ff2ea7_stage.png" width="100%" alt="wardrobe"/>
                                <h6>Modular Kitchen</h6>
                                <p>Design your Modular Kitchen with Affordable Modular Kitchens with 1 Yr Warranty ...</p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://super.homelane.com/designGallery/bedroom-1657090215333fee0d8ac4e74_stage.png" alt="wardrobe" width="100%"/>
                                <h6>Bedroom Wardrobes</h6>
                                <p>Wardrobes come with two door styles — swing /hinged and sliding. Both the door types are preferred by people depending upon the space they have ...</p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://super.homelane.com/designGallery/livingroom-1657090215333b65475fdadb0_stage.png" alt="wardrobe" width="100%"/>
                                <h6>Tv Unit</h6>
                                <p>A well-crafted TV unit is an elegant piece of furniture on its own. A focal point of the living room furniture, the TV cabinet enhances the viewing experience. Our multifunctional TV cabinets are good for storage, display and utilize spaces better.</p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://super.homelane.com/wardrobes/16394698547170f7f64cd6915-HLKT00000760_resize-800x600_16-main.jpg" alt="wardrobe" width="100%"/>
                                <h6>Wall partitions</h6>
                                <p>A partition wall is a divider wall, typically non load bearing, used to separate spaces in residential, commercial, and industrial buildings. It's most common use is as an office partition wall used to create separate offices or meeting rooms.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12 offer">
                            <h4 className='text-center mt-4 p-1'>What We Offer</h4>
                            <div className="row d-flex justify-content-center" style={{gap:"10px"}}>
                                <div className="col-10 col-md-5 offLeft">
                                    <div style={{display:'flex',alignItems:"center",gap:"10px"}}>
                                        <img src={warrantyImg} width="40px" height="40px"/>
                                        <h6>Warranty</h6>
                                    </div>
                                    <li className='mt-3'>FLAT 1 Year Warranty Stay Worry-free with our warranty policy on modular products</li>
                                    <li className='mt-3'>Upto 3 months on site service warranty <br/> Warranty on  on-site services such as painting electrical, plumbing & more..</li>
                                </div>
                                <div className="col-10 col-md-5 offRight">
                                    <div style={{display:'flex',alignItems:"center",gap:"10px"}}>
                                        <img src={PriceTagImg} width="40px" height="40px"/>
                                        <h6>Price Benifits</h6>
                                    </div>
                                    <li className='mt-3'>Price-match guarantee - Price match to a valid quote in comparison with a branded player and for exact scope.</li>
                                    <li className='mt-3'>Flexible payment options payment schemes from leading financial partners. </li>
                                    <li className='mt-3'>No hidden costs - Transparent costing without last-minute additions..</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact">
                            <h2 className='text-center'>Connect With Us</h2>
                            <h6 className='mt-4 text-center'>Reach out on WhatsApp or give us a call for the best home design experience.</h6>
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"20px"}} className="pb-4">
                                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="whatsapp" width="30px" height="30px" className='mt-4'/>
                                    <h6 className='text-black mt-4'>+91 123456789</h6>
                                </div>
                                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                                    <img src="https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg" alt="whatsapp" width="30px" height="30px" className='mt-4'/>
                                    <h6 className='text-black mt-4'>infinity Creators</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 footer">
                            <h5 style={{padding:"15px",color:"white",textAlign:'center',fontSize:"16px"}}>© 2022 Infinity Creators All Rights Reserved.</h5>
                            <p>For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or 25%, whichever is higher interior designers in Pune , Pune interior designers in bangalore best interior designers in mumbai interior designers in hyderabad best interior designers in Hyderabad interior designers in chennai interior decorators in chennai best interior designers in chennai best interior designers in kolkata.. </p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Homepage;