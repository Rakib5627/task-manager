

const ContactUs = () => {

    return (
        <div id='contact'>
        <div className='mt-20'>
        <div className='w-full min-h-screen flex justify-center items-center p-4'>
            <form className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline'>Contact me</p>
                </div>
                <input className='my-4 p-2' type="text" placeholder='Name' name='from_name' />
                <input className='my-4 p-2' type="email" placeholder='Email' name='from_email' />
                <textarea className='my-4 p-2' name="message" id="" rows="10" placeholder='Type your message here'></textarea>
                <button className='border-2  rounded bg-blue-950 hover:bg-blue-900 text-white px-6 py-1 mt-4 my-8 mx-auto flex items-center'>SEND</button>
            </form>
        </div>
    </div>
    </div>
    );
};

export default ContactUs;