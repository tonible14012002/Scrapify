import { useState } from "react";
import { useForm } from "react-hook-form";
import JWTManager from "../../auth/JWTManager";
import * as AuthService from "../../auth/authServices";
import { useAuthContext } from "../../context/authContext";
import EButton from "../../components/Button";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ errorMsg, setErrorMsg ] = useState("")

    const onSubmit = async data => {
        try {

        }
        catch (e) {
            setErrorMsg("No account match your credentials")
        }
    }

    return (
        <div className="w-full flex justify-center items-center h-[100vh] bg-[#fffbf2] px-6">
            <form 
                className="w-full max-w-[600px]"
                onSubmit={handleSubmit(onSubmit)}
            >
            <h3 className="text-3xl desktop:text-4xl font-bold mb-2">
                Welcome to 
                <span className="text-teal-600"> Scapify
                </span>
            </h3>
            <h3 className="text-xl desktop:text-3xl font-normal text-zinc-600 mb-6">Let's create you an account</h3>

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
                {errors.username && <span className="text-red-400 font-light">This field is required</span>}
            </div>
            <EButton 
                className="p-4 desktop:p-6 bg-teal-600 w-full mt-10 rounded-xl font-semibold text-xl text-white" 
                type="submit"
            >
                Login
            </EButton>
            </form>
        </div>
    )
}

export default Register;