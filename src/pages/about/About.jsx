import Header from "../../components/Header";
import HeaderImage from  "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import './about.css';


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        lorem ipsum dolor sit t consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our  Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our  Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit enim corporis velit eveniet magnam, placeat reprehenderit suscipit temporibus ratione qui, recusandae repudiandae nisi voluptatibus consectetur labore cumque neque. Laborum doloremque, optio, expedita deleniti explicabo dignissimos cupiditate dolor inventore perferendis quis aperiam. Vel, aspernatur minus molestias eligendi dolor et voluptatem ad.
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>

      
    </>
    )
}

export default About;