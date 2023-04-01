import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { Pagination } from "../../../common/Pagination";
import { PeopleList } from "./styled";
import { PersonTile } from "../PersonTile";

const PopularPeople = () => {
    return (
        <Container>
            <section>
                <SectionTitle>Popular People</SectionTitle>
                <PeopleList>
                    <PersonTile />
                </PeopleList>
            </section>
            <Pagination />
        </Container>
    );
};

export default PopularPeople;