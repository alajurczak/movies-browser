// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { selectMovieCredits } from "../movieSlice";
// import {
//   selectPersonData,
//   fetchPersonDataLoading,
// } from "../../../people/ActorTile/personSlice";
// import { GridList } from "../../../../common/GridList";
// import { SectionTitle } from "../../../../common/SectionTitle/styled";
// import { CrewTile, CrewImage, CrewName, CrewRole } from "./styled";
// import { imagesBaseUrl } from "../../../../ApiPaths";

// const Crew = () => {
//   const movieCrew = useSelector(selectMovieCredits);
//   const person = useSelector(selectPersonData);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPersonDataLoading());
//   }, [dispatch]);

//   return (
//     <section>
//       <SectionTitle as="h2" detailsPage>
//         Crew
//       </SectionTitle>
//       <GridList popularPeople>
//         <li key={movieCrew.cast_id}>
//           <CrewTile>
//             <CrewImage
//               src={
//                 person.profile_path
//                   ? `${imagesBaseUrl}/w342${
//                       person.profileSizes ? person.profileSizes[1] : ""
//                     }${person.profile_path}`
//                   : person.noProfile
//               }
//               alt=""
//             />
//             <CrewName>{movieCrew.name}</CrewName>
//             <CrewRole>{movieCrew.role}</CrewRole>
//           </CrewTile>
//         </li>
//       </GridList>
//     </section>
//   );
// };

// export default Crew;
