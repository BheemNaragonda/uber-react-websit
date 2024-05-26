import './Home.css';
import Language from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';





function Home(){
    const navigate = useNavigate();

    let cardDetailsList = [
        {
            cardId: 1,
            cardImageUrl:"/U_CoastalCalifornia_White_Final-(1).webp",
            cardTitle:"Ride Options",
            cardDescription:"There’s more than one way to move with Uber, no matter where you are or where you’re headed next.",
            cardButtonText:'Search ride options'
    },
    {
        cardId: 2,
        cardImageUrl:"/Airport-rides.webp",
        cardTitle:"700+ airports",
        cardDescription:"You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.",
        cardButtonText:'Search airports'
    },
    {   cardId: 3,
        cardImageUrl:"/SS_Commuter.webp",
        cardTitle:"10,000+ cities",
        cardDescription:"The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
        cardButtonText:'Search cities'
    }];

    const UberCards = (props)=>{
        const { cardDetails } = props;
        const { cardImageUrl, cardTitle, cardDescription, cardButtonText } = cardDetails;
        
        return(
            <div className='uber-features-card'>
                <img src={cardImageUrl} className='uber-features-card-image' alt="U_CoastalCalifornia_White_Final-(1)" />
                <h1 className='uber-features-card-title'>{cardTitle}</h1>
                <p className='uber-features-card-description'>{cardDescription}</p>
                <button className='uber-features-card-button'>{cardButtonText}</button>
            </div>
        )
    }

    const handleNavigate = ()=>{
        navigate("/");
    }
   


    return (
        <div className='container'>

            {/*Main header */}
            <header>
                <div className='heading1-part1'>
                    <span className='uber-text'>Uber</span>
                    <nav>
                        <ul>
                            <li>Ride</li>
                            <li>Drive</li>
                            <li>Business</li>
                            <li>Uber Eats</li>
                            <li>About us
                                <select className='about-dropdown' id="" name=""></select>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul>
                        <li><span><Language className='lang-icon' style={{ width: '15px', height: 'auto', verticalAlign: 'top' }} /></span><span className=''>EN</span></li>
                        <li>Help</li>
                        <li className='sign-up-element'><button className='logout-button' onClick={handleNavigate}>Log out</button></li>
                    </ul>     
                </nav>
            </header>

        {/* second header */}


            <header className='second-header sticky'>
                <div>
                    <span className='uber-text mr-88 ride-text'>Ride</span>
                </div>
                <nav>
                    <ul className='ride-list'>
                        <li>Request a ride</li>
                        <li>Reserve a ride</li>
                        <li>See prices</li>
                        <li>Explore ride options</li>
                        <li>Airport rides</li>
                        
                    </ul>
                </nav>
                
            </header>

        {/* Banner section */}
            <div className='banner-section'>
                <div className='banner-text-container'>
                    <p className='banner-text'>Always the ride you want</p>
                    <p className='banner-text-1'>Request a ride, hop in, and go.</p>
                    <form>
                        <div>
                            <input 
                                type="text" 
                                id="location" 
                                value='' 
                                placeholder="Enter location" 
                                className='banner-inputfield'
                            />
                            
                        </div>
                        <div>
                            <input 
                                type="text" 
                                id="distinction" 
                                value='' 
                                placeholder="Enter destination"
                                className='banner-inputfield' 
                            />
                        </div>
                        <div className='d-flex'>
                        <button className='button mr-15'>See prices</button>
                        <button className='button button-schedule'>Schedule for later</button>
                        </div>
                    </form>
                </div>
                <img src="/banner-image.webp" className='banner-image' alt="banner" />
            </div>

            {/* Ride with friends section */}

            <div className='ride-with-friends-section'>
                <img src="/landing-stops-group-rides.webp" className='ride-image' alt="landing-stops-group-rides" />
                <div className='ride-with-friends-text-container'>
                    <p className='ride-with-friends-text'>Ride with friends seamlessly</p>
                    <p className='ride-with-friends-text-1'>Riding with friends just got easier: set up a group ride in the Uber app, invite your friends, and arrive at your destination. Friends who ride together save together.</p>
                    <a href='#' className='ride-learn-more'>Learn more</a>
                </div>
            </div>

            {/* Uber features */}
            <div className='uber-features-section'>
                <div>
                    <h1 className='uber-features-text'>Use the Uber app to help you travel your way</h1>
                    <div className='uber-features-cards'>
                        {cardDetailsList.map(card =>{
                            return(
                                <UberCards cardDetails ={card} key={card.cardId}/>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Business solution*/}

            <div className='business-solution-section'>
                
                <div className='ride-with-friends-text-container'>
                    <p className='ride-with-friends-text'>Looking for business solutions?</p>
                    <p className='ride-with-friends-text-1'>Get information about how companies leverage <a href='#' className='anchor-color'>Uber for Business:</a></p>
                    <ul>
                        <li><a href='#'  className='anchor-color'>Business travel</a></li>
                        <li><a href='#'  className='anchor-color'>Courtesy rides</a></li>
                        <li><a href='#'  className='anchor-color'>Meal programs</a></li>
                        <li><a href='#'  className='anchor-color'>Item delivery</a></li>
                    </ul>
                    <div>
                        <button className='button button-schedule mr-15'>Get started</button>
                        <span><a href='#'  className='anchor-color'>Check out solutions</a></span>
                    </div>
                </div>
                <img src="/U4B_Spot_U4BWebsite.webp" className='ride-image' alt="landing-stops-group-rides" />
            </div>

            {/* Frequently Asked Section*/}
            <div className='frequent-container'>
                <div>
                    <h1>Frequently asked questions</h1>
                    
                    <ul className='frequent-ulist'>
                        <li className='borderBottom pt-5 pb-5'><span className='mr-703 '>Can I have a lost item delivered to me?</span>
                            <KeyboardArrowDownIcon style={{ width: '25px', height: 'auto', verticalAlign: 'top' }}/>
                        </li>
                        <li className='borderBottom pt-5 pb-5'><span className='mr-774'>Can I rent a car using Uber?</span>
                            <KeyboardArrowDownIcon style={{ width: '25px', height: 'auto', verticalAlign: 'top' }}/>
                        </li>
                        <li className='borderBottom pt-5 pb-5'><span className='mr-548'>Can I request a ride that picks up friends in different locations?</span>
                            <KeyboardArrowDownIcon style={{ width: '25px', height: 'auto', verticalAlign: 'top' }}/>
                        </li>
                        <li className='borderBottom pt-5 pb-5'><span className='mr-767'>Can I request a taxi on Uber?</span>
                            <KeyboardArrowDownIcon style={{ width: '25px', height: 'auto', verticalAlign: 'top' }}/>
                        </li>
                        <li className='borderBottom pt-5 pb-5'><span className='mr-688'>Is there an Uber ride option for 5 people?</span>
                            <KeyboardArrowDownIcon style={{ width: '25px', height: 'auto', verticalAlign: 'top' }}/>
                        </li>
                    </ul>
                </div>
            </div>

            {/* More apps section */}
            <div className='apps-container'>
                <div className='app-div-position'>
                    <h1>Do more in the app</h1>
                    <div className='apps-text-container'>
                        <img src="/QR-code.webp" className='QR-image' alt="QR-code" />
                        <div className='apps-text'>
                            <p className='apps-text-p1'>Download the Uber app</p>
                            <p className='apps-text-p2'>Scan to download</p> 
                        </div>
                        <ArrowForwardIcon style={{ width: '20px', height: 'auto', verticalAlign: 'top' }} />
                    </div>
                </div>
            </div>

            {/* Sign up ride */}
            <div>
                <div className='sign-up-container'>
                    <div className='sign-up-text-and-icon sign-up-border-bottom mb-100'>
                        <p className='sign-up-text1 mr-200'>Sign up to ride</p>
                        <ArrowForwardIcon style={{ width: '40px', height: 'auto', verticalAlign: 'top' }} />
                    </div>
                    <p className='sign-up-text2'>Certain requirements and features vary by country, region, and city.</p> 
                </div>
               
            </div>

            {/* footer section */}
            <div className='footer-section'>
                <div className='custom-top-container'>
                    <h1>Uber</h1>
                    <p>Visit Help Center</p>
                </div>
                <div class="custom-container">
                    <ul class="custom-list">
                        <li><strong>Company</strong></li>
                        <li>About us</li>
                        <li>Our offerings</li>
                        <li>Newsroom</li>
                        <li>Investors</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>AI</li>
                        <li>Gift cards</li>
                    </ul>
                    <ul class="custom-list">
                        <li><strong>Products</strong></li>
                        <li>Ride</li>
                        <li>Drive</li>
                        <li>Deliver</li>
                        <li>Eat</li>
                        <li>Uber for Business</li>
                        <li>Uber Freight</li>
                    </ul>
                    <ul class="custom-list">
                        <li><strong>Global citizenship</strong></li>
                        <li>Safety</li>
                        <li>Diversity and Inclusion</li>
                        <li>Sustainability</li>
                    </ul>
                    <ul class="custom-list">
                        <li><strong>Travel</strong></li>
                        <li>Reserve</li>
                        <li>Airports</li>
                        <li>Cities</li>
                    </ul>
                </div>
                <div className='icons-container'>
                    <div>
                        <span className='mr-100'><FacebookIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /></span>
                        <span className='mr-100'><XIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /></span>
                        <span className='mr-100'><YouTubeIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /></span>
                        <span className='mr-100'><LinkedInIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /></span>
                        <span className='mr-100'><InstagramIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /></span>
                    </div>
                    <div>
                        <span className='mr-20'><Language className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /><span className='icon-text'>English</span></span>
                        <span><LocationOnIcon className='lang-icon' style={{ width: '18px', height: 'auto', verticalAlign: 'top' }} /><span className='icon-text'>Hyderabad</span></span>
                    </div>
                </div>
                <div className='images-container'>
                    <img src="/app-store-google-4d63c31a3e.svg" className='QR-image' alt="app-store-google-4d63c31a3e.svg" />
                    <img src="/app store.svg" className='QR-image' alt="app store.svg" />
                </div>
                <div className='footer-last-section'>
                    <p>&copy; 2024 Uber Technologies Inc.</p>
                    <ul>
                        <li>Privacy</li>
                        <li>Accessibility</li>
                        <li>Terms</li>
                    </ul>
                </div>
                
            </div>

        </div>
    )
}

export default Home;