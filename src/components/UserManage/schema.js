import * as Yup from 'yup';

const userManageSchema = Yup.object().shape({
  first_name: Yup.string().max(256, 'Too Long!').required('Required'),
  last_name: Yup.string().max(256, 'Too Long!').required('Required'),
  gender: Yup.string().required('Required'),
  job: Yup.string().max(256, 'Too Long!').required('Required'),
  biography: Yup.string().max(1024, 'Too Long!').required('Required'),
  birth_date: Yup.string().required('Required'),
});

export { userManageSchema };
