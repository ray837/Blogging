import React from 'react'
import './OntheBlog.css'
import { useNavigate} from 'react-router-dom';

function OnTheBlog() {
    const navigate = useNavigate();
  return (
    
       
            <div className='Blog'>
            
            <h1 className='title'>On&nbsp;The&nbsp;Blog</h1> 
            {/* <hr></hr> */}
   <div id="features">
    <div id="first_feature">
<div id="image_holder">
    
</div>
<h4>Garbage Collector<span>NEW</span></h4>
<p>How Garbage collectors revolutionised memory mangement</p>
    </div>
    <div id="second_feature">
<h2>Think</h2>
<h3>Never stop <br /></h3>
<h2>Learning!</h2>
<p>A mind once stretched by a new idea never returns to its original dimensions.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Oliver Wendell</p>
    </div>
    <div id="third_feature">
    <div id="image_holder2">
    
    </div>
    <h4>BlueScreen Death<span>NEW</span></h4>
    <p>How a simple programming mistake caused system outage accross globe.</p>
    </div>

</div>
           <section  onClick={()=>navigate('/Technology')} >
            <div className='Technology'>
                <div className='left-text'>
                <h1 className='tech-title'style={{height:'20px'   }}>Technology | Automation </h1>

                <p className='tech-text'> In today’s fast-paced world, staying updated with the latest technological advancements is not just beneficial—it’s essential, especially for those in the tech domain. Technology evolves rapidly, and understanding how new tools, systems, and innovations function can give you a significant edge in your career."Technology" category simplifies complex concepts, breaking them down into relatable and actionable insights.<span id='secondpara'>With clear interpretations from our authors, you’ll gain a deeper understanding of how things work and how they can be applied to real-world scenarios. As a tech professional, staying informed is crucial to navigating industry trends and overcoming competition in an ever-changing landscape. </span></p>
                 </div>
                <div className='tech-image'> </div>
                

            </div>
            </section>
            <section  >
                <div className='title_holder'>
            <h1 className='tech-title'style={{height:'20px' ,padding:"20px"}}>Lifestyle | Health </h1>
            
            </div>
            <div className='Second-Outer' >
            <div className='Second-left' onClick={()=>navigate('/Lifestyle')}>
                <div className='Left_Top'>
                    <div className='Inner_Left'>
                      
                    </div>
                    <div className='Inner_right'>
                   <p> A healthy lifestyle is key to maintaining physical and mental well-being. It includes balanced nutrition, regular exercise, adequate sleep, stress management, and healthy habits. Our "Health" section simplifies these concepts, offering insights into how mindful choices can transform your overall health. Staying informed helps you not only prioritize your well-being but also tackle challenges with confidence in a fast-paced world. </p>
                    </div>

                </div>
                <div className='Left_Bottom'>
                <div className='bottom_left'>
                        <p>A healthy lifestyle not only boosts energy levels and reduces the risk of chronic diseases but also improves mood, mental clarity, and longevity. Adopting a holistic approach to well-being can lead to a more fulfilling and vibrant life.</p>

                    </div>
                    <div className='bottom_right'>
                      
                    </div>
                    
                </div>

                </div>
                

                <div className='Second-right' onClick={()=>navigate('/Travel')}>
                <h1 className='tech-title'style={{  textAlign:'center'}}>Travel </h1>
                    <div className='right_image'>

                    </div>
                    <div className='right_text'>
                    <p>Travel is an exciting way to explore new places and learn about different cultures. It can be for fun, adventure, or work, and it helps people break away from their usual routines. When you travel, you get to see new landscapes, try different foods, and experience traditions that are different from your own. </p>

                    </div>

                </div>
                </div>
                </section>

            <section onClick={()=>navigate('/Philosophy')}>
                
            <div className='Technology'>
          
                <div className='left-text'>

                <h1 className='tech-title' style={{height:'20px', width:'100vw'}} >Philosophy | Ideas </h1>
                <div className='philo-image'> </div>
                </div>
                
                 

<p className='tech-text' style={{marginTop:'120px'}} id="philo"> Philosophy explores profound questions about life, knowledge, values, and existence. It encourages us to think critically about ideas like truth, morality, and the nature of reality. Philosophers often ask questions such as "What is the meaning of life?" or "What is the right way to live?" to better understand the world and our role within it. <span id='secondpara'>This field covers a wide range of ideas—from ethical principles that guide our actions to metaphysical concepts about what lies beyond the physical world, and even questions about how we gain knowledge. It offers a deeper perspective on life and challenges us to think in new ways.</span> </p>






               
                

            </div>
            </section>

           {/* <section>
           <div className='title_holder'>
            <h1 className='tech-title'style={{height:'20px', width:'60vw'}}>Eatables | Food </h1>
            <h1 className='tech-title'style={{height:'20px', width:'40vw', textAlign:'center'}}>Tech-Case Studies </h1>
            </div>
            
            <div className='container1'>
                <div className='left_container'>
                    <div className='left_con_image'>
                    </div>
                    
                    <div className='right_con_text'>
                      <p> Food is essential for sustaining life, providing the nutrients and energy our bodies need to function. It includes a wide variety of items that are consumed for nourishment, enjoyment, and cultural traditions.<br/> Eatables, or edible items, are foods that are safe and suitable for consumption. These can range from simple ingredients like bread and vegetables to more complex dishes like soups, stews, or international cuisines. People enjoy food not only for its nutritional value but also for its ability to bring people together, celebrate special occasions, and provide comfort. Food can be enjoyed in countless forms—raw, cooked, baked, grilled, or fried—and often reflects the cultural identity and traditions of different regions or countries</p>
                      
                    </div>
                    
                </div>
               

               
                
                
                <div className='right_container'>
                    <div className='right_con_image'>

                    </div>
                    <div className='left_con_text'>
                    <p>Technology-related case studies focus on real-world examples of how technology is applied to solve problems, improve processes, or drive innovation across various industries. These case studies often highlight challenges faced by organizations, the technologies they adopted, and the outcomes achieved.</p>

                    </div>
                </div>
                </div>
           
           </section> */}

         <section id="third">
                <div className='title_holder'>
            
           
            </div>
            <div className='Second-Outer'>
            <div className='Second-right' onClick={()=>navigate('/Food')}>
            <h1 className='tech-title'style={{height:'20px', marginLeft:'20px'}}>FINANCE </h1>
                
                <div className='finance_image'>

                </div>
                <div className='right_text'>
                <p> Finance is essential for managing money, from daily expenses to long-term goals like education or retirement. Yet, personal finance is rarely taught in schools, leaving many unprepared to handle their finances wisely. Our "Finance" section simplifies topics like budgeting, saving, and investing, making them easy to understand. These blogs help you take control of your money and make smarter financial decisions for a secure future. </p>
            </div>

            </div>
            <div className='Second-left'style={{borderLeft: '1px solid #333333',borderRight:'none', paddingLeft:'20px'}} onClick={()=>navigate('/Case Studies')}>
            <h1 className='tech-title'style={{  textAlign:'center'}}>Science & Curiosity</h1>
                <div className='Left_Top'>
                    <div className='science_image'>
                      
                    </div>
                    <div className='Inner_right'>
                    <p>Technology-related case studies focus on real-world examples of how technology is applied to solve problems, improve processes, or drive innovation across various industries. </p>

                    </div>

                </div>
                <div className='Left_Bottom'>
                <div className='bottom_left'>
                        <p>These case studies often highlight challenges faced by organizations, the technologies they adopted, and the outcomes achieved.These case studies often highlight challenges faced by organizations, the technologies they adopted, and the outcomes achieved</p>
                    </div>
                    <div className='curious_image'>
                      
                    </div>
                    
                </div>

                </div>
                

               
                </div>
                </section>

          
        </div>
        
    
  )
}

export default OnTheBlog
