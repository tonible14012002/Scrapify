import { useForm } from "react-hook-form";

import EButton from "../../components/Button";
import * as AuthService from "../../auth/authServices";
import { useAuthContext } from "../../context/authContext";
import JWTManager from "../../auth/JWTManager"
import { useState } from "react";

// {
//     "username": "daisydeabak",
//     "password": "123123123",
//     "is_recipient": true,
//     "phone": "0708718901",
//     "recipient_profile": {
//         "founded_date": "1992-12-2",
//         "organization_name": "Red Cross Charity Community",
//         "desciption": "recipient_profilerecipient_profilerecipient_profilerecipient_profilerecipient_profilerecipient_profile"
//     }
// }

const Login = () => {

    const [ isRegister, setIsRegister ] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser } = useAuthContext()
    const [ errorMsg, setErrorMsg ] = useState("")

    const onSubmit = async data => {
        const { username, password, phone, ...restData } = data
        if (isRegister) {
            const userCredential = {
                username,
                password,
                phone,
                is_recipient: true,
                recipient_profile: restData
            }
            console.log(userCredential)
            try {
                const res = await AuthService.register(userCredential)
                console.log(res)
                setIsRegister(false)
            }
            catch(e) {
                console.log(e)
            }
        }
        else {
            try {
                const res = await AuthService.login({username, password})
                const { access, refresh, user } = res.data
                if (user.is_staff || !user.is_recipient) {
                    throw Error()
                }
                JWTManager.setToken(access)
                JWTManager.setRefreshToken(refresh)

                setUser(user)
                // Sync login
                localStorage.setItem('login', JSON.stringify({
                    user,
                    tokenData: {
                        access, 
                        refresh
                    }
                }))
            }
            catch (e) {
                setErrorMsg("No account match your credentials")
            }
        }
    }

    const handleRegisterClick = () => {
        setIsRegister(true)
    }

    console.log(isRegister)

    return (
        <div className="w-full flex justify-center items-center min-h-[100vh] bg-[#fffbf2] px-6 py-14">
            <div className="max-w-[600px] w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-3xl desktop:text-4xl font-bold mb-2">
                        Welcome to 
                        <span className="text-teal-600"> Scapify
                        </span>
                    </h3>
                    <h3 className="text-xl desktop:text-3xl font-normal text-zinc-600 mb-6">
                    {isRegister ? "Let's create you an account" : "Let's sign you in"}
                    </h3>

                    <span className="mb-4 block text-red-400 font-medium">{errorMsg}</span>

                    <div className="flex flex-col gap-6">
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="Username"
                            {...register("username", {required: true})}
                        />
                        {errors.username && <span className="text-red-400 font-light">This field is required</span>}
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="password"
                            type='password'
                            {...register("password", {required: true})}
                        />
                        {errors.password && <span className="text-red-400 font-light">This field is required</span>}
                        {isRegister && <>
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="phone"
                            {...register("phone", {required: true})}
                        />
                        {errors.phone && <span className="text-red-400 font-light">This field is required</span>}
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="Organization name"
                            {...register("organization_name", {required: true})}
                        />
                        {errors.organization_name && <span className="text-red-400 font-light">This field is required</span>}
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="Founded date"
                            type="date"
                            {...register("founded_date", {required: true})}
                        />
                        {errors.founded_date && <span className="text-red-400 font-light">This field is required</span>}
                        <input
                            className="outline-none bg-white p-4 desktop:p-6 rounded-xl shadow-md"
                            placeholder="description"
                            {...register("description", {required: true})}
                        />
                        {errors.description && <span className="text-red-400 font-light">This field is required</span>}
                        </>}
                    </div>
                    <EButton 
                        className="p-4 desktop:p-6 bg-teal-600 w-full mt-10 rounded-xl font-semibold text-xl text-white" 
                        type="submit"
                    >
                        Login
                    </EButton>
                </form>
                <EButton className="text-orange-500 mt-3 text-right w-full"
                    onClick={handleRegisterClick}
                >
                    Don't have an account ? Create one
                </EButton>
            </div>
        </div>
    )
}

export default Login;