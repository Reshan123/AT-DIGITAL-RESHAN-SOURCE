import './App.css'
import Button from './components/Button/Button'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

import image2 from './Images/image 2.png'
import image1 from './Images/image 1.png'

function App() {
  

  return (
    <>
      <NavBar />

      <header>
        <div className="heroTextContainer">
          <div className="heroText">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</div>
          <Button className="heroSectionButton" buttonText="GET FREE CONSULTATION" />
        </div>
      </header>
      <div className="heroTextContainer">
        <div className="heroText">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</div>
        <Button className="heroSectionButton" buttonText="GET FREE CONSULTATION" />
    </div>
      

      <div className="middleContentSection">
        <div className="middleContentSectionImage">
          <img src={image2} alt="" />
        </div>
        <div className="middleContentSectionTextContainer">
            <div className="middleContentSectionTextContainerTitle">Web & Mobile App Development</div>
            <div className="middleContentSectionTextContainerBody">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</div>
            <Button className="middleContentSectionButton" buttonText="Learn More" />
        </div>
      </div>

      <div className="middleContentSection revserseFlow">
        <div className="middleContentSectionTextContainer">
            <div className="middleContentSectionTextContainerTitle">Digital Strategy Consulting</div>
            <div className="middleContentSectionTextContainerBody">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</div>
            <Button className="middleContentSectionButton" buttonText="Learn More" />
        </div>
        <div className="middleContentSectionImage">
          <img src={image1} alt="" />
        </div>
      </div>

        <div className="FAQContentContainer">
            <div className="FAQContentContainerTitle">Frequently asked questions</div>
            <div className="FAQListContainer">
                <FAQ id="first" defaultChecked={true} title="What is Webflow and why is it the best website builder?" body="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." />
                <FAQ id="second" defaultChecked={false} title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?" body="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." />
                <FAQ id="third" defaultChecked={false} title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?" body="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." />
            </div>
        </div>
      <Footer />
    </>
  )
}

export default App
