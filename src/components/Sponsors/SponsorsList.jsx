import { SponsorItem } from "./SponsorItem";
import {SponsorContainer, SponsorList} from "./SponsorsStyles";

export const SponsorsList = ({ info }) => {
    return (
        <SponsorContainer>
            <SponsorList>{info.map(({ imageUrl, title, workDays, address, email, phone }) => <SponsorItem key={title} imageUrl={imageUrl} title={title} workDays={workDays} address={address} email={email} phone={phone} />)}</SponsorList>
        </SponsorContainer>
    )
}