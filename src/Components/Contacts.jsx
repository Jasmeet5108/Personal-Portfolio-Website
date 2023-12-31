import React from 'react'

const Contacts = () => {
    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Contact</h2>
            <section id='contact' className='px-6 flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto'>
                <div className='lg:w-[40%]'>
                    <h2 class="mt-4 text-2xl font-extrabold tracking-wide mb-2">Get in touch</h2>
                    <p className='text-[gray] text-[15px] lg:w-[80%]'>I'm always happy to hear about exciting opportunities, and build
                        valuable connections. Let's connect!</p>
                    <p className='mt-2 text-[gray] text-[15px]'>You can send an e-mail or fill out the form.</p>

                    <div className='mt-6 '>
                        <p class="mb-4 text-lg font-bold">Contact me via social</p>
                        <div className='flex items-center gap-2'>
                            <a target="_blank" title="Github link" href="https://github.com/Jasmeet5108">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="17.5" stroke="#AEAEAE"></circle>
                                    <path d="M17.9985 6C11.373 6 6 11.5087 6 18.3041C6 23.7393 9.438 28.3503 14.208 29.9787C14.808 30.092 15.027 29.7121 15.027 29.3858C15.027 29.0932 15.0165 28.3196 15.0105 27.2933C11.673 28.0362 10.968 25.6434 10.968 25.6434C10.4235 24.2218 9.636 23.8434 9.636 23.8434C8.5455 23.0806 9.717 23.0959 9.717 23.0959C10.9215 23.1832 11.5545 24.3643 11.5545 24.3643C12.6255 26.2439 14.364 25.7016 15.048 25.3861C15.156 24.591 15.4665 24.0487 15.81 23.7408C13.146 23.4298 10.344 22.3744 10.344 17.6607C10.344 16.3173 10.812 15.2189 11.58 14.358C11.4555 14.047 11.0445 12.7955 11.697 11.1027C11.697 11.1027 12.705 10.7718 14.997 12.3635C15.954 12.0908 16.98 11.9545 18.0015 11.9499C19.02 11.956 20.0475 12.0908 21.006 12.365C23.2965 10.7734 24.303 11.1043 24.303 11.1043C24.957 12.7985 24.546 14.0485 24.423 14.3595C25.1925 15.2204 25.656 16.3188 25.656 17.6623C25.656 22.3882 22.851 23.4283 20.178 23.7331C20.6085 24.1131 20.9925 24.8637 20.9925 26.0111C20.9925 27.6563 20.9775 28.9829 20.9775 29.3858C20.9775 29.7152 21.1935 30.0981 21.8025 29.9771C26.565 28.3472 30 23.7377 30 18.3041C30 11.5087 24.627 6 17.9985 6Z" fill="#7B7B7B"></path>
                                </svg>
                            </a>

                            <a target="_blank" title="Linkedin link" href="https://www.linkedin.com/in/jasmeetsingh752">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0203 25.9999H12.8135V12.4319H9.0203V25.9999ZM23.7978 11.962C21.957 11.962 20.3098 12.6834 19.1413 14.2759V12.3873H15.3343V26H19.1413V18.6386C19.1413 17.0829 20.4695 15.5652 22.133 15.5652C23.7966 15.5652 24.2068 17.0829 24.2068 18.6006V25.9987H28V18.2976C27.9999 12.9483 25.64 11.962 23.7978 11.962ZM10.8992 11.076C11.9475 11.076 12.7983 10.163 12.7983 9.03795C12.7983 7.91293 11.9475 7 10.8992 7C9.85084 7 9 7.91308 9 9.0381C9 10.1631 9.85084 11.076 10.8992 11.076Z" fill="#7B7B7B"></path>
                                    <circle cx="18" cy="18" r="17.5" stroke="#AEAEAE"></circle>
                                </svg>
                            </a>

                            <a target="_blank" title="Twitter link" href="https://twitter.com/JasmeetSingh752">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29 11.1309C28.1819 11.4923 27.3101 11.7318 26.4012 11.8482C27.3362 11.286 28.0499 10.4026 28.3854 9.33785C27.5136 9.86123 26.5511 10.2309 25.5254 10.4372C24.6976 9.54969 23.5179 9 22.2309 9C19.7339 9 17.7236 11.0409 17.7236 13.5429C17.7236 13.9029 17.7539 14.2491 17.8281 14.5786C14.0785 14.3945 10.7606 12.5848 8.53175 9.828C8.14262 10.5078 7.91438 11.286 7.91438 12.1237C7.91438 13.6966 8.71875 15.0909 9.91775 15.8982C9.19312 15.8843 8.48225 15.6725 7.88 15.3388C7.88 15.3526 7.88 15.3706 7.88 15.3886C7.88 17.5957 9.44337 19.4289 11.4935 19.8512C11.1264 19.9523 10.7262 20.0008 10.311 20.0008C10.0222 20.0008 9.73075 19.9842 9.45712 19.9232C10.0415 21.7218 11.6998 23.0442 13.6715 23.0871C12.137 24.2958 10.1886 25.0242 8.07938 25.0242C7.7095 25.0242 7.35475 25.0075 7 24.9618C8.99787 26.2592 11.3656 27 13.919 27C22.2185 27 26.756 20.0769 26.756 14.076C26.756 13.8752 26.7491 13.6814 26.7395 13.4889C27.6346 12.8492 28.3867 12.0503 29 11.1309Z" fill="#7B7B7B"></path>
                                    <circle cx="18" cy="18" r="17.5" stroke="#AEAEAE"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='mt-6 '>
                        <p class="mb-4 text-lg font-bold">Contact me via email</p>
                        <a className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#00c6ff] transition text-white rounded p-2 hover:cursor-pointer' href="mailto:jasmeet5108k@gmail.com">Tap to send an email</a>
                    </div>
                </div>
                <div id="form" className='my-16 lg:w-[500px]'>
                    <form>
                        <div id="name" className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input type="text" class="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id="email" className='flex flex-col mt-4'>
                            <label htmlFor="email">Email</label>
                            <input type="email" class="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id='textarea' className='mt-4'>
                            <label htmlFor="message">Message</label>
                            <textarea class="w-full py-2 px-4 text-base font-normal border rounded-md focus:outline-none focus:border-gray-600" rows="5">
                            </textarea>
                        </div>
                        <button type="submit" class="w-full py-4 px-6 mt-4 text-base font-semibold rounded-lg transition-colors duration-300 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#00c6ff] text-white">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacts