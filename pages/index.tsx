import type { NextPage } from "next";
import { useEffect, useLayoutEffect, useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import PhotoGrid from "../components/PhotoGrid";
import styles from "../styles/IndexPage.module.css";

const IndexPage: NextPage = () => {
  const [highlighted, highlight] = useState<string | undefined>();
  const [photosSize, setPhotosSize] = useState(512);

  const photos = [
    "/images/8958B963-DCD1-4643-9BFE-C4F60E0BC1F1-1.jpg",
    "/images/IMG_0211.jpeg",
    "/images/IMG_1098.jpeg",
    "/images/IMG_2071.jpeg",
    "/images/IMG_2352.jpeg",
    "/images/IMG_2614.jpeg",
    "/images/IMG_3393.jpeg",
    "/images/IMG_3658.jpeg",
    "/images/IMG_3690.jpeg",
    "/images/IMG_3879.jpeg",
    "/images/IMG_4277.jpeg",
    "/images/IMG_4279.jpeg",
    "/images/IMG_4297.jpeg",
    "/images/IMG_4493.jpeg",
    "/images/IMG_8538.jpeg",
    "/images/IMG_8836.jpeg",
    "/images/IMG_8837.jpeg",
  ];

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) {
        setPhotosSize(window.innerWidth * 0.44 - 16 * 3);
      } else {
        setPhotosSize(window.innerWidth - 16 * 3);
      }
    };

    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.addEventListener("resize", handler);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>For Sale 2019 Winnebago Revel, 61k miles, $159k</h1>
      </header>
      <main className={styles.columns}>
        <aside className={styles.columnLeft}>
          <PhotoGrid photos={photos} onClick={highlight} width={photosSize} />
          {highlighted && (
            <ReactBnbGallery
              activePhotoIndex={photos.indexOf(highlighted)}
              show
              photos={photos}
              onClose={() => highlight(undefined)}
            />
          )}
        </aside>

        <article className={styles.columnRight}>
          <p className="larger">
            Call or Text <a href="tel:(775)790-2797">(775)790-2797</a> for more
            information
          </p>

          <dl>
            <dt>General</dt>
            <dd>Chassis and house in excellent condition</dd>
            <dd>Last serviced by Mercedes April 2022</dd>
            <dd>
              Three brand new AGM batteries great for cold weather, installed
              February 2022 with a 3-year warranty
            </dd>

            <dt>Upgrades and improvements</dt>
            <dd>Custom mattress by Roam Rest</dd>
            <dd>
              Extra 28 gallon fuel tank installed by Agile Off-Road for a total
              of 55 gallons of fuel
            </dd>
            <dd>Aluminess Rear Bumper</dd>
            <dd>
              Aluminess Swing Arms with Storage box, Spare Tire Holder, and Bike
              Rack
            </dd>
            <dd>Aluminess Ladder</dd>
            <dd>
              Upgraded Espar heater only needs to be serviced every 5000 hours
              vs. 1000 relocated for easier service
            </dd>

            <dt>Additional details</dt>
            <dd>Have all maintenance and repair papers</dd>
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
