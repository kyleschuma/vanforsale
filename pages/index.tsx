import type { NextPage } from "next";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";

const IndexPage: NextPage = () => {
  const photos = [
    "/images/8958B963-DCD1-4643-9BFE-C4F60E0BC1F1-1.jpg",
    //"/images/IMG_0211.jpeg",
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
    //"/images/IMG_4297.jpeg",
    //"/images/IMG_4493.jpeg",
    //"/images/IMG_8538.jpeg",
    //"/images/IMG_8836.jpeg",
    //"/images/IMG_8837.jpeg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (index === photos.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 30);
      }
    }, 1000 * 1);

    return () => {
      clearInterval(handle);
    };
  }, [index, photos.length]);

  return (
    <main>
      <article>
        <header>
          <h1>
            {`2019 Winnebago Revel Mercedes Sprinter 144'' 4x4 Adventure Van for Sale`}
          </h1>
        </header>
        <p>
          {`All the comforts of home while you explore your favorite spots.
          Whether a weekend getaway to the mountains to beat the heat or a
          months-long ski vacation, this Revel has everything you could need.
          Get started with your adventure today.`}
        </p>
        <p>
          {`Includes seatbelts for 4 and most comfortably sleeps 2 adults and 1 to
          2 children. Includes wet bath (cassette toilet + shower),
          refrigerator/freezer, sink, and induction burner. Take a look at the
          original `}
          <a href="https://www.winnebago.com/Files/Images/Winnebago/brochures/2019/2019-revel-digital.x.pdf">
            brochure
          </a>
          {` to get all the details about what was included with the Revel.`}
        </p>
        <p>
          {`We've also made a few upgrades, including:`}
          <ul>
            <li>
              Added a 28-gallon auxiliary fuel tank to give you a 55-gallon
              total capacity
            </li>
            <li>
              Aluminess rear bumper with swing arms, storage box, spare tire
              holder, and bike rack
            </li>
            <li>Aluminess Side Ladder</li>
            <li>Upgraded Espar diesel heater</li>
            <li>Custom mattress by Roam Rest </li>
          </ul>
          {`This van is in excellent condition inside and out. We've recently
          installed 3 new AGM batteries for the house with a 3-year warranty.
          All services on the chassis have been done on time, with the last
          occurring in April of 2022. We are the original owners and will
          provide all service records and repair papers. With just under `}
          <b>62K miles</b>
          {` and a fuel economy of `}
          <b>17 MPG</b>
          {` on the highway, the Sprinter
          chassis will keep you going for many years without breaking the bank.`}
        </p>
        <p>
          {`So why are we selling our Revel? We've been on the road in a van
          for four years. The Revel is our third van, and while we love it, we
          look forward to building a van that is better suited to our lifestyle
          needs.`}
        </p>
        <p>
          {`Asking for `}
          <b>$159,000 OBO.</b>
          {` The sale will be handled by Mercedes
          Benz of St. George, Utah (No, you don't have to travel to Utah).
          The Winnebago Revel is considered a Class B RV, so you may be eligible
          for an RV loan. RV loans have longer terms than a standard vehicle
          loan which would lower your monthly payment.`}
        </p>
        <p>
          {`The van is currently in Mission Viejo, California. We will meet to
          show in Orange County and immediate surrounding counties. (We may be
          willing to travel for showings or delivery in or around California.)`}
        </p>
        <p>
          {`Please call or text `}
          <a href="tel:7755902797">(775)790-2797</a>
          {` if interested.`}
        </p>
      </article>
      <aside>
        <Image
          alt="Image"
          src={photos[index]}
          layout="fill"
          objectFit="cover"
          width="100%"
        />
      </aside>
    </main>
  );
};

export default IndexPage;
