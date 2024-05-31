
import './AboutUs.css';
import Card from "./Card.jsx";

const cardsData = [
    {
        id: 1,
        name: "Hoang Kim Ngan",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"
    },
    {
        id: 2,
        name: "Pham Quynh Trang",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"
    },
    {
        id: 3,
        name: "Ngoc Anh Nguyen",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"
    },
    {
        id: 4,
        name: "Bao Anh",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"
    },
    {
        id: 5,
        name: "Minh Tuan",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"
    },{
        id: 6,
        name: "Mít",
        position: "Co-Founder",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/411776409_747334613482613_7531763387303287132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqFk50J7EY0LWd_kkfqfo65Mrt_Epqb6bkyu38Smpvpr-QY6WNJJhLnLwFeD9EvGG94W-CEL_24ak6el_Uhtcv&_nc_ohc=qvYUeBLQ0RcQ7kNvgHctxeR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG7FnDK-OUtlHyGGk_AUi2YnYvj022ap1h-5nL6ss1ClQ&oe=666EC0DD"

    }

];

function AboutUs() {
    return (
        <div className='aboutContainer'>
            <div className='leftPart'>
            <div className='img-container'>
                    <img src='./src/assets/asdf.png' alt="" />
                </div>
                <div className="leftPart-content">
                    <p className="title">ENVIETRA <br />TEAM</p>
                    <p className='content'>A non-profit organization (NPO) that supports and links the Homestay chain to provide green services, imbued with local elements, through supporting the Marketing and Information Technology teams.</p>
                    
                </div>
            </div>
            <div className='rightPart'>
                <div><p className="title">ENVIETRA PEOPLE</p></div>
                <p>A non-profit organization (NPO) that supports and links the Homestay chain to provide green services, imbued with local elements, through supporting the Marketing and Information Technology teams.</p>
                <div className="CardContainer">
                    {cardsData.map(card => (
                        <Card 
                            key={card.id}
                            image={card.image}
                            name={card.name}
                            position={card.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs