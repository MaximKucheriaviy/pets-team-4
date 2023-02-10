import { getAllSponsors } from "../../services/apiSponsors";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { useEffect, useState } from "react";
import { SponsorsList } from "../../components/Sponsors/SponsorsList";
import { ButtonToTop } from "../../components/ButtonToTop";
import { scrollTopPage } from "../../helpers/scrollUp";
import { SlArrowUp } from "react-icons/sl";

const PAGE_SCROLL_DOWN = 600;

export default function OurFriendsPage() {
    const [sponsors, setSponsors] = useState([]);
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const fechSponsors = async () => {
            try {
                const { data } = await getAllSponsors();
                setSponsors(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fechSponsors();
    }, []);
    const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

    return (
        <DefaultPage title="Our Friends">
            <SponsorsList info={sponsors} />
            {isShowButtonTop && (
                <ButtonToTop onClick={scrollTopPage} aria-label="To top page">
                    <SlArrowUp />
                </ButtonToTop>
            )}
        </DefaultPage>
    );
}
