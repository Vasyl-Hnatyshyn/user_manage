const genderList = ['male', 'female'];

const userManageInitState = {
  first_name: '',
  last_name: '',
  birth_date: '',
  gender: 'male',
  job: '',
  biography: '',
  is_active: false,
};

const fieldsModel = [
  { label: `First name:`, type: 'text', name: 'first_name' },
  { label: `Last name:`, type: 'text', name: 'last_name' },
  { label: `Birth date:`, type: 'date', name: 'birth_date' },
  { label: `Job:`, type: 'text', name: 'job' },
];

export { genderList, userManageInitState, fieldsModel };
