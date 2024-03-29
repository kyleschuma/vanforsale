import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";

const IndexPage: NextPage = () => {
  const backgrounds = [
    "/images/IMG_0526.jpeg",
    "/images/IMG_1098.jpeg",
    "/images/IMG_2352.jpeg",
    "/images/IMG_3690.jpeg",
  ];
  const photos = [
    "/images/IMG_0211.jpeg",
    "/images/IMG_0366.jpeg",
    "/images/IMG_0526.jpeg",
    "/images/IMG_0576.jpeg",
    "/images/IMG_0629.jpeg",
    "/images/IMG_1098.jpeg",
    "/images/IMG_1671.jpeg",
    "/images/IMG_1702.jpeg",
    "/images/IMG_1748.jpeg",
    "/images/IMG_2058.jpeg",
    "/images/IMG_2070.jpeg",
    "/images/IMG_2071.jpeg",
    "/images/IMG_2198.jpeg",
    "/images/IMG_2352.jpeg",
    "/images/IMG_2463.jpeg",
    "/images/IMG_2613.jpeg",
    "/images/IMG_2888.jpeg",
    "/images/IMG_2894.jpeg",
    "/images/IMG_3151.jpeg",
    "/images/IMG_3393.jpeg",
    "/images/IMG_3658.jpeg",
    "/images/IMG_3690.jpeg",
    "/images/IMG_3776.jpeg",
    "/images/IMG_3879.jpeg",
    "/images/IMG_4198.jpeg",
    "/images/IMG_4272.jpeg",
    "/images/IMG_4273.jpeg",
    "/images/IMG_4274.jpeg",
    "/images/IMG_4277.jpeg",
    "/images/IMG_4279.jpeg",
    "/images/IMG_4297.jpeg",
    "/images/IMG_4493.jpeg",
    "/images/IMG_4526.jpeg",
    "/images/IMG_4728.jpeg",
    "/images/IMG_6154.jpeg",
    "/images/IMG_7259.jpeg",
    "/images/IMG_7467.jpeg",
    "/images/IMG_8516.jpeg",
    "/images/IMG_8538.jpeg",
    "/images/IMG_8554.jpeg",
    "/images/IMG_4436.jpeg",
    "/images/IMG_4437.jpeg",
    "/images/IMG_4445.jpeg",
    "/images/IMG_4446.jpeg",
    "/images/IMG_4447.jpeg",
    "/images/IMG_4448.jpeg",
    "/images/IMG_4449.jpeg",
    "/images/IMG_8845.jpeg",
    "/images/IMG_8856.jpeg",
  ];
  const [highlighted, highlight] = useState<string | undefined>();
  const [toggled, toggle] = useState(0);
  const [width, setWidth] = useState(Number.MAX_SAFE_INTEGER);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (toggled === backgrounds.length - 1) {
        toggle(0);
      } else {
        toggle(toggled + 1);
      }
    }, 1000 * 30);

    return () => {
      clearInterval(handle);
    };
  }, [toggled, backgrounds.length]);

  useEffect(() => {
    setWidth(document.body.offsetWidth);
  }, []);

  const isSmallScreen = width <= 414;

  return (
    <>
      <div className="background-image">
        <Image
          alt="Background Image"
          src={backgrounds[toggled]}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>
      {highlighted && (
        <ReactBnbGallery
          backgroundColor="rgba(0 0 0 / 75%)"
          activePhotoIndex={photos.indexOf(highlighted)}
          show
          photos={photos}
          onClose={() => highlight(undefined)}
        />
      )}
      <main>
        <article>
          <header>
            <h1>
              {`2019 Winnebago Revel Mercedes Sprinter 144'' 4x4 Adventure Van for Sale`}
            </h1>
            {isSmallScreen && (
              <div className="hero-image">
                <Image
                  alt="Background Image"
                  src={backgrounds[toggled]}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </header>

          <p>
            {`All the comforts of home while you explore your favorite spots. Whether a weekend getaway to the mountains to beat the heat or a months-long ski vacation, this Revel has everything you could need. Get started with your adventure today.`}
          </p>
          <p>
            {`Includes seatbelts for 4 and most comfortably sleeps 2 adults and 1 to 2 children. Includes wet bath (cassette toilet + shower) that also doubles as a storage closet with removable bamboo shelving, refrigerator/freezer, sink, and induction burner. Take a look at the original `}
            <a href="https://www.winnebago.com/Files/Images/Winnebago/brochures/2019/2019-revel-digital.x.pdf">
              brochure
            </a>
            {` to get all the details about what was included with the Revel.`}
          </p>
          <p>
            {`Over $12,500 in upgrades, including:`}
            <ul>
              <li>
                28-gallon auxiliary fuel tank to give you a 55-gallon total
                capacity
              </li>
              <li>
                Aluminess rear bumper with swing arms, storage box, spare tire
                holder, bike rack, and Side Ladder
              </li>
              <li>Upgraded Espar diesel heater</li>
              <li>Custom mattress by Roam Rest </li>
            </ul>
            {`This van is in excellent condition inside and out. We've recently installed 3 new AGM batteries for the house with a 3-year warranty. All services on the chassis have been done on time by Mercedes Benz, with the last occurring in April of 2022. A full house inspection was performed by El Toro RV in May of 2022. We are the original owners and will provide all service records and repair papers. With just under `}
            <b>66K miles</b>
            {` and a fuel economy of `}
            <b>17 MPG</b>
            {` on the highway, the Sprinter
          chassis will keep you going for many years.`}
          </p>
          <p>
            {`So why are we selling our Revel? We've been on the road in a van for four years. The Revel is our third van, and while we love it, we look forward to building a van that is better suited to our lifestyle needs.`}
          </p>
          <p>
            {`Asking for `}
            <b>$119,000.</b>
            {` The sale will be handled by Mercedes Benz of St. George, Utah (No, you don't have to travel to Utah). Trade-ins and financing may be available. The Winnebago Revel is considered a Class B RV, so you may be eligible for an RV loan. RV loans have longer terms than a standard vehicle  loan which would lower your monthly payment.`}
          </p>
          <p>
            {`The van is currently in Mission Viejo, California. We will meet to show in Orange County and immediate surrounding counties. (We may be willing to travel for showings or delivery in or around California.)`}
          </p>
          <p>
            {`Please call or text `}
            <a href="tel:7757902797">(775)790-2797</a>
            {` if interested.`}
          </p>
          <div className="image-gallery">
            {photos.map((photo) => (
              <Image
                key={photo}
                alt="Image"
                src={photo}
                layout="intrinsic"
                objectFit="cover"
                width={isSmallScreen ? 160 : 192}
                height={isSmallScreen ? 120 : 144}
                onClick={() => highlight(photo)}
              />
            ))}
          </div>
        </article>
        <aside></aside>
      </main>
    </>
  );
};

export default IndexPage;
