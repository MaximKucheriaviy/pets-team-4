import React, { useState } from 'react';
import {  SponsorCard, SponsorInfo, SponsorHeader, SponsorLogoBox, SponsorContacts,SponsorText, SponsorLogo, ScheduleStyle} from "./SponsorsStyles";


const Schedule = ({ workDays }) => {
  return (
    workDays.map(day => (
      <div key={day.day} style={{ display: day.isOpen ? 'block' : 'none' }}>
        {day.day}: {day.isOpen ? day.from  + "-" + day.to : "Closed"}
        
      </div>
    ))
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
  const [showSchedule, setShowSchedule] = useState(false);
  
  let time="";
if (!workDays || workDays === null || workDays === undefined) {
  time = "--------------";
} else {
  const openDay = workDays.find(item => item.isOpen);
  if (openDay) {
    time = `${openDay.from}-${openDay.to}`;
  } else {
    time = "--------------";
  }
}

  // let time = `workDays ? ${workDays.find(item => item.isOpen).from}-${workDays.find(item => item.isOpen).to} : "_"`;
  return (
    <SponsorCard key={title}>
      <SponsorHeader>{title}</SponsorHeader>
      <SponsorInfo>
      <SponsorLogoBox>
        <SponsorLogo width="158" height="112" src={imageUrl ? imageUrl : "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"} alt="logo" />
        </SponsorLogoBox>
      <SponsorContacts>
        <SponsorText>
          Time:<br/><span onMouseEnter={() => setShowSchedule(true)} onMouseLeave={() => setShowSchedule(false)}>{time}</span>
          {showSchedule && (
            <ScheduleStyle>
              <Schedule workDays={workDays} />
            </ScheduleStyle>
          )}
        </SponsorText>
        <SponsorText>
          Addres:<br/><span>{address ? address : ""}</span>
        </SponsorText>
        <SponsorText>
          Email:<br/><span>{email ? email : ""}</span>
        </SponsorText>
        <SponsorText>
          Phone:<br/><span>{phone ? phone : ""}</span>
        </SponsorText>
      </SponsorContacts>
      </SponsorInfo>
    </SponsorCard>
  );
};

