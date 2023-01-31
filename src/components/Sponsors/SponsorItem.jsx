// import {  SponsorCard, SponsorInfo, SponsorHeader, SponsorLogoBox, SponsorContacts,SponsorText, SponsorLogo} from "./SponsorsStyles";

//   export const SponsorItem = ({
//   imageUrl,
//   workDays,
//   title,
//   address,
//   email,
//   phone,
// }) => {
//   const time = "10:00-19:00"
//   return (
//     <SponsorCard key={title}>
//       <SponsorHeader>{title}</SponsorHeader>
//       <SponsorInfo>
//       <SponsorLogoBox>
//         <SponsorLogo width="158" height="112" src={imageUrl ? imageUrl : "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"} alt="logo" />
//         </SponsorLogoBox>
//       <SponsorContacts>
//        <SponsorText>
//        {/* <Schedule workDays={workDays} /> */}
//           Time:<br/><span>{time}</span>
//         </SponsorText>
//         <SponsorText>
//           Addres:<br/><span>{address ? address : ""}</span>
//         </SponsorText>
//         <SponsorText>
//           Email:<br/><span>{email ? email : ""}</span>
//         </SponsorText>
//         <SponsorText>
//           Phone:<br/><span>{phone ? phone : ""}</span>
//         </SponsorText>
//       </SponsorContacts>
//       </SponsorInfo>
//     </SponsorCard>
//   );
// };

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
  // let time = `${workDays[0].from}-${workDays[0].to}`;
  let time="9:00-19:00";
  console.log(workDays);
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

