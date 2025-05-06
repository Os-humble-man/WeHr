import { Link } from "react-router"

function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-50">
            <div>
                <div>
                    <h1 className="text-3xl pb-2 text-center">We are working on improving the login page. In the meantime. </h1>
                    <h1 className="text-center text-2xl mb-2">click the button below to access the home page.</h1>
                </div>

                <div className="flex justify-center mt-4">
                    <Link 
                        to="/Home"
                        type="button"
                        className="bg-red-400 px-4 py-3 rounded-md"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login

