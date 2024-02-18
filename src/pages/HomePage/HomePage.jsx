import { LuClock } from 'react-icons/lu';
import { LuCalendarClock } from 'react-icons/lu';
import { MdOutlineCarRental } from 'react-icons/md';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdOutlineSupportAgent } from 'react-icons/md';
import Container from 'components/Container';
import { HomePageStyles } from './HomePage.styled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <HomePageStyles>
        <p>
          Welcome to "Rent Auto", your trusted partner for car rental services.
        </p>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>
              <LuClock />
              <p>
                Short-term car rental: We offer flexible rental terms for a few
                hours or a few days, allowing you to have access to a car
                whenever you need it.
              </p>
            </li>
            <li>
              <LuCalendarClock />
              <p>
                Long-term car rental: If you need a car for an extended period,
                we provide special rates for long-term rentals.
              </p>
            </li>
            <li>
              <MdOutlineCarRental />
              <p>
                Vehicle options: We have a wide range of car makes, models, and
                sizes to choose from, so you can find the one that best fits
                your needs and budget.
              </p>
            </li>
            <li>
              <LiaShippingFastSolid />
              <p>
                Car delivery and pick-up: We provide convenient car delivery to
                your specified location and time, so you can focus on your
                activities.
              </p>
            </li>
            <li>
              <MdOutlineSupportAgent />
              <p>
                24/7 support: Our team is always ready to assist you with any
                questions or issues that may arise during your car rental.
              </p>
            </li>
          </ul>
          <p>
            We strive to provide you with convenient and reliable car rental
            services, ensuring your trips are comfortable and safe. Contact us
            today to learn more about our services and to reserve a car for your
            next journey.
          </p>
        </section>

        <section>
          <h2>Why choose us:</h2>
          <ul>
            <li>
              <p>
                <span>Extensive car selection</span>
              </p>
            </li>
            <li>
              <p>
                <span>Competitive pricing</span>
              </p>
            </li>
            <li>
              <p>
                <span>Exceptional customer service</span>
              </p>
            </li>
            <li>
              <p>
                <span>Convenient locations</span>
              </p>
            </li>
            <li>
              <p>
                <span>Flexible rental terms</span>
              </p>
            </li>
          </ul>
          <p>
            Experience the convenience and freedom of exploring with a reliable
            rental car from "RentAuto". We look forward to serving you and
            making your car rental experience a memorable one.
          </p>
          <p>
            Click the button below to browse our catalog and choose your ideal
            car for your next adventure
          </p>
          <Link to="/catalog"> Catalog </Link>
        </section>
      </HomePageStyles>
    </Container>
  );
};
export default HomePage;
