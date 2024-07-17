/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import IMG1 from "./img3.jpg"
import IMG2 from "./img2.jpg"
import IMG3 from "./img4.jpg"

function ModelsComponent({ refProp }) {
  return (
    <div ref={refProp} id="models">
     <div className="container-fluid  vh-100">
      <div className="row justify-content-center">
        <div className="col-10 text-center my-5">
          <h1>Our Ai Models</h1>
        </div>
      </div>
      <div className="box row justify-content-center">

        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card  text-light">
          <div className='img-size'>
              <img src={IMG1} className="card-img-top" alt="All purpose" />
              <div className="badge bg-primary position-absolute top-0 start-0 m-2">#trends</div>
            </div>
            <div className="card-body">
              <span className='font-s'> All purpose</span>
              <div className='mtop2'>
              <h3> <b>Model #99663</b></h3>
              </div>
              <a href="#" className="btn btn-outline-light mtop2">Know more →</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card  text-light">
          <div className='img-size'>
            <img src={IMG2} className="card-img-top" alt="Fitness" />
            <div className="badge bg-primary position-absolute top-0 start-0 m-2">#news</div>
            </div>
            <div className="card-body">
              <span className='font-s'> Fitness </span>
              <div className='mtop2'>
              <h3> <b>Model #99803</b></h3>
              </div>
              <a href="#" className="btn btn-outline-light mtop2">Know more →</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card  text-light">
          <div className='img-size'>
            <img src={IMG3} className="card-img-top" alt="Lifestyle" />
            <div className="badge bg-primary position-absolute top-0 start-0 m-2">#trends</div>
            </div>
            <div className="card-body">
            <span className='font-s'> Lifestyle</span>
              <div className='mtop2'>
              <h3> <b>Model #99900</b></h3>
              </div>
              <a href="#" className="btn btn-outline-light mtop2">Know more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ModelsComponent;
