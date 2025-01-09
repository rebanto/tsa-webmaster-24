import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide"
data-bs-ride="carousel"  width="100%">
        <div class="carousel-inner">
          <div class="carousel-item active c-item">
            <img src="/images/bruschetta.jpg" class="d-block w-100
c-img" alt="na"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first
slide.</p>
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src="/images/bruschetta.jpg" class="d-block w-100
c-img" alt="na"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the
second slide.</p>
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src="/images/bruschetta.jpg" class="d-block w-100
c-img" alt="na"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third
slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" type="button"
data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left"
aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" type="button"
data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right"
aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>

      <div class="container">
        <div class="row gy-5">
          <div class="col-6 p-3 fs-5 border bg-light">
            <p>Hello</p>
            <p>Contact Info</p>
            <p>Number</p>
          </div>
          <div class="col-6">
            <p class="p-3 fs-5 border bg-light">Another Hello</p>
          </div>
        </div>
        <div class="row gy-2">
          <div class="col-6 p-3 fs-5 border bg-light">
            <p>Hello</p>
            <p>Contact Info</p>
            <p>Number</p>
          </div>
          <div class="col-6">
            <p class="p-3 fs-5 border bg-light">Another Hello</p>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Home;