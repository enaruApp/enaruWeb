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
              <a href="#" class="btn">
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
          <h1 className="infotitle">ОНЦЛОХ ҮЙЛ ЯВДАЛ</h1>

          <div className="items">
            <div className="item">
              <h3 className="eventname">Инару нэгдлийн шинэ гишүүд</h3>
              <img src="./assets/images/event2.jpg" alt="event" />
              <p className="eventdate">2021.04.09-ны 19 цагт</p>
              <p className="eventdescription">
                Инару нэгдэлд үзэл санаа болон үйл хэргээрээ хамтрах дэмжигч,
                бүтээлч гишүүд, өрх бүлүүдийг батламжлах гуравдах удаагийн
                ёслолын арга хэмжээ боллоо.
              </p>
            </div>
            <div className="item">
              <h3 className="eventname">Инару нэгдлийн тэргүүн Б.Оюунмаа</h3>
              <img src="./assets/images/event4.jpg" alt="event" />
              <p className="eventdate">2021.04.16-ны 19 цагт</p>
              <p className="eventdescriptionTop">
                Инару нэгдлийн бодлогын сургалт
              </p>
              <p className="eventdescription">
                1. Бүлхэмийн тухай ойлголт 2. Инару нэгдлийн гишүүдийг бүлхэмд
                хуваарилсан байдал 3. Гишүүдийн санал асуулга
              </p>
            </div>
            <div className="item">
              <h3 className="eventname">Инару нэгдлийн шинэ гишүүд</h3>
              <img src="./assets/images/event1.jpg" alt="event" />
              <p className="eventdate">2021.04.23нд 19 цагт</p>
              <p className="eventdescriptionTop">
                "ИНАРУ НЭГДЛИЙН ҮНЭТ ЗҮЙЛ, ЭРХЭМ ЗОРИЛГО"
              </p>
              <p className="eventdescription">
                Инару нэгдлийн стратеги төлөвлөгөө, үйл ажиллагааны чиглэл,
                дэлхийн монгол иргүний хөгжлийн хөтөлбөр танилцуулах болно.
              </p>
            </div>
            <div className="item">
              <h3 className="eventname">Инару нэгдлийн гишүүд</h3>
              <img src="./assets/images/event3.jpg" alt="event" />
              <p className="eventdate">2021.04.27-28нд 19 цагт</p>
              <p className="eventdescriptionTop">
                "НЭГ ТӨСӨЛ НЭГ ХӨГЖИЛ" Онлайн арга хэмжээ
              </p>
              <p className="eventdescription">
                Хамтын эко төсөл хэрэгжүүлэх, үндэсний аж төрөхүйн ухааны
                онолоор хамтын бүтээн байгуулалт хийх бүх монголчууддаа
                зориулав.
              </p>
              <p></p>
            </div>
          </div>
        </section>

        <section id="cluster">
          <img src="./assets/images/cluster.jpg" alt="members" />
          <div className="cluster-text">
            <h1 className="cluster-title">КЛАСТЕРИЙН СИСТЕМ</h1>
            <p className="cluster-description">
              Кластер гэдэг нь тодорхой нэгэн салбарт ижил төрлийн үйл ажиллагаа
              явуулдаг, нэг нэгнийгээ харилцан нөхөж байдаг, газарзүйн хувьд
              хөрш зэргэлдээ оршдог, хоорондоо нягт харилцаатай компаниуд болон
              тэдгээртэй холбоотой байгууллагууд, хувь хүмүүсйн бүлэг юм. Жишээ
              нь: түүхий эд нийлүүлэгч, бэлтгэгч, боловсруулагч, борлуулагч,
              судалгаа шинжилгээний байгууллага, тээвэрлэлт логистикийн
              байгууллага, банк санхүүгийн байгууллага, хэвлэл мэдээлэл гэх мэт.
            </p>
            <a href="#" class="btn">
              Дэлгэрэнгүй
            </a>
          </div>
        </section>

        <section id="member">
          <img src="./assets/images/member.jpg" alt="members" />
          <h1 className="member-title">ГИШҮҮНЧЛЭЛ</h1>
          <div className="member-type">
            <div className="member-box">
              <img src="./assets/images/mem01.jpg" alt="members" />
              <div className="member-item">
                <p className="member-name">ДЭМЖИГЧ ӨРХ БҮЛ, ГИШҮҮН</p>
                <Link className="member-btn" to="/">
                  Гишүүнчлэлийн тухай
                </Link>
                <Link className="member-btn" to="/">
                  Өрх бүл бүртгүүлэх
                </Link>
                <Link className="member-btn" to="/">
                  Гишүүн бүртгүүлэх
                </Link>
              </div>
            </div>

            <div className="member-box">
              <img src="./assets/images/mem02.jpg" alt="members" />
              <div className="member-item">
                <p className="member-name">БҮТЭЭЛЧ ӨРХ БҮЛ, ГИШҮҮН</p>
                <Link className="member-btn" to="/">
                  Гишүүнчлэлийн тухай
                </Link>
                <Link className="member-btn" to="/">
                  Өрх бүл бүртгүүлэх
                </Link>
                <Link className="member-btn" to="/">
                  Гишүүн бүртгүүлэх
                </Link>
              </div>
            </div>

            <div className="member-box">
              <img src="./assets/images/mem03.jpg" alt="members" />
              <div className="member-item">
                <p className="member-name">НЭГДЛИЙН ЗАСАГЛАГЧ ГИШҮҮН</p>
                <Link className="member-btn" to="/">
                  Гишүүнчлэлийн тухай
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="education-text">
            <h1 className="education-title">БОЛОВСРОЛ</h1>
            <h2 className="education-type">1. Үндсэн сургалт</h2>
            <p className="education-description">
              Эзэн Чингис хааны зарлигаар Их Монгол улсын Эрдэмтэн мөргүн нар
              төрийг тохинуулж, иргүнийг төрөөр бадраах алдарт онолыг бүтээн
              эмхтгэж үр хойчдоо тасралтгүй өртөөлөн дамжуулж байхаар тогтоосон.
              Зарлигийг хэрэгжүүлэхэд их эзний отгон хүү Толуйн хатан Сорхогтани
              бэкинү цэцэн онцгой үүрэг гүйцэтгэж, уг номуудын амин чанаруудыг
              нэгтгэж, Их эзэн Чингис хаантай Хөх Монголчуудын”Төрийн амин
              чанарын дээд онол” буюу ард түмний нэрлэснээр ”АЛТАН ДЭЭД ҮНЭНИЙ
              АЯЛГУУ”-г бүтээжээ.Тэр үес хойш алдарт айлдвар 15 үе дамжин
              цээжлэгдсээр ирсэн ба Хөх нохойн овогт Журнайн Нүрзэд орчин цагийн
              кирилл үсэгт буулгасан.Энэхүү АДҮА судрыг Инару нэгдэл албан ёсны
              зөвшөөрөлтэй гишүүддээ сургадаг.
            </p>
            <h2 className="education-type">2. Бодлогын сургалт</h2>
            <p className="education-description">
              ИНАРУ нэгдлийн зорилгыг хэрэгжүүлэхтэй холбоотой нэгдлийн үнэт
              зүйл,эрхэм зорилго, стратеги төлөвлөлт,үйл ажиллагааны чиглэлтэй
              холбоотой сургалтууд явагдана.
            </p>
            <h2 className="education-type">3. Үнэ цэнийн сургалт</h2>
            <p className="education-description">
              Амьдралын туршлага өөрийн ажил мэргэжлийн болон хувь хүний
              хуримтлуулсан үнэ цэнэ дээр тулгуурласан сургалтуудтай.
            </p>
          </div>
          <div className="education-img">
            <img src="./assets/images/education.jpg" alt="mongol script" />
          </div>
        </section>

        <section id="footer">
          <p className="footer-text">ХАМТЫН ХАРИУЦЛАГА БИДНИЙ ИРЭЭДҮЙ</p>
          <p className="footer-text">Инару нэгдэл 2021</p>
        </section>
      </div>
    );
  }
}
