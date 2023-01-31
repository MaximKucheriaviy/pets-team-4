import { SponsorItem } from "./SponsorItem";

export const SponsorsList = ({ info }) => {
    return (
        <div>
            <ul>{info.map(({ imageUrl, title, workDays, address, email, phone }) => <SponsorItem key={title} imageUrl={imageUrl} title={title} workDays={workDays} address={address} email={email} phone={phone} />)}</ul>
        </div>
    )
}