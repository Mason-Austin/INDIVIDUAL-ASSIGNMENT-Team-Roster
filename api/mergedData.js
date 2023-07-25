import { getSingleTeam, getTeamMembers } from './teamData';

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamMembers(teamFirebaseKey)])
    .then(([teamObj, teamMemberArray]) => {
      resolve({ ...teamObj, members: teamMemberArray });
    }).catch((error) => reject(error));
});

export default viewTeamDetails;
