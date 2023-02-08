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
import { useTranslation } from 'react-i18next';
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
    time = "----------------------------------";
  } else {
    const openDay = workDays.find((item) => item.isOpen);
    if (openDay) {
      time = `${openDay.from}-${openDay.to}`;
    } else {
      time = "----------------------------------";
    }
  }
  const {t} = useTranslation();
  return (
    <SponsorCard key={title}>
      <SponsorHeader>{title}</SponsorHeader>
      <SponsorInfo>
        <SponsorLogoBox>
          <SponsorLogo
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
           {t("time")}:
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
              {t("addres")}:
              <br />
              <span>{address}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
              {t("addres")}:
              <br />
              <span>----------------------------------</span>
            </SponsorText>
          )}
          {email ? (
            <SponsorsContactsLink href="mailto:info@example.com">
             {t("email")}:
              <br />
              <span>{email}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
               {t("email")}::
              <br />
              <span>----------------------------------</span>
            </SponsorText>
          )}
          {phone ? (
            <SponsorsContactsLink href={`tel:${phone}`}>
                 {t("phone")}:
              <br />
              <span>{phone}</span>
            </SponsorsContactsLink>
          ) : (
            <SponsorText>
               {t("phone")}:
              <br />
              <span>----------------------------------</span>
            </SponsorText>
          )}
        </SponsorContacts>
      </SponsorInfo>
    </SponsorCard>
  );
};
