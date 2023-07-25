import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TeamForm from '../../../components/Forms/TeamForm';
import { getSingleTeam } from '../../../api/teamData';

export default function EditMember() {
  const [editTeam, SetEditTeam] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(SetEditTeam);
  }, [firebaseKey]);

  return <TeamForm obj={editTeam} />;
}
