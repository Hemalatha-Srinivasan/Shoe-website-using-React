import React from 'react';
import './Header.css'; 
import img2 from "./asset/img2.jpg"
import img4 from "./asset/img4.jpg"
import img1 from "./asset/img1.jpg"
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="white-box">
        <center>
        <h2>Our Products</h2></center>
        <p>
        <h4>MEN’S SHOES</h4>
        <img className='img2' src={img2} alt="img" />
There are many collections of men’s casual shoes as well as formal, ethnic, sports and party wear styles. These feature moccasins, loafers, sandals and floaters, slippers and flip flops, sneakers, boots and Kolhapuri chappals available in a range of sizes.


<h4>WOMEN’S SHOES</h4>
<img className='img4' src={img4} alt="img" />
The assortment of women’s footwear features different styles of formal, casual, party, wedding, ethnic and sports shoes. In addition, this massive selection offers sandals, ballerinas, pumps, loafers, peep toes, sneakers, boots, and e thnic shoes with different types of heels.

<h4>KIDS’ SHOES</h4>
<img className='img1' src={img1} alt="img" />
The kids’ collection features formal, casual and school shoes. For boys, we offer sandals, moccasins, loafers, derby and sneakers. Our shoes for girls include sandals, slippers, sneakers and ballerinas.</p>
<br></br><br></br>
      Sport Your Pair of Metro Shoes Pick your pair of Metro Shoes to ace the style game. Here’s how!

<h5>1. Casual Wear</h5>

<p>Men: Trendy sneakers go well with jeans and T-shirts to style and comfort their everyday fashion.</p>
<p>
Women: Pretty flats and ballerinas offer comfort and versatility that look great with ethnic and western casual wear.</p>

<h5>2. Formal Wear</h5>

<p>Men: Formal shoes in black, brown and other basic colours go well with shirts, trousers and blazers.</p>

<p>Women: Flat sandals as well as heels like block, wedge and kitten heels, can be paired with ethnic and western workwear.</p> 

<h5>3. Party & Festive Wear</h5>

<p>Men: Metro Shoes’ classy formal shoes or loafers pair well with western and ethnic wear for parties and Indian festive or wedding celebrations.</p>

<p>Women: Select from pumps, stilettos, peep toes and some Indian style footwear for parties depending on your outfits. The options for each style are plenty!</p>

<h5>4. Boys</h5>

<p>Boys can wear a pair of colourful sneakers with their trackpants and T-shirts or slip into casual open toe sandals to pair with shorts and a shirt. For formal events, boys can wear moccasins with a suit or even ethnic attire.</p>

<h5>5. Girls</h5>

<p>Girls can wear pretty open-toe sandals in eye-catching colours with their jeans and top or even opt for flat ballerina shoes to go with a floral dress. For formal occasions, Metro Shoes offers elegant platform sandals that are safe for girls to wear with western dresses and ethnic wear alike.</p>
      </div>
    </div>
  );
};

export default About;
