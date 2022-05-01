import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/IndexPage.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>For Sale 2019 Winnebago Revel, 60k miles, $174k</h1>
      </header>
      <main className={styles.columns}>
        <aside className={styles.columnLeft}>
          <img className={styles.imageFocus} src="" alt="" />
          <div className={styles.images}>
            <img className={styles.imageThumb} src="" alt="" />
            <img className={styles.imageThumb} src="" alt="" />
            <img className={styles.imageThumb} src="" alt="" />
            <img className={styles.imageThumb} src="" alt="" />
            <img className={styles.imageThumb} src="" alt="" />
          </div>
        </aside>

        <article className={styles.columnRight}>
          <p className="larger">
            Call or Text <a href="tel:(775)790-2797">(775)790-2797</a> for more
            information
          </p>

          <dl>
            <dt>General</dt>
            <dd>Chassis and house in great working condition</dd>
            <dd>Last serviced by Mercedes April 2022</dd>
            <dd>
              3 brand new AGM batteries great for cold weather installed
              February 2022 with 3 year warranty
            </dd>
            <dd>Tires in great shape</dd>
            <dt>Upgrades and improvements</dt>
            <dd>Custom mattress by Roam Rest</dd>
            <dd>
              Extra 28 gallon fuel tank installed by Agile Off Road for a total
              of 55 gallons of fuel
            </dd>
            <dd>Aluminess Rear Bumper</dd>
            <dd>
              Aluminess Swing Arms with Storage box, Spare Tire Holder, and Bike
              Rack
            </dd>
            <dd>Upgraded Espar heater relocated for easier service</dd>

            <dd>Aluminess Ladder</dd>
            <dt>Additional details</dt>
            <dd>
              <a href="https://www.winnebago.com/Files/Images/Winnebago/brochures/2019/2019-revel-digital.x.pdf">
                2019 Winnebago Revel Original Brochure
              </a>
            </dd>
          </dl>
        </article>
      </main>
    </>
  );
};

export default IndexPage;
