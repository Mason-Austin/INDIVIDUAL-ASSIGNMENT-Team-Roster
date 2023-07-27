import { deleteMember } from './memberData';
import { deleteTeam, getSingleTeam, getTeamMembers } from './teamData';

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamMembers(teamFirebaseKey)])
    .then(([teamObj, teamMemberArray]) => {
      resolve({ ...teamObj, members: teamMemberArray });
    }).catch((error) => reject(error));
});

const deleteTeamandMembers = (teamFirebaseKey) => new Promise((resolve, reject) => {
  getTeamMembers(teamFirebaseKey).then((membersArray) => {
    const deleteMemberPromises = membersArray.map((member) => deleteMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteTeam(teamFirebaseKey).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewTeamDetails, deleteTeamandMembers };
