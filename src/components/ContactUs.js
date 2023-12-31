import ContactInfo from "./ContactInfo";


const ContactUs = () => {
  return (
    <div className="bg-slate-100">

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="contactus" className="text-xl font-medium text-center text-gray-700 uppercase pt-4 pb-4 md:font-semibold  md:text-3xl">contact us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4">
      <h4 className=" text-xl font-medium text-blue-700 mb-4 mt-4 md:text-2xl">Director</h4>
<ContactInfo name="Success Mahlagaume" phone="0792215760" email="Success.khosi@gmail.com"/>


    </div>
     
<div className="p-4">
<h4 className=" text-xl font-medium text-blue-700 mb-4 mt-4 md:text-2xl">Accounts Manager</h4>
<ContactInfo name="Lebogang Phala" phone="0815653226" email="Lebophala20@gmail.com"/>
</div>

    </div>
    
    </div>

    
    </div>
  )
}

export default ContactUs