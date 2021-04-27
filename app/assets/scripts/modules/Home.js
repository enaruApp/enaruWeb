import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <h1 className="large-hero__title">НЭГ ТӨСӨЛ НЭГ ХӨГЖИЛ</h1>
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

        <section id="about">
          <div className="about-img">
            <picture>
              <source
                srcset="./assets/images/aboutEnaru.jpg"
                media="(min-width: 640px"
              />
              <img src="./assets/images/aboutSmall.png" alt="about" />
            </picture>
          </div>
          <div className="about-text">
            <h1 className="about-title">Эрхэм зорилго</h1>
            <p className="about-desription">
              Хамтын хариуцлагатай, олон хэвшилт өмчийн төлөвлөгөөт эдийн
              засагтай, оюун ухаан мэдлэгээр голлосон дэлхийн Монгол иргүнийг
              боловсруулж, өрх бүл айлын тогтолцоотой, байгаль нийхэмийн
              зохистой харилцаатай тусгаар таван тогтнолыг эрхэмлэсэн төвшин
              сайхан энхийн орныг эв хамтаар цогцлуулан мандуулах эрхэм
              зорилготой.
            </p>
          </div>
          <div className="about-text">
            <h1 className="about-title">Нэгдэлийн тухай</h1>
            <p className="about-desription">
              Үндэсний аж төрөхүйн ухааны онолоор баялаг бүтээгч, хөрөнгө
              оруулагчдыг нэгтгэж үндэсний их бүтээн байгуулалт хийх зорилготой,
              өрх бүл, гал айлын тогтолцоот засаглалыг бий болгосон иргэдийн
              нэгдэл юм.
            </p>
            <div className="group-button">
              <a href="#" class="btn">
                Дэлгэрэнгүй
              </a>
              <a href="#" class="btn open-modal">
                Бүртгүүлэх
              </a>
            </div>
          </div>
        </section>

        <section id="video-container">
          <section id="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_DOCkjkczVk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
        </section>

        <section id="info">
          <h1 class="infotitle">ОНЦЛОХ ҮЙЛ ЯВДАЛ</h1>

          <div class="items">
            <div class="item">
              <h3 class="eventname">Инару нэгдлийн шинэ гишүүд</h3>
              <img
                src="./assets/images/event2.jpg"
                width="100px"
                height="100px"
                alt="event"
              />
              <p class="eventdate">2021.04.09-ны 19 цагт</p>
              <p class="eventdescription">
                Инару нэгдэлд үзэл санаа болон үйл хэргээрээ хамтрах дэмжигч,
                бүтээлч гишүүд, өрх бүлүүдийг батламжлах гуравдах удаагийн
                ёслолын арга хэмжээ боллоо.
              </p>
            </div>

            <div class="item">
              <h3 class="eventname">Инару нэгдлийн тэргүүн Б.Оюунмаа</h3>
              <img
                src="./assets/images/event4.jpg"
                width="100px"
                height="100px"
                alt="event"
              />
              <p class="eventdate">2021.04.16-ны 19 цагт</p>
              <p class="eventdescription">Инару нэгдлийн бодлогын сургалт</p>
              <p class="eventdescription">1. Бүлхэмийн тухай ойлголт</p>
              <p class="eventdescription">
                2. Инару нэгдлийн гишүүдийг бүлхэмд хуваарилсан байдал
              </p>
              <p class="eventdescription">3. Гишүүдийн санал асуулга</p>
            </div>

            <div class="item">
              <h3 class="eventname">Инару нэгдлийн шинэ гишүүд</h3>
              <img
                src="./assets/images/event1.jpg"
                width="100px"
                height="100px"
                alt="event"
              />
              <p class="eventdate">2021.04.23нд 19 цагт</p>
              <p class="eventdescription">
                "ИНАРУ НЭГДЛИЙН ҮНЭТ ЗҮЙЛ, ЭРХЭМ ЗОРИЛГО"
              </p>
              <p class="eventdescription">
                Инару нэгдлийн стратеги төлөвлөгөө, үйл ажиллагааны чиглэл,
                дэлхийн монгол иргүний хөгжлийн хөтөлбөр танилцуулах болно.
              </p>
            </div>

            <div class="item">
              <h3 class="eventname">Инару нэгдлийн гишүүд</h3>
              <img
                src="./assets/images/event3.jpg"
                width="100px"
                height="100px"
                alt="event"
              />
              <p class="eventdate">2021.04.27-28нд 19 цагт</p>
              <p class="eventdescription">
                "НЭГ ТӨСӨЛ НЭГ ХӨГЖИЛ" Онлайн арга хэмжээ
              </p>
              <p class="eventdescription">
                Хамтын эко төсөл хэрэгжүүлэх, үндэсний аж төрөхүйн ухааны
                онолоор хамтын бүтээн байгуулалт хийх бүх монголчууддаа
                зориулав.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
