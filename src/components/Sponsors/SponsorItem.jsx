
  export const SponsorItem = ({
  imageUrl,
  title,
  address,
  email,
  phone,
}) => {
  const time = "10:00-19:00"
  return (
    <li key={title}>
      <h3>{title}</h3>
      <div>
        <img width="158" height="112" src={imageUrl ? imageUrl : "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"} alt="logo" />
        </div>
      <div>
       <p>
          Time:<span>{time}</span>
        </p>
        <p>
          Addres:<span>{address ? address : ""}</span>
        </p>
        <p>
          Email:<span>{email ? email : ""}</span>
        </p>
        <p>
          Phone:<span>{phone ? phone : ""}</span>
        </p>
      </div>
    </li>
  );
};
