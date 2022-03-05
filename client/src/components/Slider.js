import React from 'react';
import {Carousel} from 'react-bootstrap';
function Slider () {

    return (
        <div style={{ display: 'block',padding: 30 }}>
          <Carousel>

            <Carousel.Item interval={2000}>
              <img style={{height : 400}}
                className="d-block w-100"
    src="https://cdn.quotesgram.com/img/60/49/831210312-4.jpg"
              />
              <Carousel.Caption>
                {/* <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p> */}
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={2000}>
              <img style={{height : 400}}
                className="d-block w-100"
    src="https://quotefancy.com/media/wallpaper/3840x2160/15478-Margaret-Fuller-Quote-Today-a-reader-tomorrow-a-leader.jpg"
              />
              <Carousel.Caption>
                {/* <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            

            <Carousel.Item interval={2000}>
            <img style={{height : 400}}
                className="d-block w-100"
    src="https://www.theinspiringjournal.com/wp-content/uploads/2020/01/reading-books-quotes-on-reading-books.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
              />
              {/* <Carousel.Caption style={{color :'orange' ,marginBottom:5}}>
                <h3>Reading Books Makes You Live Longer!</h3>
                <p>A study at Yale University followed 3635 participants for 12 years and concluded that “Book readers had a 23-month survival advantage and experienced a 20% reduction in risk of mortality over the 12 years of follow-up compared to non-book readers.”</p>
              </Carousel.Caption> */}
            </Carousel.Item>

          </Carousel>
        </div>
      );
    
}
export default  Slider;




            