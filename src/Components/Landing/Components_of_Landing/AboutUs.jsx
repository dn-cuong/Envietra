
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
        image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/427904500_1505466320004651_7803900000192852954_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGNwP6Mi2zjIRqNqwXgRB8Dn5xkRwBnkASfnGRHAGeQBFUTycC0Ld25wBMDlOeWq_yanX5YbC4p3mIL118wk4_D&_nc_ohc=EMxT2DdLI0UQ7kNvgFpGJqa&_nc_ht=scontent.fhan5-2.fna&oh=00_AYDCT8XD78yZ4IpFgA1ZnLlKoHQ5fJpV2mm2iigevGHt2Q&oe=664D3CC6"
    },
    {
        id: 3,
        name: "Ngoc Anh Nguyen",
        position: "Co-Founder",
        image: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-1/436205999_1623708561697635_6561967270179891105_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_0hhZ50J0QcL4kPh-9CUCeB3k4RCZIld4HeThEJkiV0WtK2YxdqSis-o_0G2Yo1DUrkZ-LmTPhCpRP673JsSI&_nc_ohc=dXmGJPr781IQ7kNvgHO9PPn&_nc_ht=scontent.fhan5-9.fna&oh=00_AYD5O5sfuz0t1gsv93NJR5N8bB43P16QHQdtwZN5HKVDuQ&oe=664D2AAD"
    },
    {
        id: 4,
        name: "Bao Anh",
        position: "Co-Founder",
        image: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/415561934_285224797867318_7355375329849631163_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGVTptm147uhJB84HR70XYyKCbzO98lZHQoJvM73yVkdDiBiHvWghk9jtVBAmjUD5nnHOH06TFI8NAr-I8PO-9R&_nc_ohc=FssQ-DZVhQwQ7kNvgEMmLpg&_nc_ht=scontent.fhan5-6.fna&oh=00_AYBJaeYGZMuyK5YTtwj61zJ19xtTJmVKNXloGwy0ENaNVA&oe=664D4067"
    },
    {
        id: 5,
        name: "Minh Tuan",
        position: "Co-Founder",
        image: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/421211316_3282517675384865_1425461903318666638_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHs1yHnvADv-pJhPsjWGWBUsS1QyCizqcaxLVDIKLOpxi3XR7eOrJSJqBhrCbSbyMUShDtAEVsS9yrzP8iwnLZO&_nc_ohc=8tAc7FXvEMIQ7kNvgEoZIgL&_nc_ht=scontent.fhan5-8.fna&oh=00_AYCuQBUbqTxRgdkhpWs9BSX2h2S0GnNr4bvrw3zB1XFVew&oe=664D5001"
    },{
        id: 6,
        name: "Mít",
        position: "Co-Founder",
        image: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/430330386_1130942858325562_1687122493704993605_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5nNZSfPll3xcdx_5ZPcKRA2r7Pd3j98EDavs93eP3wTvVVw-1w-eOSrbRhRS6kbKWpNxOE_14BMMQWE5ruGWs&_nc_ohc=K2lvElPrKJkQ7kNvgEA8tP9&_nc_ht=scontent.fhan5-8.fna&oh=00_AYDJxVbepdfBFWleNWGTZ8ShD_QlTgTlucbrr08CEOdqZA&oe=664D3AB1"
    }

];

function AboutUs() {
    return (
        <div className='container'>
            <div className='leftPart'>
            <div className='img-container'>
                    <img src='./src/assets/asdf.png' alt="" />
                </div>
                <div className="leftPart-content">
                    <p className="title">VLOCALS <br />TEAM</p>
                    <p className='content'>A non-profit organization (NPO) that supports and links the Homestay chain to provide green services, imbued with local elements, through supporting the Marketing and Information Technology teams.</p>
                    
                </div>
                
            </div>
            <div className='rightPart'>
                <div><p className="title">VLOCALS PEOPLE</p></div>
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