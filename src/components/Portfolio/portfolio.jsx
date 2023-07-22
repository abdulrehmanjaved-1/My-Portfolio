import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/image1.png'
import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/image3.jpg'
import IMG4 from '../../assets/image4.jpg'
import IMG5 from '../../assets/image5.jpg'
import IMG6 from '../../assets/image6.jpg'

const data=[
  {
    data: 1,
    Image: IMG1,
    title: 'Blogify-BloggingApp With complete Authentication & Autherization',
    github: 'https://github.com/abdulrehmanjaved-1/Blogging-App',
    demo: 'https://dribble.com'
  },
  {
    data: 2,
    Image: IMG2,
    title: 'ToDo-You can List & Plan Your Day With It',
    github: 'https://github.com/abdulrehmanjaved-1/Vanilla-JS-Project',
    demo: 'https://dribble.com'
  },
  {
    data: 3,
    Image: IMG3,
    title: 'ZipMaker-Compress your Files With Streaming & Clusters',
    github: 'https://github.com/abdulrehmanjaved-1/PipeLines',
    demo: 'https://dribble.com'
  },
  {
    data: 4,
    Image: IMG4,
    title: 'News-App Watch & Read All Daily Articles On Any News Catagory',
    github: 'https://github.com/abdulrehmanjaved-1/News-App',
    demo: 'https://dribble.com'
  },
  {
    data: 5,
    Image: IMG5,
    title: 'Ecommerce-In Progress',
    github: 'https://github.com/abdulrehmanjaved-1/Redux',
    demo: 'https://dribble.com'
  },
  {
    data: 6,
    Image: IMG6,
    title: 'Check My All Projects',
    github: 'https://github.com/abdulrehmanjaved-1',
    demo: 'https://dribble.com'
  }


]

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,Image,title,github,demo})=>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-sta">
          <a href={github} className="btn" target="_blank">
            Github
          </a>
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  );
}

export default portfolio;
