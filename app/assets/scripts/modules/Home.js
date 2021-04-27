import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="large-hero">
          <div className="large-hero__logo">
            <picture>
              <source
                srcset="./assets/images/logoMedium.png"
                media="(min-width: 640px"
              />
              <img src="./assets/images/logoSmall.png" alt="logo" />
            </picture>
          </div>
          <div className="large-hero__text-content">
            <h1 className="large-hero__title">НЭГ ТӨСӨЛ - НЭГ ХӨГЖИЛ</h1>
            <p className="large-hero__description">
              Хамтын эко төсөл хэрэгжүүлэх, үндэсний аж төрөхүйн ухааны онолоор
              хамтын бүтээн байгуулалт хийх
            </p>
            <a href="#" class="btn">
              Дэлгэрэнгүй
            </a>
          </div>
          <div className="large-hero__image">
            <img src="./assets/images/showcase-small.jpg" alt="showcase" />
          </div>
        </section>
      </div>
    );
  }
}
