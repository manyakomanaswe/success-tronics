import { PhoneIcon, MailIcon, UserCircleIcon } from '@heroicons/react/outline';

const ContactInfo = ({name,phone,email}) => {
  return (
    <div className="flex flex-col ">
        <div className='flex space-x-2 pb-2'>
      <UserCircleIcon className="w-6 h-6 text-slate-400" />
      <span>{name}</span>
        </div>

        <div className='flex space-x-2 pb-2'>
      <PhoneIcon className="w-6 h-6 text-slate-400" />
      <span>{phone}</span>
        </div>

        <div className='flex space-x-2'>
      <MailIcon className="w-6 h-6 text-slate-400" />
      <span>{email}</span>
        </div>
        
    </div>
  );
};

export default ContactInfo;
