import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/Forms/MemberForm';

export default function EditMember() {
  const [editMember, SetEditMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(SetEditMember);
  }, [firebaseKey]);

  return <MemberForm obj={editMember} />;
}
