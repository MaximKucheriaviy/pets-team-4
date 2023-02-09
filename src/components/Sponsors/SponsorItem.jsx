import React, { useState } from "react";
import {
  SponsorCard,
  SponsorInfo,
  SponsorHeader,
  SponsorText,
  SponsorLogo,
  ScheduleStyle,
  SponsorsContactsLink,
  PlugText,
} from "./SponsorsStyles";

import { v4 as uuidv4 } from "uuid";

const Schedule = ({ workDays, closeModal }) => {
  return (
    <div onClick={closeModal}>
      {workDays.map((day) => (
        <div
          key={uuidv4()}
          style={{
            display: day.isOpen ? "flex" : "none",
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          {day.day}
          <span>{day.isOpen ? day.from + "-" + day.to : "Closed"}</span>
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
    time = "----------------------------";
  } else {
    const openDay = workDays.find((item) => item.isOpen);
    if (openDay) {
      time = `${openDay.from}-${openDay.to}`;
    } else {
      time = "----------------------------";
    }
  }

  return (
    <SponsorCard key={title}>
      <SponsorHeader>{title}</SponsorHeader>
      <SponsorInfo>
        {imageUrl ? (
          <SponsorLogo src={imageUrl} alt="logo" />
        ) : (
          <SponsorLogo
            src="https://logopond.com/logos/eacb3b71dda19719c0c9a42560d9aa21.png"
            alt="logo"
          />
        )}
        <div>
          {workDays ? (
            <SponsorText>
              Time:
              <br />
              <span onClick={() => setShowModal(true)}>{time}</span>
            </SponsorText>
          ) : (
            <PlugText>
              Time:
              <br />
              <span onClick={() => setShowModal(false)}>{time}</span>
            </PlugText>
          )}
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
            <PlugText>
              Addres:
              <br />
              <span>----------------------------</span>
            </PlugText>
          )}
          {email ? (
            <SponsorsContactsLink href={`mailto:${email}`}>
              Email:
              <br />
              <span>{email}</span>
            </SponsorsContactsLink>
          ) : (
            <PlugText>
              Email:
              <br />
              <span>----------------------------</span>
            </PlugText>
          )}
          {phone ? (
            <SponsorsContactsLink href={`tel:${phone}`}>
              Phone:
              <br />
              <span>{phone}</span>
            </SponsorsContactsLink>
          ) : (
            <PlugText>
              Phone:
              <br />
              <span>----------------------------</span>
            </PlugText>
          )}
        </div>
      </SponsorInfo>
    </SponsorCard>
  );
};
