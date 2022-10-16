export interface Employee{
  isSelected:boolean;
  id:number;
  fistName:string;
  lastName:string;
  email:string;
  birthday:string;
  isPublic:boolean;
  isEdit: boolean;
}

export const EmployeeColumns =[
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'firstName',
    type: 'text',
    label: 'First Name',
    required: true,
  },
  {
    key: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    pattern: '.+@.+',
  },
  {
    key: 'birthday',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'isPublic',
    type: 'toggle',
    label: 'public',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  }
]
