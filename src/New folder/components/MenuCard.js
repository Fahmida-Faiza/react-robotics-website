import React from 'react'

const MenuCard = ({menuData}) => {
  return (

    <>
    <section className="main-card--cointainer">
{menuData.map((curElem)=>{
    return (
      <>
        <div className="card-container" key={curElem.id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">
                {curElem.id}
              </span>
              <span className="card-author subtitle">{curElem.name}</span>
              <h2 className="card-title"> {curElem.category}</h2>
              <span className="card-description subtitle">
                {curElem.description}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet, optio dolorum, qui pariatur sint error doloremque
                provident, necessitatibus corporis beatae quod quo? Sequi,
                facere veniam? Omnis magnam iste rem unde.
              </span>
              <div className="card-read"></div>
            </div>
            {/* <p>Price :{curElem.price}</p> */}
            <img src={curElem.image} alt="images" className="card-media" />
            {/* <span className="btn btn-primary">Read More</span> */}
            <button type="button" class="btn btn-danger">
              Read More
            </button>
          </div>
        </div>
      </>
    );



})}




</section>





    
    </>
  );
}

export default MenuCard