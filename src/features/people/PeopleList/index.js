import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { PeopleList } from "./styled";
import { PersonTile } from "../PersonTile";
import { fetchPeopleLoading, selectPopularPeople, selectPopularPeopleTotalPages } from "../popularPeopleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PopularPeople = () => {
    const dispatch = useDispatch();
    const people = useSelector(selectPopularPeople);

    useEffect(() => {
        dispatch(fetchPeopleLoading());
    }, [dispatch]);

    return (
        <Container>
            <section>
                <SectionTitle>Popular People</SectionTitle>
                {people && people.length > 0 && (<PeopleList>
                    {people.map(({ profile_path, id, name }) => (
                        <PersonTile
                            key={id}
                            id={id}
                            profile_path={profile_path}
                            name={name}
                        />
                    ))}
                </PeopleList>)}
            </section>
        </Container>
    );
};

export default PopularPeople;