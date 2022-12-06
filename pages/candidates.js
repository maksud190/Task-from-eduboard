import Navbar from "../Components/Candidates/Navbar";
import MainNavbar from "../Components/Shared/MainNavbar";


const Candidates = () => {
    return (
        <div className="mx-5">
            <MainNavbar></MainNavbar>
            <Navbar></Navbar>
            <main className='flex'>
                <div className='w-80'>
                    <div>
                        <p className='text-slate-400 my-5'>
                            Filter Applications By
                        </p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="option1" id="flexCheckDefault1" />

                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault1">
                                Posting Title
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault2" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault2">
                                Application Status
                            </label>
                        </div>
                        <hr className='w-48 mt-3' />
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault3">
                                To-Dos
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault4" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault4">
                                Notes
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault5" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault5">
                                Attachment Category
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault6" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault6">
                                Rating
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault7" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault7">
                                Last Name
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault8" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault8">
                                Hiring Pipeline
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault9" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault9">
                                Application ID
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault10" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault10">
                                Account Manager
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault11" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault11">
                                Application Owner
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault12" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault12">
                                Application Source
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault13" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault13">
                                Assigned Recruiter(s)
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault14" />
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault14">
                                Associated Tags
                            </label>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <div className='flex'>
                        {/* <div className='px-5 py-4 mr-6 hover:bg-slate-500'>Hello</div> */}
                        <nav className=''>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Rating</button>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Application Name</button>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Hiring Pipeline</button>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Application Status</button>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Application ID</button>
                            <button className='px-5 py-4 mr-6 hover:bg-slate-500'>Posting Title</button>
                        </nav>
                    </div>
                    <hr className='w-auto' />
                    <div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Candidates;