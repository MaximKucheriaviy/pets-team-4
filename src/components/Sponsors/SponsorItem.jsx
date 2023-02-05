import React, { useState } from "react";
import {
  SponsorCard,
  SponsorInfo,
  SponsorHeader,
  SponsorLogoBox,
  SponsorContacts,
  SponsorText,
  SponsorLogo,
  ScheduleStyle,
  SponsorsContactsLink,
  
} from "./SponsorsStyles";

import { v4 as uuidv4 } from "uuid";

const Schedule = ({ workDays, closeModal }) => {
  return (
    <div onClick={closeModal}>
      {workDays.map((day) => (
        <div key={uuidv4()} style={{ display: day.isOpen ? "block" : "none" }}>
          {day.day} {day.isOpen ? day.from + "-" + day.to : "Closed"}
        </div>
      ))}
    </div>
  );
};

export const SponsorItem = ({
  imageUrl,
  workDays,
  title,
  address,
  email,
  phone,
}) => {
  const [showModal, setShowModal] = useState(false);
  let time = "";
  if (!workDays || workDays === null || workDays === undefined) {
    time = "--------------";
  } else {
    const openDay = workDays.find((item) => item.isOpen);
    if (openDay) {
      time = `${openDay.from}-${openDay.to}`;
    } else {
      time = "--------------";
    }
  }

  return (
    <SponsorCard key={title}>
      <SponsorHeader>{title}</SponsorHeader>
      <SponsorInfo>
        <SponsorLogoBox>
          <SponsorLogo
            width="158"
            height="112"
            src={
              imageUrl
                ? imageUrl
                : "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"
            }
            alt="logo"
          />
        </SponsorLogoBox>
        <SponsorContacts>
          <SponsorText>
            Time:
            <br />{" "}
            <span
              onClick={() =>
                workDays ? setShowModal(true) : setShowModal(false)
              }
            >
              {" "}
              {time}{" "}
            </span>
          </SponsorText>
          {showModal && workDays && (
            <ScheduleStyle>
              <Schedule
                workDays={workDays}
                closeModal={() => setShowModal(false)}
              />
            </ScheduleStyle>
          )}
          {address ? (
            <SponsorsContactsLink
              href={`https://www.google.com/maps/place/${address}`}
              target="_blank"
              rel="nofollow"
            >
              Addres:
              <br />
              <span>{address}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
              Addres:
              <br />
              <span>--------------</span>
            </SponsorText>
          )}
          {email ? (
            <SponsorsContactsLink href="mailto:info@example.com">
              Email:
              <br />
              <span>{email}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
              Email:
              <br />
              <span>--------------</span>
            </SponsorText>
          )}
          {phone ? (
            <SponsorsContactsLink href={`tel:${phone}`}>
              Phone:
              <br />
              <span>{phone}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
              Phone:
              <br />
              <span>--------------</span>
            </SponsorText>
          )}
        </SponsorContacts>
      </SponsorInfo>
    </SponsorCard>
  );
};
